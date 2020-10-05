import React from 'react';
import Buttons from './components/Buttons';
// import Advert from './components/Offer';
import NewAdvert from './components/NewAdvert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Offers, MyReservations} from './components/Operations';
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import scss from "./components/scss/main.scss";
import Offer from './components/Offer';
import dog from "./assets/dog-outline-chasing-balloons.png"



function App() {
  return (
    <Router>
      <div >
      
        <Buttons/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/offer" exact component={Offer}>
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
  <div className={"main_container"}>
    <img className={"logo"} src={dog}></img>
    <h1>Hau can we help you!</h1>
    <h3>The most popular dog service booking platform in country</h3>
  </div>
)

export default App;
