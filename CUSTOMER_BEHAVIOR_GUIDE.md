# Customer Behavior Analysis Guide

This guide explains how to use the SQLite Viewer extension to analyze customer behavior when factors such as prices and tastes are altered.

## Getting Started

### 1. Open the Sample Database

1. Open VS Code
2. Run the command "SQLite Viewer: Start" from the Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
3. Click "Open DB" button
4. Navigate to `sample-data/customer_behavior.db` in the extension directory

### 2. Explore the Data

The sample database contains:
- **customers** - Customer profiles with location data
- **products** - Product catalog with prices and taste profiles
- **purchases** - Transaction history with price at time of purchase

### 3. Use the Analysis Views

The database includes pre-built views for analyzing customer behavior:

#### customer_behavior_summary
Shows overall customer purchasing patterns:
- Total purchases per customer
- Total items purchased
- Total amount spent
- Average price paid

#### price_sensitivity
Analyzes how price changes affect sales:
- Current product price vs historical purchase prices
- Purchase count by product
- Total quantity sold

**Example Analysis**: If `current_price > avg_purchase_price`, the price has increased since customers typically bought it. Check if `purchase_count` decreased after the price change.

#### taste_preferences
Shows customer preferences by taste profile (bitter, sweet, mild, spicy, salty):
- Purchase count by taste category per customer
- Items purchased in each taste category

**Example Analysis**: Identify which customers prefer which taste profiles to personalize marketing.

### 4. Filter Data

Use the new filtering feature to narrow down your analysis:

1. Select a table from the dropdown
2. Choose a column to filter by
3. Enter a filter value (e.g., "sweet" for taste_profile, "5.99" for prices)
   - The filter performs case-insensitive substring matching
   - For example, entering "sweet" will match "sweet", "Sweet", "bittersweet"
4. Click "Apply Filter"
5. Click "Clear Filter" to reset

### 5. Analyze Customer Behavior

#### Example 1: Price Impact Analysis

1. Open the `price_sensitivity` view
2. Filter by products where price has increased
3. Check if `purchase_count` or `total_quantity_sold` decreased

#### Example 2: Taste Preference Segmentation

1. Open the `taste_preferences` view
2. Filter by specific taste profiles (e.g., "sweet")
3. Identify customers who prefer that taste profile
4. Use this data to target marketing campaigns

#### Example 3: Customer Value Analysis

1. Open the `customer_behavior_summary` view
2. Filter by location or spending amount
3. Identify high-value customers
4. Analyze their purchasing patterns

## Extending the Analysis

You can add your own data to the database:

1. Use the "Insert record" action to add new:
   - Customers
   - Products (with different prices and taste profiles)
   - Purchases

2. Track changes over time:
   - Add purchases at different prices to see price elasticity
   - Add products with different taste profiles to test preferences

3. Compare results:
   - Use the filter feature to segment data
   - Export results or take screenshots for reporting

## Tips for Analysis

- **Price Sensitivity**: Compare `current_price` to `avg_purchase_price` to see if demand changed with price
- **Taste Trends**: Look for patterns in `taste_preferences` to understand customer segments
- **Customer Lifetime Value**: Use `total_spent` in `customer_behavior_summary` to identify VIP customers
- **Location-based Analysis**: Filter by location to see regional preferences

## Notes

- The sample data includes fictional customers and products for demonstration
- Price changes are reflected in the `price_at_purchase` field in the purchases table
- Views automatically update when underlying data changes
