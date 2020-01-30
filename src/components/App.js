import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetail from '../pages/BadgeDetailsContainer';
import Charla from '../pages/Charla';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/charla" component={Charla} />
                    <Route exact path="/Badges" component={Badges} />
                    <Route exact path="/Badges/new" component={BadgeNew} />
                    <Route exact path="/Badges/:badgeId/detail" component={BadgeDetail} />
                    <Route exact path="/Badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;