import React from 'react';

import { 
    BrowserRouter as Router,
     Route
    } from 'react-router-dom';
    import App from './App';
    import About from './About';
    import Navbar from './Navbar';
    import Contact from './Contact';
    import createBrowserHistory from 'history/createBrowserHistory';


    const customHistory = createBrowserHistory ();





    const CustomRoutes = () =>(


        <Router history= {customHistory}>

            <div>
             <Navbar/>


                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route path='/Contact/:id' component={Contact} />
                {/* <Route path='/about' component={about} /> */}



              


  




            </div>
        </Router>




)

    export default CustomRoutes;