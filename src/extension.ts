import * as vscode from 'vscode';
import * as sqlite3 from 'sqlite3';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	console.log('SQLite Viewer is now active!');

	let showDatabaseDisposable = vscode.commands.registerCommand('sqlite-viewer.startDbViewer', () => {
		const panel = vscode.window.createWebviewPanel('sqliteViewer', 'SQLite DB Viewer', vscode.ViewColumn.One,{enableScripts: true});

		const htmlPath = path.join(context.extensionPath, 'src', 'index.html');
		const htmlContent = fs.readFileSync(htmlPath, 'utf8');
		panel.webview.html = htmlContent; 

		let db: sqlite3.Database;

		//handle messages from webview
		panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'openDatabaseDialog': // open file dialog
						const options: vscode.OpenDialogOptions = {
							canSelectMany: false,
							openLabel: 'Open',
							filters: {
								'SQLite Database': ['db', 'sqlite', 'sqlite3']
							}
						};

						vscode.window.showOpenDialog(options).then(fileUri => {
							if (fileUri && fileUri[0]) {
								//open database
								let dbPath = fileUri[0].fsPath;
								db = new sqlite3.Database(dbPath, (err) => {
									if (err) {
										vscode.window.showErrorMessage('Error while opening database: ' + err.message);
										return;
									}

									//get tables and send to webview
									db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, tables: { name: string }[]) => {
										if (err) {
											vscode.window.showErrorMessage('Error while getting tables: ' + err.message);
											return;
										}

										panel.webview.postMessage({
											command: 'showTables',
											tables: tables.map((t: { name: string }) => t.name)
										});

									});

									// send the db name to the webview
									panel.webview.postMessage({
										command: 'showSelectedDB',
										dbName: path.basename(fileUri[0].fsPath)
									});

								});

								//close connection
								context.subscriptions.push(new vscode.Disposable(() => db.close()));
							}
						});
						break;
					case 'fetchTableData': // fetch table data
						if (db) {
							db.all(`SELECT * FROM ${message.tableName}`, [], (err, rows: any[]) => {
								if (err) {
									vscode.window.showErrorMessage('Error while fetching data: ' + err.message);
									return;
								}

								let columns = rows.length > 0 ? Object.keys(rows[0]) : [];
								let tableData = rows.map(row => Object.values(row));

								panel.webview.postMessage({
									command: 'showTableData',
									data: {
										columns: columns,
										rows: tableData
									}
								});
							});
						} else {
							vscode.window.showErrorMessage('No database opened');
						}
						break;
					default:
						vscode.window.showErrorMessage('Unknown command: ' + message.command);
						break;
				}
			},
			undefined,
			context.subscriptions
		);

	});

	context.subscriptions.push(showDatabaseDisposable);
}
 
export function deactivate(context: vscode.ExtensionContext) {
	if (context.subscriptions) {
		for (let sub of context.subscriptions) {
			const disposable = sub as vscode.Disposable;
			disposable.dispose();
		}
	}
}