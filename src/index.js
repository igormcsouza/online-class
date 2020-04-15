import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar

import LandingPage from './landing-page'
import WebPage from './web'
import About from './web/about'
import Login from './web/login'
import Application from './app'
import Page404 from './utils/page404'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={LandingPage} />
            {/* <Route path='/web' component={WebPage} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/application' component={Application} />
            <Route path='*' component={Page404} /> */}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
