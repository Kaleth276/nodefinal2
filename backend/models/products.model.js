const mongoose=require("../config/database")

const schemaProducto= new mongoose.Schema({
    referencia:{
        type:String,
        required:[true,"la referencia es obligatoria"]
    },
    nombre:{
        type:String,
        required:[true,"asignar nombre es obligatoria"]
    },
    descripcion:{
        type:String,
        required:[true,"la descripcion es obligatoria es obligatoria"]
    },
    precio:{
        type:Number,
        default:[0,"el precio por defecto es 0"],
        min:[0,"el precio minimo es 0"]
    },
    stock:{
        type:Number,
        default:[0,"el stcok por defecto es 0"],
        min:[0,"el stcok por defecto es 0"]
    },
    imagen:{
        type:String,
        required:[true,"no existe la ruta o imagen por defecto"]
    },
    habiltado:{
        type:Boolean,
        default:true
    }
})

const producto=mongoose.model("producto",schemaProducto)
module.exports=producto