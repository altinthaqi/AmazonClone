import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Login from './Login'
import { auth } from "./firebase"



function App() {
  const [{user}, dispatch] = useStateValue();

  //useEffect <<< Learn it
  //Piece of code which runs in a given condition

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
    });

    return () => {
      //any cleanup will go here
      unsubscribe();


    }
  }, [])

  console.log('USER IS >>>>>>>>>' + user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;