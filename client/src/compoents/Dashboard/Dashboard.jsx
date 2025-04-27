import React, { useState,useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard =()=>{
    const[product,setProduct]=useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get('/api/v1/products');
            setProduct(response?.data?.data)
            console.log(response.data.data)
            console.log(product)
        } catch (e) {
            console.log(e.message);
            alert(e.message)
        }
    };

    useEffect(() => {
        loadData()
    }, [])
    return(
        <>
            <h1 className="main">All Products </h1>

            <div className="dic">
                {product.length > 0 ? (
                 product.map((item, index) => (
                <div key={index} className="card">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
                </div>))
            ) : (
          <p>No products found.</p>
        )}
      </div>
        </>
    )
}
export default Dashboard;



    // const[product,setProduct]=useState([]);

    // const loadData = async () => {
    //     try {
    //         const response = await axios.get('/api/v1/products');
    //         setProduct(response?.data?.data)
    //         console.log(response.data.data)
    //         console.log(product)
    //     } catch (e) {
    //         console.log(e.message);
    //         alert(e.message)
    //     }
    // };

    // useEffect(() => {
    //     loadData()
    // }, [])