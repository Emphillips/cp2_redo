import React from 'react';
import { Switch, Route } from 'react-router';
import Listing from './containers/Listing';
import Details from './containers/Details';
import Access from './containers/Access';

const Router = () => {
        return (
            <Switch>
                <Route exact path="/Listing" component={Listing} />
                <Route path="/Access" component={Access} />
                <Route path="/place/:id" component={Details} />
            </Switch>
        )
    }

    export default Router