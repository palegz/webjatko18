import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Loans from './loans';
import Users from './users';
import Equipment from './equipment';
import LoginPage from './login';


const PageRouter = () => (
    <Switch>
        <Route exact path= "/" component={LandingPage} />
        <Route path="/loans" component={Loans} />
        <Route path="/users" component={Users} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/login" component={LoginPage}  />
    </Switch>
)


export default PageRouter;