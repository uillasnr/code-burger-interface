import React from "react"

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  paths  from "../constants/paths"


import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import Cart from "../containers/Cart"
import Admin from "../containers/Admin"
import PrivateRoute from "./private-route"
import Products from "../containers/Products"


function Routes() {

    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute  component={Products} path="/produtos" />
                <PrivateRoute  component={Cart} path="/carrinho" />

                <PrivateRoute  component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute  component={Admin} path={paths.Products} isAdmin />
                <PrivateRoute  component={Admin} path={paths.NewProduct} isAdmin />
                <PrivateRoute  component={Admin} path={paths.EditProduct} isAdmin />
            </Switch>
        </Router>
    )
}
export default Routes

