import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingCartList from '../ShoppingCartList';

const App = () => (
    <Router>
        <Route exact path="/" component={ShoppingCartList} />
    </Router>
);

export default App;
