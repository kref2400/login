import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';
import BrandHeader from './components/BrandHeader/BrandHeader';
//import Login from './components/Login/Login';
import Login from './components/Pages/Login';
import Todo from './components/Pages/Todo/Todo';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login" exact>
            <Login>home</Login>
          </Route>
          <Route path="/Todo" exact>
            <Todo></Todo>
          </Route>
        </switch>
      </section>
    </Router>
  );
}

export default App;
