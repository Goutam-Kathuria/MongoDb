require('mongodb')
// const add = 1+2;
// console.log(add);
const url="mongodb+srv://goutamkathuria:wUWUfihUkSzN61G9@cluster0.jfua9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const {MongoClient} = require('mongodb');
const client = new MongoClient(url);
const dbName = 'user1';

const Project = async ()=>{
    try {
        await client.connect();
        console.log("Connected")
        const db = client.db(dbName)
        const userCollection = db.collection('users');
        const productCollection = db.collection('product');
// const singleUser = await userCollection.insertOne({_id:5,age:23,name:"SatteKaChotnaChora",course:"BabeAla",address:'DaabBasti'});

// const manyUser = await userCollection.insertMany(   /5
//     [
//         {_id:1,age:19,name:"RamMehar",course:"BabeAla"},
//         {_id:2,age:21,name:"KaduALa",course:"BabeAla"},
//         {_id:3,age:22,name:"RleAla",course:"BabeAla"},
//         {_id:4,age:23,name:"SatteKaChora",course:"BabeAla"},
//     ])
// const updateM = await userCollection.updateMany(
//     // {_id:3,},{$set:{address:"killaMohalla"}}]
//      {_id: { $in: [5] } },{$set:{email:"abcde@example.com"}},
//      { upsert: true } 
// );
// const unique = await userCollection.createIndex({email:1},{unique:true});   /4
// console.log("Data Inserted",unique);
// const search = await userCollection.find({},{projection: {age:1,name:1,_id:0}}).toArray()   /6
// console.log("Data Inserted",search);
// const searchG = await userCollection.find({age:{$gt: 21}},{age:1}).toArray() /7
// console.log("data",searchG)

// const searchC = await userCollection.find({course:"BabeAla2.0"}).toArray() /8
// console.log("search",searchC)
// const exist = await userCollection.find({address:{$exists:true}}).toArray()  /9

// const decendIng = await userCollection.find().sort({age: -1}).toArray()

// const update = await userCollection.updateOne({name:"SatteKaChotnaChora"},{$set:{age:18}})

// const updateM = await userCollection.updateMany({},{$set:{course:"BabeAla2.0"}})'
// const feeInc = await userCollection.updateMany({age:{$lte:20}},{$set:{fees:50000+50000*10/100}})

// console.log("search",feeInc)
// const lower = await userCollection.updateOne({_id:1},[{$set:{email:{$toLower:'$email'}}}]);


// const add = await productCollection.insertMany([
//         { _id: 101, name: "Laptop", category: "Electronics", price: 50000, user_id: 1 },
//         { _id: 102, name: "Mobile", category: "Electronics", price: 20000, user_id: 2 },
//         { _id: 103, name: "Shoes", category: "Fashion", price: 3000, user_id: 3 },
//         { _id: 104, name: "Watch", category: "Fashion", price: 7000, user_id: 4 },
//         { _id: 105, name: "TV", category: "Electronics", price: 40000, user_id: 5 },
//         { _id: 106, name: "Headphones", category: "Electronics", price: 2500, user_id: 6 },
//         { _id: 107, name: "Jeans", category: "Fashion", price: 1500, user_id: 7 },
//         { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, user_id: 8 },
//         { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, user_id: 9 },
//         { _id: 110, name: "Microwave", category: "Appliances", price: 10000, user_id: 10 }
//   ])

// const result = await userCollection.aggregate([
// {$match:{age:{$gt:30}}}
// ]).toArray();

// const same = await userCollection.aggregate([
//     {$match:{city:"Delhi"}}
// ]).toArray();

// const same = await productCollection.aggregate([
//     {$match:{category:"Fashion"}}
// ]).toArray();

// const result = await productCollection.aggregate([
//     {$group:{_id:"$category"}}
// ]).toArray()

// const result = await productCollection.aggregate([
//     {$group:{_id:"$category",category:"Appliances",totalProduct:{$sum:1}}}
// ]).toArray()

// const sort = await productCollection.aggregate([
//     {$sort:{price:1}}
// ]).toArray()

// const project = await productCollection.aggregate([
//     {$project:{name:1,category:1,_id:0}}
// ]).toArray()

//most important lookup method

const result = await userCollection.aggregate([
{
    $lookup:{
from:"product",  //target
localField:"_id",  //parent collection name
foreignField:"user_id", 
as:"productdetails"  //want to store output
}        
},
{$unwind:"$productdetails"}
]).toArray()


console.log("search",result)
} catch (error) {
        console.log('Catch Out Hai',error)
    }
    finally {
        await client.close();
    }
}
    
Project().catch(console.error);
