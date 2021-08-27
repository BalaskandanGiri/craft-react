
import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import productService from '../services/productService'

const AddNewProfile = ({refresh}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        productService.create({name, description}).then(() => { 
            refresh()
            history.push("/products");
        })
    }

    return(
        <div>
            <h2>Add a new</h2>
            <form onSubmit={submitHandler}>
                <table>
                    <tbody>
                        <tr><td>name:</td><td><input value={name} onChange={(e) => {setName(e.target.value)}}/></td></tr>
                        <tr><td>desc:</td><td><input value={description} onChange={(e) => {setDescription(e.target.value)}}/></td></tr>
                        <tr><td></td><td><button type="submit" class="btn btn-primary">add</button></td></tr>
                    </tbody>
                </table>


            </form>
        </div>
    );

}

export default AddNewProfile;