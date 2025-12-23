# Customer Behavior Analysis Sample Database

This sample SQLite database demonstrates how to analyze customer behavior based on various factors such as prices and taste preferences.

## Database Schema

### Tables

1. **customers** - Customer information
   - customer_id (Primary Key)
   - name
   - email
   - join_date
   - location

2. **products** - Product catalog with pricing and attributes
   - product_id (Primary Key)
   - name
   - category
   - price (current price)
   - taste_profile (bitter, sweet, mild, spicy, salty)

3. **purchases** - Transaction history
   - purchase_id (Primary Key)
   - customer_id (Foreign Key)
   - product_id (Foreign Key)
   - purchase_date
   - quantity
   - price_at_purchase (price at time of purchase)

### Analysis Views

The database includes pre-built views for analyzing customer behavior:

1. **customer_behavior_summary** - Overview of customer purchasing patterns
   - Total purchases per customer
   - Total items purchased
   - Total amount spent
   - Average price paid

2. **price_sensitivity** - Analysis of how price changes affect sales
   - Current product price vs average purchase price
   - Purchase count by product
   - Total quantity sold

3. **taste_preferences** - Customer preferences by taste profile
   - Purchase count by taste category per customer
   - Items purchased in each taste category

## How to Use

1. Open the SQLite Viewer extension in VS Code
2. Click "Open DB" and select `customer_behavior.db`
3. Explore the different tables and views to analyze:
   - How customers respond to price changes (compare `price` vs `price_at_purchase`)
   - Customer taste preferences (view `taste_preferences`)
   - Overall customer behavior patterns (view `customer_behavior_summary`)

## Example Analyses

### Check Price Sensitivity
```sql
SELECT * FROM price_sensitivity ORDER BY purchase_count DESC;
```

### Find Customers by Taste Preference
```sql
SELECT * FROM taste_preferences WHERE taste_profile = 'sweet';
```

### Analyze Purchasing Trends
```sql
SELECT 
    product_name, 
    current_price, 
    avg_purchase_price,
    CASE 
        WHEN avg_purchase_price < current_price THEN 'Price Increased'
        WHEN avg_purchase_price > current_price THEN 'Price Decreased'
        ELSE 'Price Stable'
    END as price_trend
FROM price_sensitivity;
```

This sample database allows you to check customer behavior as factors such as prices and tastes are altered over time.
