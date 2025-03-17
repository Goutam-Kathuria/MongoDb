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

// const insert = await userCollection.insertMany([
//     { _id: 1, name: "Amit", age: 25, city: "Delhi", email: "amit@gmail.com",
//         created_at: "2024-01-10T10:00:00Z" },
//         { _id: 2, name: "Suman", age: 30, city: "Mumbai", email: "suman@yahoo.com",
//         created_at: "2023-12-15T12:30:00Z" },
//         { _id: 3, name: "Ravi", age: 22, city: "Bangalore", email: "ravi@gmail.com",
//         created_at: "2024-02-20T08:45:00Z" },
//         { _id: 4, name: "Priya", age: 27, city: "Kolkata", email: "priya@hotmail.com",
//         created_at: "2024-03-01T15:20:00Z" },
//         { _id: 5, name: "Vikram", age: 35, city: "Pune", email: "vikram@gmail.com",
//         created_at: "2023-11-05T18:10:00Z" },
//         { _id: 6, name: "Neha", age: 29, city: "Chennai", email: "neha@gmail.com",
//         created_at: "2024-02-28T09:15:00Z" },
//         { _id: 7, name: "Rahul", age: 32, city: "Hyderabad", email: "rahul@gmail.com",
//         created_at: "2024-01-25T14:05:00Z" }
        
// ])
// const insertR = await ReviewCollection.insertMany(
//     [
//         { _id: 401, user_id: 1, product_id: 101, rating: 5, comment: "Excellent laptop!" },
//         { _id: 402, user_id: 2, product_id: 102, rating: 4, comment: "Good phone, but battery could be better." },
//         { _id: 403, user_id: 3, product_id: 103, rating: 3, comment: "Average quality shoes." },
//         { _id: 404, user_id: 4, product_id: 104, rating: 4, comment: "Nice watch, looks premium." },
//         { _id: 405, user_id: 5, product_id: 105, rating: 5, comment: "Amazing TV, great display!" }
//     ]
// )
// const insertPy = await PaymentCollection.insertMany(
//     [
//         { _id: 301, order_id: 201, amount: 50000, payment_method: "Credit Card",
//         payment_date: "2024-03-02T12:30:00Z", status: "Success" },
//         { _id: 302, order_id: 202, amount: 40000, payment_method: "UPI",
//         payment_date: "2024-03-05T16:00:00Z", status: "Pending" },
//         { _id: 303, order_id: 203, amount: 9000, payment_method: "Debit Card",
//         payment_date: "2024-03-10T09:45:00Z", status: "Failed" }
//         ]
        
// )
// const insertO = await OrderCollection.insertMany(
//     [
//         { _id: 201, user_id: 1, product_id: 101, quantity: 1, order_date:
//         "2024-03-02T12:00:00Z", status: "Delivered" },
//         { _id: 202, user_id: 2, product_id: 102, quantity: 2, order_date:
//         "2024-03-05T15:45:00Z", status: "Shipped" },
//         { _id: 203, user_id: 3, product_id: 103, quantity: 3, order_date:
//         "2024-03-10T09:30:00Z", status: "Pending" },
//         { _id: 204, user_id: 4, product_id: 104, quantity: 1, order_date:
//         "2024-03-12T11:15:00Z", status: "Delivered" },
//         { _id: 205, user_id: 5, product_id: 105, quantity: 1, order_date:
//         "2024-03-14T08:50:00Z", status: "Cancelled" }
//         ]
        
// )
// const insertP = await ProdcutCollection.insertMany(
//     [
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
//         rating: 4.1 },
//         { _id: 107, name: "Jeans", category: "Fashion", price: 1500, stock: 60, rating: 4.0
//         },
//         { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, stock: 70, rating:
//         3.9 },
//         { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, stock: 8,
//         rating: 4.7 },
//         { _id: 110, name: "Microwave", category: "Appliances", price: 10000, stock: 12,
//         rating: 4.4 }
//         ]
        
// )
// console.log("Inserted",insert)
// console.log("Inserted",insertR)
// console.log("Inserted",insertPy)
// console.log("Inserted",insertO)

//1

// const older = await userCollection.aggregate([
//   {$match:{age:{$gt:30}}}
// ]).toArray()

//2

