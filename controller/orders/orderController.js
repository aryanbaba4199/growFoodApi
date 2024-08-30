

const Order = require('../../models/orders/orders')
const dateFns = require('date-fns')
const Cart = require('../../models/orders/cart')


exports.createOrder = async(req, res, next) => {
    try{
        
        const date = Date.now();
        const istDate = dateFns.format(date, 'yyyy-MM-dd HH:mm:ss', {timeZone: 'Asia/Kolkata'});
        const {productId, userId, quantity, paymentId, paymentMode, orderAmount, addressId} = req.body.order;
        const order = new Order({productId, userId, quantity, paymentId, paymentMode, addressId, orderAmount, date : istDate});
        await order.save();
        console.log('Order saved successfully')
        res.status(200).json({message : 'Order Created successfully'});
    }catch(err){
        console.log(err);
        next(err);
    }
};

exports.updateOrder = async (req, res, next) => {
    const { id } = req.params;

    try {
      const {
        quantity, orderAmount, paymentMode, paymentId, status
      } = req.body.formData;
  
      // Update the order
      const updatedOrder = await Order.findByIdAndUpdate(
        id, // The ID of the order to update
        {
          
          quantity,
          paymentId,
          paymentMode,
          orderAmount,
          status,
          
        },
        { new: true } // Return the updated document
      );
  
      // If the order was not found
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      // Return the updated order
      res.status(200).json(updatedOrder);
  
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  

exports.createCart = async (req, res, next) => {
    const {userId, productId, qty} = req.body.data || req.body.formData;
    try{
        const cart = new Cart({userId, productId, qty});
        await cart.save();
        console.log('Cart saved successfully');
        res.status(200).json({message : 'Cart Created successfully'});
    }catch(err){
        console.log(err);
        next(err);
    };
}; 

exports.deleteCart = async (req, res, next) => {
    const {id} = req.params;
    console.log('Delete Cart called', id);
    try{
        const cart = await Cart.findOneAndDelete({_id : id});
        console.log(cart);
        if(cart){
            res.status(200).json({message : 'Cart deleted successfully'});
        }else{
            res.status(404).json({message : 'Cart not found'});
        }
    }catch(err){
        console.log(err);
        next(err);
    };
};

exports.deleteOrder = async(req, res, next) => {
    const {id} = req.params;
    try{
        const order = await Order.findOneAndDelete({_id : id});
        if(order){
            res.status(200).json({message : 'Order deleted successfully'});

        }else{
            res.status(404).json({message : 'Order not found'});
        }
    }catch(err){
        console.log(err);
        next(err);
    }
};

exports.getOrder = async ( req, res, next ) => {
    const {id} = req.params;
    console.log('id is ', id);
    try{
        const order = await Order.find({userId : id});
        if(order){
            res.status(200).json(order);
        }else{
            res.status(404).json({message : 'Orders not found'});
        }
    }catch(err){
        console.log(err);
        next(err);
    }
};

exports.getCart = async (req, res, next) => {

    const {id} = req.params;

    
    try{
        const cart = await Cart.find({userId : id});
        console.log('cart uis', cart);
        if(cart){
            res.status(200).json(cart);
        }else{
            res.status(404).json({message : 'Cart not found'});
        }
    }catch(err){
        console.log(err);
        next(err);
    }
};






exports.adminOrders = async (req, res, next) =>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        console.log(err);
        next(err);
    }
    
    
}