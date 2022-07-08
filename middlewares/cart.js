module.exports =(req,res,next) => {
    // Step 1 Cración de carro si no hay
    //step 2 en app.js
    if(req.session && !req.session.cart){
        req.session.cart = [];
    }
    res.locals.cart = req.session.cart;

    next();
};
//middleware de aplicación, no de ruta*