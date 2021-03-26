import Home from './home';
import Login from './login';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login}  />
      <Route path="/" component={Home} />
    </Switch>
  )
};

export default App;

