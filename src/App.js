import React, { Component } from 'react';
import Home from "./pages/Home";
import './App.css';

class App extends Component {
  render() {
    return (
	<Home
		namaDepan=" Dan "
		namaBelakang="Abramov"
	/>
	);
  }
}

export default App;
