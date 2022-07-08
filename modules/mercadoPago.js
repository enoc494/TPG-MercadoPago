// Step 7, AGREGADO MERCADO PAGO

// const ??? = require(???)
const mercadoPago = require("mercadopago");

// const credential = ???  Access token*
const credential = process.env.MP || "TEST-8121410484085042-070817-5cb823873130f452fbc1be15aec95f77-138496329";

// let server = ??? Agreagar dominio del deploy
let server = process.env.SERVER || "http://localhost:3030";

// const success = ???
const success = `${server}/checkout/feedback`
// const failure = ???
const failure = `${server}/checkout/feedback`
// const pending = ???
const pending = `${server}/checkout/feedback`

/*
const mp  = async (???,???,???) => {
    try {
        // Magic
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = mp
*/



const mp  = async (???,???,???) => {
    try {
        // Magic
        mercadoPago.configure({
            access_token: credential,

        })
        //objeto para preferencias
        let config ={
            
        }
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = mp
