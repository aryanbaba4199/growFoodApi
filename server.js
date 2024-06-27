const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');  // Uncomment this line
const errorHandler = require('./middleware/errorHanlder');
const cors = require('cors');
const auth = require('./routes/usersRoute') 
const order = require('./routes/orderRoutes');
const connectDb = require('./config/db')

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database
connectDb();

// Routes
app.use('/api/products', productRoutes);  
app.use('/api/users', auth)
app.use('/api/orders', order)

// Handling errors
app.use(errorHandler);

// Starting server
app.listen(port, () => {
    console.log('Server listening on port', port);
});
