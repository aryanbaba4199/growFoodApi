const Orders = require('../../models/orders/orders');

exports.analyticsData = async (req, res, next) => {
  try {
    const orders = await Orders.countDocuments();
    console.log(orders);
    res.json({orders });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
  }
};