// const moreThan = await ProdcutCollection.aggregate([
//   {$match:{price:{$gt:10000}}}  
// ]).toArray()

//3

// const count = await ProdcutCollection.aggregate([
//     {$group:{totalProduct:{$sum:1},_id:1}}
//   ]).toArray()

//4

// const afterThat = await userCollection.aggregate([
    
    // {$addFields: {created_at: { $toDate: "$created_at" }}},

//     {$match:{created_at:{$gt:"2024-01-01T15:20:00Z"}}}
//   ]).toArray()
//   console.log(afterThat)
//5

// const totalFashion = await ProdcutCollection.aggregate([
//     {$match:{category:"Fashion"}},
//     {$group:{_id:"$category",totalProduct:{$sum:'$stock'}}}
// ]).toArray()

//6 
//    const find = await userCollection.aggregate([
//     {$match:{city:{$in:["Delhi","Mumbai"]}}},
//     // {$match:{city:""}}
//    ]).toArray()

//7

// const rating = await ProdcutCollection.aggregate([
//     {$match:{rating:{$gte:4.5}}}
// ]).toArray()

//8

// const priceDescending = await ProdcutCollection.aggregate([
//     {$sort:{price:1}}
// ]).toArray()

//9

// const namePrice = await ProdcutCollection.aggregate([
//     {$project:{_id:0,price:1,name:1}}
// ]).toArray()

//10

// const average = await ProdcutCollection.aggregate([
//     {$group:{_id:null, price:{$avg:"$price"}}}
// ]).toArray()

//11

// const expensive = await ProdcutCollection.aggregate([
//     {$group:{_id:"$category",expensive:{$max:"$price"}}},
// ]).toArray()

//12

// const orderPlaced = await OrderCollection.aggregate([
// {$group:{_id:"$user_id"}},{$count:"totalUsersWithOrder"}

// ]).toArray()

//13
// const salesAmount = await PaymentCollection.aggregate([
// {$group:{_id:0,total:{$sum:"$amount"}}}
// ]).toArray()

//14

// const pending = await OrderCollection.aggregate([
//     {$match:{status:"Pending"}}
//     ]).toArray()

//15

// const earning = await PaymentCollection.aggregate([
// {$match:{status:"Success"}},
//     {$group:{_id:"$status",earning:{$sum:"$amount"}}}
// ]).toArray()

//16

// const expensive = await ProdcutCollection.aggregate([
//     {$sort:{price:-1}},
//     {$limit:(3)}
// ]).toArray()

//17
        // const broke = await userCollection.aggregate([
        //     {
        //         $lookup:{
        //             from:'Order',
        //             localField:"_id",
        //             foreignField:"user_id",
        //             as:"orderDetails"
        //         }
        //     },
        //     {$match:{orderDetails: { $eq:[] } }},
        //     {
        //         $project:{
        //             _id:0,
        //             name:1
        //         }
        //     }
        // ]).toArray()


//18
// const upi = await PaymentCollection.aggregate([
//     {$match:{payment_method:'UPI'}}
// ]).toArray()

//19

// const totalRevenue = await ProdcutCollection.aggregate([
//     {
//         $lookup:{
//             from:'Order',
//             localField:'_id',
//             foreignField:'product_id',
//             as:'orderDetails'
//         }
//     },{ $unwind: "$orderDetails" },
// {$group:{_id:'$category',totalRevenue:{$sum:{$multiply:["$price","$orderDetails.quantity"]}}}}
// ]).toArray()

//20

// const earning = await PaymentCollection.aggregate([
// {$match:{status:"Success"}},
// ]).toArray()

//21

// const joinOrder = await userCollection.aggregate([
//     {
//     $lookup:{
// from:'Order',
// localField:'_id',
// foreignField:'user_id',
// as:'orderinfo'
//     }},
//     {$unwind:"$orderinfo"}
// ]).toArray()

// console.log(joinOrder);


//22

// const ordersUser = await OrderCollection.aggregate([
//     {
//     $lookup:{
// from:'user',
// localField:'user_id',
// foreignField:'_id',
// as:'userinfo'
//     }},
//     {$unwind:"$userinfo"}
// ]).toArray()

//23

// const productReview = await ProdcutCollection.aggregate([
//     {
//         $lookup:{
//             from:'Review',
//             localField:'_id',
//             foreignField:'product_id',
//             as:'Reviews'
//         }
//     },
// {$unwind:'$Reviews'}
// ]).toArray()

