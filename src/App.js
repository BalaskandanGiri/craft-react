
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom'
import './App.css';
import Products from './components/Products';
import productService from './services/productService';
import BusinessProfiles from './components/BusinessProfiles';
import AddNewProfile from './components/AddNewProfile';
import AddNewBusinessProfile from './components/AddNewBusinessProfile';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        productService.getAll().then(initialProducts => {
            console.log(initialProducts)
            setProducts(initialProducts)
        })
    }, [loading])


    const padding = {
        paddingRight: 5
      }
    return (
        <div class="container.fluid">
            <h1>Craft</h1>
            <div>
                <Link to="/" style={padding}>Products</Link> &nbsp;&nbsp;
                <Link to='/businessProfiles' style={padding}>Business profiles</Link>
            </div>

            <Switch>
                <Route path="/createBusinessProfile">
                    <AddNewBusinessProfile refresh={()=> {setLoading(!loading)}}></AddNewBusinessProfile>
                </Route>
                <Route path="/createProduct">
                    <AddNewProfile refresh={()=> {setLoading(!loading)}}></AddNewProfile>
                </Route> 
                <Route path="/businessProfiles">
                    <BusinessProfiles refresh={()=> {setLoading(!loading)}}/>
                </Route> 
                <Route path="/">
                    <Products products={products} refresh={()=> {setLoading(!loading)}}></Products>
                </Route>
            </Switch>

            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
