
import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import productService from '../services/productService'

const EditProfile = (props) => {
    console.log(props)
    let profileData = props.location.state.productData
    const [name, setName] = useState(profileData.name)
    const [description, setDescription] = useState(profileData.description)
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        productService.change({id: profileData.id, name, description}).then(() => { 
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
                        <tr><td></td><td><button type="submit" class="btn btn-primary">edit</button></td></tr>
                    </tbody>
                </table>


            </form>
        </div>
    );

}

export default EditProfile;