// 24 
// const productReview = await ProdcutCollection.aggregate([
//     {$sort:{rating:-1}},
//     {$limit:1}
// ]).toArray()


//25

// const recendOrder = await ProdcutCollection.aggregate([
//     {$group:{_id:"$product_id",orderCount:{$sum:1}}},
//     {$sort:{orderCount:-1}},{$limit:1}
// ])


//26

// const topayperUser = await PaymentCollection.aggregate([
//     {
//         $lookup:{
// from:"Order",
// localField:"order_id",
// foreignField:"_id",
// as:"abc"
//     }},
//     {$unwind:"$abc"},
// {$group:{_id:"abc",totalPayment:{$sum:"$amount"}}}
// ]).toArray()

//27

// const creditCart = await PaymentCollection.aggregate([
//     {$match:{payment_method:"Credit Card"}}
// ]).toArray()

//28

// const lessRating = await ReviewCollection.aggregate([
//     {$match:{rating:{$lt:4}}}
// ]).toArray()

//29

// const mostOrderd = await OrderCollection.aggregate([
//     {
//         $lookup:{
//            from:"Prodcut",
//            localField:"product_id",
//            foreignField:"_id",
//            as:"productDetails"
//         }},
//         {$unwind:"$productDetails"},
//         {$group:{_id:"$productDetails.category",total:{$sum:"$quantity"}}},
//         {$sort:{total:1}},
//         {$limit:1}
// ]).toArray()



//30

// const userBought = await OrderCollection.aggregate([

//   {$group:{_id:"$user_id",totalBought:{$sum:"$quantity"}}}
// ]).toArray()

//31
// const totalSold = await ProdcutCollection.aggregate([
//     {
//         $lookup:{
//             from:'Order',
//             localField:'_id',
//             foreignField:'product_id',
//             as:'totalsold'
//         }
//     },
//     {$unwind:'$totalsold'},
// {$group:{_id:'$category',totalSold:{$sum:'$totalsold.quantity'}}}
// ]).toArray()

//32

// const avgRating = await ProdcutCollection.aggregate([
//     {$group:{_id:null,avgRating:{$avg:"$rating"}}}
// ]).toArray()

// console.log(avgRating);

//33

// const userOrder = await userCollection.aggregate([
//     {
//         $lookup:{
//            from:"Order",
//            localField:"_id",
//            foreignField:"user_id",
//            as:"totalOrder"
//         }},
//         {$unwind:"$totalOrder"},

//         {$group:{_id:"$totalOrder",totalSum:{$sum:'$totalOrder.quantity'}}}
// ]).toArray()

//34

// const productBuyer = await OrderCollection.aggregate([
//     {
//         $lookup:{
// from:"Prodcut",
// localField:"product_id",
// foreignField:"_id",
// as:"product"
//     }},
//     {$unwind:"$product"},
//     {
//         $lookup:{
// from:"user",
// localField:"user_id",
// foreignField:"_id",
// as:"productBuyer",
//         }},
//         {$unwind:"$productBuyer"},

//     {$project:{
//         _id:0,
// 'product.name':1,
// 'product.price':1,
// 'quantiy':1,
// 'orderdate':1,
// 'status':1,
// "productBuyer.name":1,
// "productBuyer.city":1,
// "productBuyer.email":1
//     }}
// ]).toArray()

//35

// const highSpendingUsers = await PaymentCollection.aggregate([
//     {
//         $lookup: {
//             from: "Order", // Join with orders to get user_id
//             localField: "order_id", 
//             foreignField: "_id", 
//             as: "orderDetails"
//         }
//     },
//     { $unwind: "$orderDetails" }, // Flatten orderDetails array
//     {
//         $group: {
//             _id: "$orderDetails.user_id", // Group by user_id from orders
//             totalSpent: { $sum: "$amount" } // Sum total amount paid
//         }
//     },
//     {
//         $match: {
//             totalSpent: { $gt: 50000 } // Filter users who spent more than ₹50,000
//         }
//     },
//     {
//         $lookup: {
//             from: "user",
//             localField: "_id",
//             foreignField: "_id",
//             as: "userDetails"
//         }
//     },
//     { $unwind: "$userDetails" }, // Convert array to object
//     {
//         $project: {
//             _id: 0,
//             "userDetails.name": 1,
//             "userDetails.email": 1,
//             "userDetails.city": 1,
//             totalSpent: 1
//         }
//     }
// ]).toArray();


