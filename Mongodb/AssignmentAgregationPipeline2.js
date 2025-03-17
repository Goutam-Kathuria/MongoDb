require('mongodb')

const url="mongodb+srv://goutamkathuria:wUWUfihUkSzN61G9@cluster0.jfua9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const {MongoClient} = require('mongodb');
const client = new MongoClient(url);
const dbName = 'AgPipeline';

async function Assignment() {

    try {
        await client.connect();
        console.log("Connected");
        const db=client.db(dbName);
        const userCollection =db.collection('user');
        const ReviewCollection =db.collection('Review');
        const PaymentCollection =db.collection('Payment');
        const OrderCollection =db.collection('Order');
        const ProdcutCollection =db.collection('Prodcut');
       
        // const userinsertresult = await userCollection.insertMany([
        //     { _id: 1, name: "Amit", age: 25, city: "Delhi", email: "amit@gmail.com",
        //     created_at: "2024-01-10T10:00:00Z" },
        //     { _id: 2, name: "Suman", age: 30, city: "Mumbai", email: "suman@yahoo.com",
        //     created_at: "2023-12-15T12:30:00Z" },
        //     { _id: 3, name: "Ravi", age: 22, city: "Bangalore", email: "ravi@gmail.com",
        //     created_at: "2024-02-20T08:45:00Z" },
        //     { _id: 4, name: "Priya", age: 27, city: "Kolkata", email: "priya@hotmail.com",
        //     created_at: "2024-03-01T15:20:00Z" },
        //     { _id: 5, name: "Vikram", age: 35, city: "Pune", email: "vikram@gmail.com",
        //     created_at: "2023-11-05T18:10:00Z" },
        //     { _id: 6, name: "Neha", age: 29, city: "Chennai", email: "neha@gmail.com",
        //     created_at: "2024-02-28T09:15:00Z" },
        //     { _id: 7, name: "Rahul", age: 32, city: "Hyderabad", email: "rahul@gmail.com",
        //     created_at: "2024-01-25T14:05:00Z" }
        //     ]
        //     )
        //     console.log(" User Data Inserted Successfully.",userinsertresult)

        //     const Productinsertresult = await ProductCollection.insertMany([
        //         { _id: 101, name: "Laptop", category: "Electronics", price: 50000, stock: 10,
        //         rating: 4.5 },
        //         { _id: 102, name: "Mobile", category: "Electronics", price: 20000, stock: 15,
        //         rating: 4.2 },
        //         { _id: 103, name: "Shoes", category: "Fashion", price: 3000, stock: 50, rating:
        //         4.0 },
        //         { _id: 104, name: "Watch", category: "Fashion", price: 7000, stock: 30, rating:
        //         4.3 },
        //         { _id: 105, name: "TV", category: "Electronics", price: 40000, stock: 5, rating: 4.6
        //         },
        //         { _id: 106, name: "Headphones", category: "Electronics", price: 2500, stock: 25,
        //         rating: 4.1 },{ _id: 107, name: "Jeans", category: "Fashion", price: 1500, stock: 60, rating: 4.0
        //         },
        //         { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, stock: 70, rating:
        //         3.9 },
        //         { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, stock: 8,
        //         rating: 4.7 },
        //         { _id: 110, name: "Microwave", category: "Appliances", price: 10000, stock: 12,
        //         rating: 4.4 }
        //         ]
        //         )
        //         console.log(" Product Data Inserted Successfully.",Productinsertresult)
        //         const Reviewinsertresult = await ReviewCollection.insertMany([
        //         { _id: 401, user_id: 1, product_id: 101, rating: 5, comment: "Excellent laptop!" },
        //         { _id: 402, user_id: 2, product_id: 102, rating: 4, comment: "Good phone, but battery could be better." },
        //         { _id: 403, user_id: 3, product_id: 103, rating: 3, comment: "Average quality shoes." },
        //         { _id: 404, user_id: 4, product_id: 104, rating: 4, comment: "Nice watch, looks premium." },
        //         { _id: 405, user_id: 5, product_id: 105, rating: 5, comment: "Amazing TV, great display!" }
        //         ]
        //         )
        //         console.log("Review Data Inserted Successfully.",Reviewinsertresult)
        //         const Paymentinsertresult = await PaymentCollection.insertMany([{ _id: 301, order_id: 201, amount: 50000, payment_method: "Credit Card",
        //         payment_date: "2024-03-02T12:30:00Z", status: "Success" },
        //         { _id: 302, order_id: 202, amount: 40000, payment_method: "UPI",
        //         payment_date: "2024-03-05T16:00:00Z", status: "Pending" },
        //         { _id: 303, order_id: 203, amount: 9000, payment_method: "Debit Card",
        //         payment_date: "2024-03-10T09:45:00Z", status: "Failed" }])
                
        //         console.log(" Payment Data Inserted Successfully.",Paymentinsertresult)
        //         const Orderinsertresult = await OrderCollection.insertMany(
        //             [
        //                 { _id: 201, user_id: 1, product_id: 101, quantity: 1, order_date:
        //                 "2024-03-02T12:00:00Z", status: "Delivered" },
        //                 { _id: 202, user_id: 2, product_id: 102, quantity: 2, order_date:
        //                 "2024-03-05T15:45:00Z", status: "Shipped" },
        //                 { _id: 203, user_id: 3, product_id: 103, quantity: 3, order_date:
        //                 "2024-03-10T09:30:00Z", status: "Pending" },
        //                 { _id: 204, user_id: 4, product_id: 104, quantity: 1, order_date:
        //                 "2024-03-12T11:15:00Z", status: "Delivered" },
        //                 { _id: 205, user_id: 5, product_id: 105, quantity: 1, order_date:
        //                 "2024-03-14T08:50:00Z", status: "Cancelled" }
        //                 ]
        //         )
        //         console.log(" Order Data Inserted Successfully.",Orderinsertresult)



        ///// Questions:::::
        
        
        // Basic Aggregations
        
        
        
        // 1. Find all users who are older than 30.
        // 2. Find products that cost more than ₹10,000.
        // 3. Count total products in the database.
        // 4. Find users who registered after January 2024.
        // 5. Get total stock of all fashion products.
        // 6. Find all users who live in Mumbai or Delhi.
        // 7. Find products with a rating higher than 4.5.
        // 8. Sort products by price in descending order.
        // 9. Display only product names and prices.
        // 10. Get the average price of all products.
        
        
        //Intermediate Aggregations
        
        
        // 11. Find the most expensive product in each category.
        // 12. Count how many users have placed an order.
        // 13. Get total sales amount for all orders.
        // 14. Find orders that are still pending.
        // 15. Find total earnings from delivered orders.
        // 16. Find top 3 most expensive products.
        // 17. Find users who haven't placed an order.
        // 18. Count how many orders were paid using UPI.
        // 19. Find total revenue per category.
        // 20. Get all payments with a successful status.
        
        
        
        // Advanced Joins & Filters
        
        
        // 21. Join users with their orders.
        // 22. Show all orders with user details.
        // 23. Show products with their reviews.
        // 24. Find the highest-rated product.
        // 25. Find the most frequently ordered product.
        // 26. Get total payment amount per user.
        // 27. Find users who paid via credit card.
        // 28. Find users who gave a review rating less than 3.
        // 29. Get the most ordered product category.
        // 30. Find the number of products each user bought.
        
        
        // Complex Aggregations & Multi-stage Pipelines
        
        
        // 31. Find the total number of products sold in each category.
        // 32. Find the average rating of all products.
        // 33. Get the list of all users along with their total order amount.
        // 34. Show products with their corresponding buyer details.
        // 35. Find users who have spent more than ₹50,000.
        // 36. Get the most popular product based on the number of orders.
        // 37. Find all users who placed an order in the last 30 days.
        // 38. Find the highest-grossing product.
        // 39. Count how many orders were cancelled.
        // 40. Find the top 3 highest-paying customers.
        
        
        // Date-based & Conditional Aggregations
        
        
        // 41. Find all orders placed in March 2024.
        // 42. Get the count of products added in the last 6 months.
        // 43. Find the users who registered in the last year.
        // 44. Count how many payments were made in January 2024.
        // 45. Get the total revenue generated in the last quarter.
        // 46. Find all orders where the product price was above ₹25,000.
        // 47. Show users who haven’t reviewed any product.
        // 48. Find the number of products ordered per month in 2024.
        // 49. Find the user who has placed the highest number of orders.
        // 50. Get the product with the highest review count.

        /////// Answers::::::::



        // 1 :: 
        // const userolderthen30 = await userCollection.aggregate([{$match: { age: { $gt: 30 } }}]).toArray();
        // console.log("Succesful",userolderthen30)




        // 2 :: 
        // const productmorethen10k =await ProductCollection.aggregate([{$match:{price:{$gt:10000}}}]).toArray();
        // console.log(productmorethen10k);




        // 3 ::
        // const totalproducts = await ProductCollection.aggregate([{$group:{_id:"$category",total:{$sum:1}}}]).toArray();
        // console.log(totalproducts);




        // 4:: 
        const usersAfterJanuary2024 = await userCollection.aggregate([{$match:{created_at:{$gt:new Date("2024-01-31T23:59:59Z")}}}]).toArray();
        console.log(usersAfterJanuary2024);
        const allUsers = await userCollection.find({}).toArray();
        console.log("All users:", allUsers);





        // 5:: 
        // const totalFashionStock = await ProductCollection.aggregate([{$match: { category: "Fashion" }},{$group: { _id: "$category", totalStock: { $sum: "$stock" }}}]).toArray();
        // console.log("Total stock for Fashion category:", totalFashionStock);





        // 6::
        // const duplicatecity = await userCollection.aggregate([{$match:{city:"Delhi"}}]).toArray();
        // const duplicatecity2 = await userCollection.aggregate([{$match:{city:"Mumbai"}}]).toArray();
        // console.log("Success",duplicatecity,duplicatecity2);




        // 7::
        // const Highrating = await ProductCollection.aggregate([{$match:{rating:{$gt:4.5}}}]).toArray()
        // console.log(Highrating);
    



    
        // 8::
        // const productindecsorder = await ProductCollection.aggregate([{$sort:{price:-1}}]).toArray()
        // console.log(productindecsorder)





        // 9:: 
        // const shownameandprice = await ProductCollection.aggregate([{$project:{name:1,price:1,_id:0}}]).toArray()
        // console.log(shownameandprice)
    




        // 10::
        // const avgprice =await ProductCollection.aggregate([{$group: {_id: null,averagePrice: { $avg: "$price" } }}]).toArray()
        // console.log(avgprice)





        // 11::
        // const result= await productCollection.aggregate([
        //     {$group:{_id:null,"averageprice":{$avg:"$price"}}}
        // ]).toArray()
        // console.log(result);



        // 12::
        // const result= await productCollection.aggregate([
        //     {$group:{_id:"$category","expensiveproduct":{$max:"$price"}}}
        // ]).toArray()
        // console.log(result);



        // 13::
        // const result= await orderCollection.aggregate([
        //     {$group:{_id:"$category","placed an order":{$sum:"$quantity"}}}
        // ]).toArray()
        // console.log(result);
  



        // 14::
        // const result= await paymentCollection.aggregate([
        //     {$group:{_id:"$category","total sales amount":{$sum:"$amount"}}}
        // ]).toArray()
        // console.log(result);



        // 15::
        //     const totalEarnings = await ProductCollection.aggregate([{
        //         $match:{status:{$eq:'Delivery'}},
        //     },
        //     {$lookup:{from:'products',
        //         localField:"product_id",
        //         foreignField:"_id",
        //         as:"orderDetails"
        //     }
        //     },
        //     {
        //         $unwind:"$orderDetails"
        //     },
        //     {
        //         $group:{
        //             _id:null,
        //             totalEarnings:{$sum:{$multiply:["$quantity","$orderdetails.price"]}}
        //         }
        //     }
        // ]).toArray();
        // console.log(totalEarnings);




        // 16::
        // const result= await productCollection.aggregate([
        //     {$group:{_id:"$category","top three most expensive product":{$sum:"$price"}}}
        // ]).toArray();
        // console.log(result);




        // 17::
        // const result = await userCollection.aggregate([{
        //         $lookup:{
        //             from:'orders',
        //             localField:"_id",
        //             foreignField:"user_id",
        //             as:"orderDetails"
        //         }
        //     },
        //     {
        //     $match:{
        //         orderdetails:{
        //             $eq:[]
        //         }
        //     }
        //     },
        //     {
        //         $project:{
        //             _id:0,
        //             name:1
        //         }
        //     }
        // ]).toArray
        // console.log(result);





        // 18::
        // const result = await PaymentCollection.aggregate([{
        //     $match:{
        //         payment_method:"UPI"
        //     }
        //     },
        //     {
        //         $count:"TOTAL_UPI_PAYMENTS"
        //     }]).toArray()
        //     console.log(result)



        // 19::
        // const result = await OrderCollection.aggregate([{
        // $lookup:{
        //     from:"products",
        //     localField:"product_id",
        //     foreignField:"user_id",
        //     as:"productdetails"
        // }
        // },
        // {
        //     $unwind:"$productdetails"
        // },
        // {
        //     $group:{_id:"$productdetails.category",totalRevenue:{$sum:{$multiply:["$quantity","productDetails.price"]}}}
        // }
        // ]).toArray()
        //     console.log(result)


        


        // 20::
        // const result = await PaymentCollection.aggregate([{$match:{
        //     status:"Success"
        // }}]).toArray()
        // console.log(result)




        // 21::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)




         // 22::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)




         // 23::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)




         // 24::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)





         // 25::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)






         // 26::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)






         // 27::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)







         // 28::
        // const result = await PaymentCollection.aggregate([{ }]).toArray()
        // console.log(result)



// 30. Find the number of products each user bought.
          // const productsBoughtPerUser  = await OrderCollection.aggregate([{ $group: { _id: "$user_id", totalProducts: { $sum: "$quantity" }}}]).toArray();
          // console.log(productsBoughtPerUser)

          // 31. Find the total number of products sold in each category.
          // const totalProductsSoldPerCategory = await OrderCollection.aggregate([{ $lookup: { from: "ProductCollection", localField: "product_id", foreignField: "_id", as: "productDetails" }}, { $unwind: "$productDetails" }, { $group: { _id: "$productDetails.category", totalSold: { $sum: "$quantity" }}}]).toArray();
          // console.log(totalProductsSoldPerCategory)

          // ok 32. Find the average rating of all products.
          // const averageProductRating = await ProductCollection.aggregate([{$group: {_id: null,averageRating: { $avg: "$rating" }}},{$project: {_id: 0,averageRating: { $round: ["$averageRating", 1] }}}]).toArray();
          // console.log(averageProductRating);
          

          // ok //33. Get the list of all users along with their total order amount.
          // const usersWithTotalOrderAmount = await OrderCollection.aggregate([{ $lookup: { from: "UserCollection", localField: "user_id", foreignField: "_id", as: "userDetails" }}, { $unwind: "$userDetails" }, { $group: { _id: "$userDetails._id", totalOrderAmount: { $sum: { $multiply: ["$quantity", "$price"] }}}}]).toArray();
          // console.log(usersWithTotalOrderAmount)


          // 34. Show products with their corresponding buyer details.
          // const productsWithBuyerDetails = await OrderCollection.aggregate([{ $lookup: { from: "ProductCollection", localField: "product_id", foreignField: "_id", as: "productDetails" }}, { $lookup: { from: "User Collection", localField: "user_id", foreignField: "_id", as: "buyerDetails" }}, { $unwind: "$productDetails" }, { $unwind: "$buyerDetails" }]).toArray();
          // console.log(productsWithBuyerDetails)

          // 35. Find users who have spent more than ₹50,000.
          //           const result = await OrderCollection.aggregate([{
          // $addFields: { product_id: { $toObjectId: "$product_id" } }},{$lookup: {from: "products",localField: "product_id",foreignField: "_id",as: "productdetails"}},{ $unwind: "$productdetails" },{$group: {_id: "$user_id",spentData: { $sum: { $multiply: ["$quantity", "$productdetails.price"] } }}},{ $match: { spentData: { $gte: 50000 } } }]).toArray();
          //         console.log(result);

         //ok // 36. Get the most popular product based on the number of orders.
          // const mostPopularProduct = await OrderCollection.aggregate([{ $group: { _id: "$product_id", orderCount: { $sum: 1 }}}, { $sort: { orderCount: -1 }}, { $limit: 1 }]).toArray();
          // console.log(mostPopularProduct)

          // 37. Find all users who placed an order in the last 30 days.
          // const usersWithRecentOrders = await OrderCollection.aggregate([{ $match: { order_date: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }}}, { $group: { _id: "$user_id" }}]).toArray();
          // console.log(usersWithRecentOrders)

          // 38. Find the highest-grossing product.
          // const highestGrossingProduct = await OrderCollection.aggregate([{ $lookup: { from: "ProductCollection", localField: "product_id", foreignField: "_id", as: "productDetails" }}, { $group: { _id: "$product_id", totalRevenue: { $sum: { $multiply: ["$quantity", "$productDetails.price"] }}}}, { $sort: { totalRevenue: -1 }}, { $limit: 1 }]).toArray();
          // console.log(highestGrossingProduct)

         //ok // 39. Count how many orders were cancelled.
          // const cancelledOrdersCount = await OrderCollection.aggregate([{ $match: { status: "Cancelled" }}, { $count: "totalCancelledOrders" }]).toArray();
          // console.log(cancelledOrdersCount)

         //ok // 40. Find the top 3 highest-paying customers.
          // const top3HighestPayingCustomers = await PaymentCollection.aggregate([{ $group: { _id: "$user_id", totalPaid: { $sum: "$amount" }}}, { $sort: { totalPaid: -1 }}, { $limit: 3 }]).toArray();
          // console.log(top3HighestPayingCustomers)

          // 41. Find all orders placed in March 2024.
          // const march2024Orders = await OrderCollection.aggregate([{ $match: { order_date: { $gte: new Date("2024-03-01"), $lt: new Date("2024-04-01") }}}]).toArray();
          // console.log(march2024Orders)

          // 42. Get the count of products added in the last 6 months.
          // const recentProductsCount = await ProductCollection.aggregate([{ $match: { created_at: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 6)) }}}, { $count: "totalRecentProducts" }]).toArray();
          // console.log(recentProductsCount)

          // 43. Find the users who registered in the last year.
          // const usersRegisteredLastYear = await userCollection.aggregate([{ $match: { created_at: { $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)) }}}]).toArray();
          // console.log(usersRegisteredLastYear)

          // 44. Count how many payments were made in January 2024.
          // const january2024PaymentsCount = await PaymentCollection.aggregate([{ $match: { payment_date: { $gte: new Date("2024-01-01"), $lt: new Date("2024-02-01") }}}, { $count: "totalPaymentsInJanuary" }]).toArray();
          // console.log(january2024PaymentsCount)

          // 45. Get the total revenue generated in the last quarter.
          // const lastQuarterRevenue = await PaymentCollection.aggregate([{ $match: { payment_date: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 3)) }}}, { $group: { _id: null, totalRevenue: { $sum: "$amount" }}}]).toArray();
          // console.log(lastQuarterRevenue)

          //ok 46. Find all orders where the product price was above ₹25,000.
          // const highValueOrders = await OrderCollection.aggregate([{ $lookup: { from: "ProductCollection", localField: "product_id", foreignField: "_id", as: "productDetails" }}, { $match: { "productDetails.price": { $gt: 25000 }}},{$unwind:"$productDetails"}]).toArray();
          // console.log(highValueOrders)

          //ok 47. Show users who haven’t reviewed any product.
          // const usersWithoutReviews = await userCollection.aggregate([{ $lookup: { from: "ReviewCollection", localField: "_id", foreignField: "user_id", as: "reviews" }}, { $match: { reviews: { $eq: [] }}}]).toArray();
          // console.log(usersWithoutReviews)

          // 48. Find the number of products ordered per month in 2024.
          // const productsOrderedPerMonth2024 = await OrderCollection.aggregate([{ $match: { order_date: { $gte: new Date("2024-01-01"), $lt: new Date("2025-01-01") }}}, { $group: { _id: { $month: "$order_date" }, totalOrdered: { $sum: "$quantity" }}}]).toArray();
          // console.log(productsOrderedPerMonth2024)

          //okk 49. Find the user who has placed the highest number of orders.
          // const highestOrderUser  = await OrderCollection.aggregate([{ $group: { _id: "$user_id", orderCount: { $sum: 1 }}}, { $sort: { orderCount: -1 }}, { $limit: 1 }]).toArray();
          // console.log(highestOrderUser)

          //okk 50. Get the product with the highest review count.
          // const highestReviewedProduct = await ReviewCollection.aggregate([{ $group: { _id: "$product_id", reviewCount: { $sum: 1 }}}, { $sort: { reviewCount: -1 }}, { $limit: 1 }]).toArray();
          // console.log(highestReviewedProduct)



    }
    catch(error){
    console.error("Error:", error);
    }
    finally {
    await client.close();
    }
}
main();