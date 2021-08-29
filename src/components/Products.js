
import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import productService from '../services/productService'



const Products = ({products, refresh}) => {
    console.log(products)
    if(!products || products.length === 0) return null
    const deleteProduct = (product) => {
        return <div style={{"display":"flex", "justifyContent":"space-around"}}>
                    <i class="bi bi-trash-fill" style={{"color":"#ff5a5a", "cursor":"pointer"}} onClick={() => {productService.deleteItem(product.id).then(() => {refresh()})}}></i>
                    <i class="bi bi-pencil" style={{"color":"#2f2fc1", "cursor":"pointer"}}></i>
                </div>
    }
    return (
        <div>
            <center><h2>Products</h2></center>
            <br/>
            <Link to="/createProduct"><button type="button" class="btn btn-primary">Create</button></Link><br/>
            <table class="table">
                <thead>
                    <tr style={{"textAlign":"center"}}>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody style={{"textAlign":"center"}}>
                    {products.map(product => (<tr><td>{product.id}</td><td>{product.name}</td><td>{product.description}</td><td>{deleteProduct(product)}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Products;