//36

// const popularOrder = await ProdcutCollection.aggregate([
//     {
//     $lookup:{
// from:'Order',
// localField:'_id',
// foreignField:'product_id',
// as:'popular'
//     }},
//     {$unwind:'$popular'},
//     {$group:{_id:'$name',totalOrder:{$sum:'$popular.quantity'}}},
//     {$sort:{totalOrder:-1}},
//     {$limit:1}
// ]).toArray()


//37
// const inMonth = await OrderCollection.aggregate([
// {$match:{order_date:{$gt:'2025-02-17T12:00:00Z'}}}
// ]).toArray()


//38
// const highGross = await ProdcutCollection.aggregate([
//     {
//     $lookup:{
// from:'Order',
// localField:'_id',
// foreignField:'product_id',
// as:'total'
//     }
//     },
//     {$unwind:'$total'},
//     {$group:{_id:'$name',totalGrossrRevenue:{$sum:{$multiply:['$price','$total.quantity']}}}},
//     {$sort:{totalGrossrRevenue:-1}},
//     {$limit:1}
// ]).toArray()

//39

// const orderCancel = await OrderCollection.aggregate([
//     {$match:{status:'Cancelled'}},
//     {$group:{_id:1,cancel:{$sum:1}}}
// ]).toArray()

//40

// const richUser = await userCollection.aggregate([
//     {
//     $lookup:{
//     from:'Order',
//     localField:'_id',
// foreignField:'user_id',
// as:'order'
//     }
//     },
//     {$unwind:'$order'},

//     {$lookup:{
//         from:'Payment',
//         localField:'user_id',
// foreignField:'Order_id',
// as:'payment'
//     }},
//     {$unwind:'$payment'},
// {$project:{
//     name:1,
//     'payment.amount':1,
//     'payment.status':1,
//     _id:0
// }},
// {$sort:{'payment.amount':-1}},
// {$limit:3}
// ]).toArray()

//41

// const inMyMonth = await OrderCollection.aggregate([
//     {$match:{order_date:{$gt:'2024-03-01T12:00:00Z'}}},
//     {$match:{order_date:{$lt:'2024-04-01T12:00:00Z'}}}
// ]).toArray()

//42  master ne chutwa rakheya

// const sixMonthago = new Date();
// sixMonthago.setMonth(sixMonthago.getMonth()-6)

// const added = await ProdcutCollection.aggregate([
//     {$match:{added_date:{$gte: sixMonthago}}},
//     {$count:"totalProducts"}
// ]).toArray()

//43

// const registration = await userCollection.aggregate([
//     {$match:{created_at:{$lte:"2024-01-01T12:00:00Z"}}}
// ]).toArray()

//44

// const newYearpayment = await PaymentCollection.aggregate([
//     {$match:{payment_date:{$gte:"2024-01-01T12:00:00Z"}}},
//     {$match:{payment_date:{$lt:"2024-02-01T12:00:00Z"}}}
// ]).toArray()

//45  Get the total revenue generated in the last quarter. (lastQuarter === oct to dec )

// const lastQuarterStart =("2024-01-01T00:00:00Z");
// const lastQuarterEnd = ("2024-03-31T23:59:59Z");

// const lastQuarter =  await PaymentCollection.aggregate([
// {$match:{payment_date:{$lte:lastQuarterEnd,$gte:lastQuarterStart}}}
// ]).toArray()

//46

// const priceHigher = await ProdcutCollection.aggregate([
//     {$match:{price:{$gt:25000}}}
// ]).toArray()

//47

// const didNotRecive = await userCollection.aggregate([
//     {
//         $lookup:{
//             from:'Order',
//             localField:'_id',
//             foreignField:'user_id',
//             as:'pending'
//         }
//     },
//     {$unwind:'$pending'},
//     {$match:{'pending.status':{$in:['Pending','Shipped']}}}
// ]).toArray()

// console.log(didNotRecive);

//48

    } catch (error) {
        
    }
    
}

Assignment().catch(console.error)