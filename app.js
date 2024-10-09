require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('./public/'));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});


app.get('/', async (req, res) => {
    try {
        await client.connect();
        const result = await client.db("kalani-db").collection("dev-king(kalani)").find({}).toArray();
        res.render('index', {
            postData: result
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error loading the page');
    }
});


app.post('/saveConverted', async (req, res) => {
    const { convertedText } = req.body;
    console.log('Saving converted post:', convertedText);

    try {
        await client.connect();
        await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ post: convertedText });
        res.redirect('/');
    } catch (error) {
        console.error('Error saving post:', error);
        res.status(500).send('Failed to save post');
    }
});

// Update post 
app.post('/update/:id', async (req, res) => {
    const postId = req.params.id;
    const { newPost } = req.body;
    

    try {
        await client.connect();
        await client.db("kalani-db").collection("dev-king(kalani)").findOneAndUpdate(
            { "_id": new ObjectId(postId) },
            { $set: { "post": newPost } }
        );
        res.redirect('/');
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send('Error updating post');
    }
});

// Delete post
app.post('/delete/:id', async (req, res) => {
    const postId = req.params.id;

    try {
        await client.connect();
        await client.db("kalani-db").collection("dev-king(kalani)").findOneAndDelete({ "_id": new ObjectId(postId) });
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send('Error deleting post');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running & listening on port ${PORT}`);
});

// let result = await client.db("kalani-db").collection("dev-king(kalani)").find({}).toArray();
// console.log(result);
// await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ post: 'hardcoded post insert '});
//   await client.db("kalani-db").collection("dev-king(kalani)").insertOne({ iJustMadeThisUp: 'hardcoded new key '});