import React from 'react';
import Buttons from './components/Buttons';
import Advert from './components/Advert';
import NewAdvert from './components/NewAdvert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Offers, MyReservations} from './components/Operations';
import Reservation from "./components/Reservation";
import Footer from "./components/Footer"
import app from "./components/scss/app.scss"


function App() {
  return (
    <Router>
      <div className={"navBar"}>
      
        <Buttons/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/advert" exact component={Advert}>
          <Offers/>
          </Route>
          <Route path="/newAdvert" component={NewAdvert}/>
          <Route path="/reservations" component={Reservation}/>
          <MyReservations/>

        </Switch>
      </div>
      <Footer/>
    </Router>

  )
}

const Home = () => (
  <div>
    <h1>Hau can we help you!</h1>
    </div>
)

export default App;
