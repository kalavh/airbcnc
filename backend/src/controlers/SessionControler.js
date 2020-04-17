// index , show , store , update , destroy
module.exports = {
    store( req , res ) { // cria outra sessao`
    return res.json({message : "hello"})
    }
}