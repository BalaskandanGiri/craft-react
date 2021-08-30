
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import businessProfilesService from '../services/businessProfilesService';



const BusinessProfiles = ({refresh}) => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        businessProfilesService.getAll().then(data => {
            console.log(data)
            setProfiles(data)
        })
    }, [loading])

    if(!profiles || profiles.length === 0) return null

    const convertAddressToStr = (address) => {
        return address.building + ', ' + address.street + ', ' + address.city + ', ' + address.state + ', ' + address.country;
    }

    const getProductNames = (products) => {
        return products.map(product => product.name).join(', ');
    }

    const productActions = (businessProfile) => {
        return <div style={{"display":"flex", "justifyContent":"space-around"}}>
                    <i class="bi bi-trash-fill" style={{"color":"#ff5a5a", "cursor":"pointer"}} onClick={() => {businessProfilesService.deleteItem(businessProfile.id).then(() => {setLoading(!loading)});}}></i>
                    <Link to={{pathname:"/editBusinessProfile", state:{data:businessProfile}}}><i class="bi bi-pencil" style={{"color":"#2f2fc1", "cursor":"pointer"}}></i></Link>
                </div>
    }
    return (
        <div>
            <center><h2>BusinessProfiles</h2></center><br/>
            <div style={{display:"flex",justifyContent:"flex-end",paddingRight:"15px"}}><Link to="/createBusinessProfile"><i class="bi bi-plus-lg"></i></Link></div>
            <table class="table">
                <thead>
                    <tr style={{"textAlign":"center"}}>
                    <th scope="col">companyName</th>
                    <th scope="col">legalName</th>
                    <th scope="col">email</th>
                    <th scope="col">website</th>
                    <th scope="col">taxIdentifier</th>
                    <th scope="col">businessAddress</th>
                    <th scope="col">products</th>
                    <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody style={{"textAlign":"center"}}>
                    {profiles.map(profile => (<tr><td>{profile.companyName}</td><td>{profile.legalName}</td><td>{profile.email}</td><td>{profile.website}</td><td>{profile.taxIdentifier}</td><td>{convertAddressToStr(profile.businessAddress)}</td><td>{getProductNames(profile.products)}</td><td>{productActions(profile)}</td></tr>))}
                </tbody>
            </table>
        </div> 
    )
}

export default BusinessProfiles;