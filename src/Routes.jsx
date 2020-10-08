import React from 'react';
import Dashboard from '../src/Component/Dashboard/Dashboard';
import Login from '../src/Component/Login/Login';
import Registration from '../src/Component/Registration/RegistrationForm';
import Logout from '../src/Component/Logout/Logout';
import NotFound from '../src/Component/NotFound/NotFound';
import ProductDisplay from '../src/Component/ProductDisplay/ProductDisplay';


import { BrowserRouter as Router, Route, Switch, Link}  from 'react-router-dom';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Registration" component={Registration}/>
            <Route path="/Dashboard" component = {Dashboard}/>
            <Route path="/ProductDisplay" component={ProductDisplay}/>
            <Route path="/Logout" component={Logout} />
            <Route path="/*">
                <NotFound/>
            </Route>
        </Switch>
    </Router>
)


export default Routes;