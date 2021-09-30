import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';
import Login from './pages/Login';
import SignUpPage from './pages/SignUp';



const App = () => {
    return (
            
       <Router>
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
               <Route path="/SignUp" exact>
                   <SignUpPage />
               </Route>
               <Route path="/Login" exact>
                   <Login />
               </Route>
           </Switch>
       </Router>
        
    )
}

export default App;