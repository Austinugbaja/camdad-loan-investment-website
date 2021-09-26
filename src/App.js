import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';



const App = () => {
    return (
            
       <Router>
           <Navbar />
           <Switch>
               <Route path="/" exact>
                   <HomePage />
               </Route>
               <Route path="/AboutUs" exact>
                   <AboutUsPage />
               </Route>
               <Route path="/ContactUs" exact>
                   <ContactUsPage />
               </Route>
           </Switch>
       </Router>
        
    )
}

export default App;