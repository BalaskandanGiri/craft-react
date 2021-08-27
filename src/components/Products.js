
import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import productService from '../services/productService'



const Products = ({products, refresh}) => {
    console.log(products)
    if(!products || products.length === 0) return null
    const deleteProduct = (product) => {
        return <button type="button" class="btn btn-danger" onClick={() => {productService.deleteItem(product.id).then(() => {refresh()})}}>delete</button>
    }
    return (
        <div>
            <center><h2>Products</h2></center>
            <br/>
            <Link to="/createProduct"><button type="button" class="btn btn-primary">Create</button></Link><br/>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (<tr><td>{product.id}</td><td>{product.name}</td><td>{product.description}</td><td>{deleteProduct(product)}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Products;