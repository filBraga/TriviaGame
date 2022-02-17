import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Teladeconfiguracao from './pages/Teladeconfiguracao';
import Teladojogo from './pages/Teladojogo';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/jogodomilhao" component={ Teladojogo } />
        <Route exact path="/telaconfiguracao" component={ Teladeconfiguracao } />
        <Route exact path="/feedback" component={ Feedback } />
      </Switch>
    );
  }
}

export default App;
