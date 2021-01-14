import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import Beliefs from './main/beliefs/Beliefs';
import Leadership from './main/leadership/Leadership';
import Home from './main/home/Home';
import Give from './main/give/Give';
import Admin from './admin/Admin';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <main className="container-fullwidth">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leadership" component={Leadership} />
            <Route exact path="/beliefs" component={Beliefs} />
            <Route exact path="/give" component={Give} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
