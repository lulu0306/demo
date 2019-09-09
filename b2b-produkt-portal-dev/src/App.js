import React from 'react';
import './App.css'

import Footer from './Components/Footer'
import Home from './Components/Home'
import Contact from './Components/Contact'
import PageNav from './Components/PageNav'
import PremiumProduct from './Components/PremiumProduct'
import Tag from './Components/Tag'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
        <PageNav/>
        <main style={{backgroundColor:'#faf9f7'}} >
        <Route exact  path="/" component={Home} />
        <Route path="/contact/" component={Contact} />
        <Route path='/product/:slug' component={PremiumProduct} />
        <Route path='/tag/:slug' component={Tag}/>
        </main>
      <div>
        <Footer />
      </div>
    </Router>
    )
  }
}


export default App


