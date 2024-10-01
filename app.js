require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const { ObjectId } = require('mongodb')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('./public/'))

console.log(uri);

console.log('im on a node server change that and that tanad f, yo');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// function whateverNameOfIt (params) {}
// ()=>{}

app.get('/', function (req, res) {
  // res.send('Hello Node from Ex on local dev box')
  res.sendFile('index.html');
})

app.get('/ejs', (req,res)=>{
``
  res.render('index', {
    myServerVariable : "something from server"
  });

  //can you get content from client...to console? 
})

app.get('/read', async (req,res)=>{

  console.log('in /mongo');
  await client.connect();
  
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("kalani-db").collection("dev-king(kalani)")
    .find({}).toArray(); 
  console.log(result); 

  res.render('read', {
    postData : result
  });

})

app.post('/insert', async (req,res)=> {

  console.log('in /insert');

  console.log('request', req.body);
  console.log('request', req.body.newPost);

  //connect to db,
  await client.connect();
  //point to the collection 
  await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ post: req.body.newPost});
  // await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ iJustMadeThisUp: 'hardcoded new key '});  
  //insert into it
  res.redirect('read');

}); 

app.post('/update/:id', async (req,res)=>{

  console.log("req.parms.id: ", req.params.id)

  client.connect; 
  const collection = client.db("kalani-db").collection("dev-king(kalani)");
  let result = await collection.findOneAndUpdate( 
  {"_id": new ObjectId(req.params.id)}, { $set: {"post": "CUMBIE IS THE GOAT!!!!" } }
)
.then(result => {
  console.log(result); 
  res.redirect('/read');
})
 
  //insert into it

});

app.post('/delete/:id', async (req,res)=>{

  console.log("req.parms.id: ", req.params.id)

  client.connect; 
  const collection = client.db("kalani-db").collection("dev-king(kalani)");
  let result = await collection.findOneAndDelete( 
  {"_id": new ObjectId(req.params.id)})

.then(result => {
  console.log(result); 
  res.redirect('/read');
})

  //insert into it

})
app.listen(3000)


// let result = await client.db("kalani-db").collection("dev-king(kalani)").find({}).toArray();
// console.log(result);
// await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ post: 'hardcoded post insert '});
//   await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ iJustMadeThisUp: 'hardcoded new key '});