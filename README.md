# sqlite-viewer extension

See and manage your SQLite databases easily.

## Features

It includes a button to select the database file (.db) by opening a file selection dialog, and a text that displays the selected database name:

![initialized extension](https://github.com/thegera4/sqlite-viewer/assets/84020433/c0734d06-1009-4eab-ab0d-39374846bbea)

![open db dialog](https://github.com/thegera4/sqlite-viewer/assets/84020433/3bcf8a91-c71d-45c2-a830-537573025a29)

After selecting a database, the "select" element (combo / dropdown) is filled with all table names from the database file:

![selected db and filled table select](https://github.com/thegera4/sqlite-viewer/assets/84020433/1de75c60-c1e1-4d71-af43-77005ae305c1)

When you select a table, the data will be displayed in a "table" element:

![table selected](https://github.com/thegera4/sqlite-viewer/assets/84020433/2ddb25e5-977b-48a2-a508-8119677cbe96)

Finally, below the table, you will find a section to insert, delete and update a record. You do not need to know or write any SQL:

**Add a record**

![insert controls](https://github.com/thegera4/sqlite-viewer/assets/84020433/ce1fdaa3-a3b6-4098-aeec-4f4215577d9b)

![new record added](https://github.com/thegera4/sqlite-viewer/assets/84020433/c1fcaff3-4348-4bd7-8e5f-f01265e92244)

**Update a record**

![update controls](https://github.com/thegera4/sqlite-viewer/assets/84020433/409f8901-b0f8-477d-b129-53761791ca05)

![record updated](https://github.com/thegera4/sqlite-viewer/assets/84020433/9373c7b3-aeed-4752-8174-0746221f2d2f)

**Delete a record**

![delete controls](https://github.com/thegera4/sqlite-viewer/assets/84020433/c09f0003-f445-4766-bd6f-87e108841c05)

![deleted record](https://github.com/thegera4/sqlite-viewer/assets/84020433/2764121b-b9d1-42fd-8858-a1d732b22edc)

## Requirements

* `sqlite3`: npm install sqlite3

## Release Notes

This is my first extension for VSCode. I appreciate any feedback or contribution to improve the project. 

I made this project as a personal tool because I'm always looking for an application to view my SQLite databases, and I normally do not want to download and install anything on my computer, so I decided to make this application directly for VSCode.

### 1.0.0

Initial release

**Enjoy!**
