

const Order = require('../../models/orders/orders')
const dateFns = require('date-fns')


exports.createOrder = async(req, res, next) => {
    try{
        
        const date = Date.now();
        const istDate = dateFns.format(date, 'yyyy-MM-dd HH:mm:ss', {timeZone: 'Asia/Kolkata'});
        const {productId, userId, quantity, paymentId, paymentMode, orderAmount} = req.body.order;
        const order = new Order({productId, userId, quantity, paymentId, paymentMode, orderAmount, date : istDate});
        await order.save();
        console.log('Order saved successfully')
        res.status(200).json({message : 'Order Creadied successfully'});
    }catch(err){
        console.log(err);
        next(err);
    }
};