import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Admin from './Components/Admin/Admin'
import Catalog from './Components/Catalog/Catalog'




export default(
    <Switch>
    <Route exact path='/' component={Catalog}/>
    <Route path='/cart' component={Cart}/>
    <Route path='/admin' component={Admin}/>
 
    </Switch>
)