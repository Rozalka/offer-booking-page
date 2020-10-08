import React from 'react';
import Buttons from './components/Buttons';
import NewAdvert from './components/NewAdvert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Offers, MyReservations, SingleOffer} from './components/Operations';
import Footer from "./components/Footer";
import  "./components/scss/main.scss";
import dog from "./assets/dog-outline-chasing-balloons.png"



function App() {
  return (
    <Router>
      <div >
        <Buttons/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/offer">
          <Offers/>
          </Route>
          <Route path="/details/:id" >
          <SingleOffer/>
          </Route>
          <Route path="/newAdvert" component={NewAdvert}/>
          <MyReservations/>
        </Switch>
      </div>
      <Footer/>
    </Router>

  )
}

const Home = () => (
  <div  className={"main_container"}>
    <div>
      <img alt={"dog with baloons"} className={"logo"} src={dog}></img>
      <h1>Hau can we help you!</h1>
      <h3>The most popular dog service booking platform in country</h3>
    </div>
  </div>
)

export default App;
