import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="col-md-9 offset-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default injectContext(App)