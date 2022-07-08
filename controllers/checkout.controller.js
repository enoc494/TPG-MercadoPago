//const mp = require('mp');
const mp = require('../modules/mercadoPago.js');
module.exports = {
    // Step 8
    process: async (req,res) => {
        try {
             //mapeo de moneda
            let items = req.session.cart.map(item => Object({...item, 
                                                                currency_id: "MXN",
                                                                unit_price: item.price,
                                                            }));

            //llamado con preferencias
            let link = await mp(items, 12, 0);  
                                                           
            
            console.log(link)
            return res.redirect(link.body.init_point);
            //return res.send('Enviamos los datos a Mercado Pago')
        } catch (error) {
            return res.send(error)
        }
    },
    // Step 9
    feedback: (req, res) => {
        //return res.send( req.query )
        return res.send('Recibimos la respuesta de Mercado Pago')
    }
};