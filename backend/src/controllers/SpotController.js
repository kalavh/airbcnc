const Spot = require('../model/Spot')
const User = require('../model/User')

module.exports = {
    //index list
    async index(req, res) {
        const { tech } = req.query;
    
        const spots = await Spot.find({ techs: tech });
    
        return res.json(spots);
      },
    

    // store add
    async store ( req, res ) {
        const {filename} = req.file
        const {company, techs, price} = req.body
        const {user_id} = req.headers
      
        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ Erro : 'Usuario não existe'})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail:filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
        
    }
}