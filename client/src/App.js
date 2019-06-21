import React from 'react';
import {withRouter} from 'react-router'
import Home from './pages/ClientPage/Home';
import {Route} from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Route exact path="/" component = {Home}/>
        </div>
    );
};

export default withRouter(App);