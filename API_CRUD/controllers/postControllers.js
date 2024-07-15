const { DELETE } = require("sequelize/lib/query-types")
const posteosModel = require ("../models/posteosModel.js")

/*TRAER TODOS LOS POSTEOS  */
const traerPosteos = async (req,res)=> {
try {
const posteos =  await posteosModel.findAll()
res.json(posteos)
} catch (error) {
    res.json({message:error.message})
}
}
/*TRAER*/
const traerUnPosteo = async (req,res)=>{
try {
    const posteo = await posteosModel.findByPk(req.params.id)
    res.json(posteo)
} catch (error) {
    res.json({message:error.message})
}
}
/*CREAR POST */
const crearPosteo = async (req,res)=>{
    try {
        await posteosModel.create(req.body)
        res.json("posteo creado")
    } catch (error) {
        res.json({message:error.message})
    }
}
/*ACTUALIZA */
const actualizarPosteo = async(req,res)=>{
    try {
        await posteosModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("posteo actualizo correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}
/*BORRAR */
const borrarPosteo = async (req,res)=>{
    try {
        await posteosModel.destroy( { where:{id:req.params.id}})
        res.json("borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}
module.exports= {traerPosteos,traerUnPosteo,crearPosteo,actualizarPosteo,borrarPosteo}