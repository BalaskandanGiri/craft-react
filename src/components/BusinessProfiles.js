
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

    const deleteBusinessProfile = (businessProfile) => {
        return <i class="bi bi-trash-fill"></i>
    }
    return (
        <div>
            <center><h2>BusinessProfiles</h2></center>
            <br/>
            <Link to="/createBusinessProfile"><button type="button" class="btn btn-primary">Create</button></Link><br/>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">companyName</th>
                    <th scope="col">legalName</th>
                    <th scope="col">email</th>
                    <th scope="col">website</th>
                    <th scope="col">taxIdentifier</th>
                    <th scope="col">businessAddress</th>
                    <th scope="col">products</th>
                    <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map(profile => (<tr><td>{profile.companyName}</td><td>{profile.legalName}</td><td>{profile.email}</td><td>{profile.website}</td><td>{profile.taxIdentifier}</td><td>{convertAddressToStr(profile.businessAddress)}</td><td>{getProductNames(profile.products)}</td><td>{deleteBusinessProfile(profile)}</td></tr>))}
                </tbody>
            </table>
        </div> 
    )
}

export default BusinessProfiles;