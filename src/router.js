import React from 'react';
// Import Containers
import Listing from './containers/Listing';
import Details from './containers/Details';
import Access from './containers/Access';
// Import Router
import { Switch, Route } from 'react-router';


const Router = () => {
        return (
            <Switch>
                <Route exact path="/Listing" component={Listing} />
                <Route path="/Access" component={Access} />
                <Route path="/place/:id" component={Details} />
            </Switch>
        )
    };

    export default Router;