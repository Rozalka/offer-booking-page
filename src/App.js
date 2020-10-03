import React from 'react';
import Buttons from './components/Buttons';
import Advert from './components/Advert';
import NewAdvert from './components/NewAdvert';
import MyReservations from './components/MyReservations';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Operations from './components/Operations';


function App() {
  return (
    <Router>
      <div>
      
        <Buttons/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/advert" exact component={Advert}>
          <Operations/>
          </Route>
          <Route path="/newAdvert" component={NewAdvert}/>
          <Route path="/myReservations" component={MyReservations}/>
        </Switch>
      </div>
    </Router>

  )
}

const Home = () => (
  <div>
    <h1>Hau can we help you!</h1>
    </div>
)

export default App;
