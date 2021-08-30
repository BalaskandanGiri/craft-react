
import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import productService from '../services/productService'



const Products = ({products, refresh}) => {
    console.log(products)
    if(!products || products.length === 0) return null
    const productActions = (product) => {
        return <div style={{"display":"flex", "justifyContent":"space-around"}}>
                    <i class="bi bi-trash-fill" style={{"color":"#ff5a5a", "cursor":"pointer"}} onClick={() => {productService.deleteItem(product.id).then(() => {refresh()})}}></i>
                    <Link to={{pathname:"/editProduct", state:{productData:product}}}> <i class="bi bi-pencil" style={{"color":"#2f2fc1", "cursor":"pointer"}}></i></Link>
                </div>
    }
    return (
        <div>
            <center><h2>Products</h2></center>
            <br/>
            <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"15px"}}><Link to="/createProduct"><i class="bi bi-plus-lg"></i></Link></div>
            <table class="table">
                <thead>
                    <tr style={{"textAlign":"center"}}>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody style={{"textAlign":"center"}}>
                    {products.map(product => (<tr><td>{product.id}</td><td>{product.name}</td><td>{product.description}</td><td>{productActions(product)}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Products;