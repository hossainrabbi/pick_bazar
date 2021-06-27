import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/products/:productId"
                    component={ProductDetails}
                />
            </Switch>
        </Router>
    );
};

export default App;
