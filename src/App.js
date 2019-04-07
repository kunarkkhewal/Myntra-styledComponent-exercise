import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Index';
import HotdealsSection from './components/Hotdeals/Index';
import DiscountSection from './components/Discount/Index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carousel/>
        <HotdealsSection/>
        <DiscountSection/>
      </div>
    );
  }
}

export default App;
