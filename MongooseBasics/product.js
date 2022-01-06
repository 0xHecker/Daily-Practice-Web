const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => console.log('Connected successfully!!'))
    .catch((err) => {
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 8988 });

bike.save()
    .then(data => {
        console.log("It worked!!!")
        console.log(data)
    })
    .catch((err) => {
        console.log("oh no error!!!")
        console.log(err)
    })