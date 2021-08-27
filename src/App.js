
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';

import Footer from './components/Footer';
import Nav from './components/Nav';

// import Construction from './components/pages/Construction';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./components/pages/Home'));
const Gallery = React.lazy(() => import('./components/pages/Gallery'));
const ContactUs = React.lazy(() => import('./components/pages/ContactUs'));
const Reviews = React.lazy(() => import('./components/pages/Reviews'));
const FreeEstimate = React.lazy(() => import('./components/pages/FreeEstimate'));
const Services = React.lazy(() => import('./components/pages/Services'));
const FourOhFour = React.lazy(() => import('./components/pages/FourOhFour'));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        
          <div id='app-content' className='app-content'>
            <ScrollToTop scrollId='app-content'>
              <Suspense fallback={<Loading />}>
                <Switch>
                  {/* <Route exact path='/' component={Construction} /> */}
                  <Route exact path='/' component={Home} />
                  <Route path='/reviews' component={Reviews} />
                  <Route path='/gallery' component={Gallery} />
                  <Route path='/contact-us' component={ContactUs} />
                  <Route path='/free-estimate' component={FreeEstimate} />
                  <Route path='/services' component={Services} />
                  <Route path='/404' component={FourOhFour} />
                  <Redirect to='/404' />
                </Switch>
              </Suspense>
            
              <Footer />
            </ScrollToTop>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
