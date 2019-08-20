import React from 'react';
import logo from './logo.svg';
import Home from './pages/home/Home.Component'

import './assets/css/small-business.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

