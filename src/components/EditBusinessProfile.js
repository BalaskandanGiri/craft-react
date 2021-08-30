
import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import businessProfilesService from '../services/businessProfilesService'
import productService from '../services/productService'

const EditBusinessProfile = (props) => {
    let data = props.location.state.data
    const [companyName, setCompanyName] = useState(data.companyName)
    const [legalName, setLegalName] = useState(data.legalName)
    const [email, setEmail] = useState(data.email)
    const [website, setWebsite] = useState(data.website)
    const [taxIdentifier, setTaxIdentifier] = useState(data.taxIdentifier)
    const [products, setProducts] = useState(data.products.map(product => product.id))
    const [businessAddress, setBusinessAddress] = useState({building: data.businessAddress.building, street: data.businessAddress.street, city: data.businessAddress.city, state: data.businessAddress.state, country: data.businessAddress.country, pincode: data.businessAddress.pincode})
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        businessProfilesService.change({id:data.id ,companyName, legalName, email, website, taxIdentifier, businessAddress, products}).then(() => { 
            history.push("/businessProfiles");
        })
    }

    return(
        <div>
            <h2>Add a new</h2>
            <form onSubmit={submitHandler}>
                <table>
                    <tbody>
                        <tr><td>companyName:</td><td><input value={companyName} onChange={(e) => {setCompanyName(e.target.value)}}/></td></tr>
                        <tr><td>legalName:</td><td><input value={legalName} onChange={(e) => {setLegalName(e.target.value)}}/></td></tr>
                        <tr><td>email:</td><td><input value={email} onChange={(e) => {setEmail(e.target.value)}}/></td></tr>
                        <tr><td>website:</td><td><input value={website} onChange={(e) => {setWebsite(e.target.value)}}/></td></tr>
                        <tr><td>taxIdentifier:</td><td><input value={taxIdentifier} onChange={(e) => {setTaxIdentifier(e.target.value)}}/></td></tr>
                        <tr><td>building:</td><td><input value={businessAddress.building} onChange={(e) => {setBusinessAddress({...businessAddress, building: e.target.value})}}/></td></tr>
                        <tr><td>street:</td><td><input value={businessAddress.street} onChange={(e) => {setBusinessAddress({...businessAddress, street: e.target.value})}}/></td></tr>
                        <tr><td>city:</td><td><input value={businessAddress.city} onChange={(e) => {setBusinessAddress({...businessAddress, city: e.target.value})}}/></td></tr>
                        <tr><td>state:</td><td><input value={businessAddress.state} onChange={(e) => {setBusinessAddress({...businessAddress, state: e.target.value})}}/></td></tr>
                        <tr><td>country:</td><td><input value={businessAddress.country} onChange={(e) => {setBusinessAddress({...businessAddress, country: e.target.value})}}/></td></tr>
                        <tr><td>pincode:</td><td><input value={businessAddress.coupincodentry} onChange={(e) => {setBusinessAddress({...businessAddress, pincode: e.target.value})}}/></td></tr>
                        <tr><td>products:</td><td><input value={products.join(',')} onChange={(e) => {setProducts(e.target.value.split(","))}}/></td></tr>
                        <tr><td></td><td><button type="submit" class="btn btn-primary">edit</button></td></tr>
                    </tbody>
                </table>


            </form>
        </div>
    );

}

export default EditBusinessProfile;