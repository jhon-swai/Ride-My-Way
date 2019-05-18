import React, { Component } from 'react';
import './App.css';
import NavBar from './componets/navigation/NavBar';
import Faq from './componets/faq/faq';
// import Contacts from './componets/contacts/contacts';



class App extends Component {
    render() {



        return (
        <div>
        <div className = "body" >
          <NavBar/>
          <h2 id="quote">
                RIDE MY WAY

            </h2>
            <h1  id="quote1">
                Get Ride Offers ,See and Responds to Ride Offers , Share your Ride with Others,Get History and Actions on your responses

            </h1>


         </div>
<Faq />


                   </div>


        )
    }
}

export default App;
