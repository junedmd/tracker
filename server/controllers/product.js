import Product from "../models/product.js";

const PostProduct = async (req,res)=>{
        const{name,description,quantity,price}=req.body;
        try{
            const newProduct = new Product({
                name:name,
                description:description,
                quantity:quantity,
                price:price
            });

            const savedProduct = await newProduct.save();

            res.send({
                success: true,
                data: savedProduct,
                message: "A new product add to expenses!!!",
              })
        }catch(e){
            res.send({
                success:false,
                message:e.message,
                
            })
           
        }
};




   const GetProduct= async(req,res)=>{

    try{
        const loadData = await Product.find();

        res.send({
            success:true,
            data:loadData,
            message:"successfully fetch all data"
        })

    }catch(e){
        res.send(
            {
               success:false,
               message:e.message 
            }
        )
    }

};

 export { PostProduct,GetProduct} ;