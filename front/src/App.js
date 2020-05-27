import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notfound';
import Navbar from './components/navbar';
import AboutUs from './views/aboutus';
import OurServices from './views/ourservices';
import OurBarbers from './views/ourbarbers';
import Appointment from './views/appointment';
import Contact from './views/contact';
import LogIn from './views/login';
import Register from './views/register';
import Footer from './components/footer';
import Pricing from './views/pricing';
import Faq from './views/faq';

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="col-md-9 offset-3">
        <div className="row">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/appointment" component={Appointment} />
            <Route exact path="/ourbarbers" component={OurBarbers} />
            <Route exact path="/ourservices" component={OurServices} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default injectContext(App)