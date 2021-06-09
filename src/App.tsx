import { useState } from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import { Principal } from './dtos/principal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

function App() {

  const [currentUser, updateCurrentUser] = useState(undefined as Principal | undefined);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomeComponent currentUser={currentUser} />} />
          <Route path="/login" render={() => <LoginComponent currentUser={currentUser} setCurrentUser={updateCurrentUser} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
