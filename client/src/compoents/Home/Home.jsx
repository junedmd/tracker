import React, { useState } from "react";
import "./Home.css"
import axios from "axios";

const Home =()=>{

    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[quantity,setQuantity]=useState("");
    const[price,setPrice]=useState("")

    const addProduct =async()=>{
      try {
        const response = await axios.post("/api/v1/products", {
          name: name,
          description:description,
          quantity:quantity,
          price:price
        });
  
        console.log(response);
        alert(" api is clicking")
        setName("");
        setQuantity("");
        setDescription("");
        setPrice("");
      } catch (e) {
        console.log(e.message);
        alert(e.message);
      }
    }


    return(
        <>
        <div className="box">

            <form action="" className="form">
                
              <input type="text" placeholder="name" value={name} onChange={(e)=>{
                setName(e.target.value)}} className="inputs"/> 
              
              <input type="text" placeholder="description" value={description} onChange={(e)=>{
                setDescription(e.target.value) }} className="inputs"/> 
              
              <input type="text" placeholder="quantity" value={quantity} onChange={(e)=>{
                setQuantity(e.target.value)}} className="inputs" /> 
              
              <input type="text" placeholder="Price" value={price} onChange={(e)=>{
                 setPrice(e.target.value)}} className="inputs" /> 
              

                 <button type="button" className="btn" onClick={addProduct}> Submit </button>
                

            </form>
        </div>
        </>
    )
}
export default Home;