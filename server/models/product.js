import { Schema ,model} from "mongoose";

const productSchema= new Schema({
        name:{
            type:String,
            require:true,
        },
        description:{
            type:String,
            require:true,
        },
        quantity:{
            type:Number,
            require:true,
        },
        price:{
            type:Number,
            require:true,
        }},
        {
            timestamps:true
        }
);

const Product = model("Product",productSchema)
export default Product;
