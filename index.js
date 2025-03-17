///how to connect mongodb in node js
require("mongodb");
const url ="mongodb+srv://goutamkathuria:0LaNyqTDIK77fz5Y@cluster0.5zfvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const {MongoClient} = require("mongodb");
// const { Collection } = require("mongoose");
const client = new MongoClient(url);
const dbName='user'
async function main() {
    try {
        await client.connect();
        console.log("Connected");
        const db=client.db(dbName);
        const userCollection =db.collection('users');
        // crude operation -> create(insert),read(dekhna ki ek collection ke andar kitna data hai),update(existing user ki details me changement krna), delete(user ko delete krna)
        //insert method in mongodb
        //we store data in mongodb in form of objects
        //single insert ek baar me ek object insert hoga ->insertOne
        //many insert me ek baar me ek se jyada object insert kr skte hai ->insertMany
        // const singleUser = await userCollection.insertOne({_id:1,name:"DeraBaba.Com" ,age:25});
        // const manyUser = await userCollection.insertMany([
        //     {_id:2,name:'DeraBaba',age:24},
        //     {_id:3,name:'DeraBaby.Com',age:25},
        //     {_id:4,name:'DeraBabu',age:26},
        //     {_id:5,name:'DeraBabu.Com',age:27},
        //     {_id:6,name:'DeraBaby',age:28},
        // ])

        // console.log("Many user is inserted",manyUser);

        //Read
        //for reading any particular collection we have to use find method
        //in find method we can also provide a simple parameter _id: 1
        //in case when we have to read all users at that time we will use empty object.
        //const allusers = collectionname.find({})
        //console.log(allusers)
        // const allUser =await userCollection.find({}).toArray();
        //for all just leave empty bracket empty it will find all
        // const singleUser =await userCollection.find({name:"DeraBaba"}).toArray();
        // for single give specific detail like id name or age it will find single
        // console.log("data found succesfully");
        // console.log(singleUser)
        //update method in mongodb
        //updateOne method -> pehli chij kaun se user ko krna hai and kya krna hai update
        //update kis method se krte hai ye batana jaruri hai
        //set method is used to update any specific value
        //delete method in javascript
        //it only needs one parameter on basis of that it will delete yoyr data
// const updateResult = await userCollection.updateOne({name:"DeraBaba"},{$set:{age:35}})
const deleteUser = await userCollection.deleteOne({name:"DeraBaba"});
console.log("badhai ho delete hua hai",deleteUser)
    } catch (error) {
        console.log("error",error)
    }finally{
        await client.close
    }
}

main().catch(console.error);