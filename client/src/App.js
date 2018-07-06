import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Home from './Layouts/Home';
import Episode from './Layouts/Episode';
import Blog from './Layouts/Blog';
import Engineer from './Layouts/Engineer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const App = () => (
     <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/episode" component={Episode} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/engineer" component={Engineer} />
        </Switch>
    </Router>
);

export default App;
