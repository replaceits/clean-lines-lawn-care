
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Footer from './components/Footer';
import Nav from './components/Nav';

import ContactUs from './components/pages/ContactUs';
import FreeEstimate from './components/pages/FreeEstimate';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Services from './components/pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/free-estimate' component={FreeEstimate} />
          <Route path='/services' component={Services} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
