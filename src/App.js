import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Meetings from './pages/Meetings';
import Videos from './pages/ResourceCenter/Videos';
import Articles from './pages/ResourceCenter/Articles';
import RegComplete from './components/RegComplete/RegComplete';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';
// import Join from './pages/Join';
// import Chat from './pages/Chat';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './utils/initFontAwesome';
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/meetings' component={Meetings} />
            {/* <Route path="/resource-center" component={ResourceCenter} /> */}
            <Route path='/resource-center/videos' component={Videos} />
            <Route path='/resource-center/articles' component={Articles} />
            <Route path='/registration-complete' component={RegComplete} />
            {/* <Route path='/chat' component={Chat} />
            <Route path='/join' component={Join} /> */}
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
