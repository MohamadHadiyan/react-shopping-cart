
// import library
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const shortid = require("shortid")

//web server with express
const app = express();
app.use(bodyParser.json());

// initialize mongo database
// first point
mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// define product model
const Product = mongoose.model("products", new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    image: String,
    description: String,
    price: Number,
    availableSizes: [String]
}))

// first end point
// get a list of products API
app.get("/api/products", async (req, res) => {
    // get the list of products from database
    const products = await Product.find({}) // return all products
    res.send(products) // send back to client
})

// use HTTP POST method to create a new product
app.post("/api/products", async (req, res) => {
    // create new product
    const newProduct = new Product(req.body) // send a request from frontend to this end point
    // save into the database
    const savedProduct = await newProduct.save()
    res.send(savedProduct)
})

// last API is delete product with id product
app.delete("/api/products/:id", async (req, res) => {
    // delete product with id
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    // return result to user
    res.send(deletedProduct)
})



// last step to create express server
// listen to a port and launch the server
// special variable set the port namber but if it doesnt exist use the default port namber 5000
const port = process.env.PORT || 5000
app.listen(port, () => console.log("server at http://localhost:5000"))


