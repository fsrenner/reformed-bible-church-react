import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import Beliefs from './main/beliefs/Beliefs';
import Leadership from './main/leadership/Leadership';
import Home from './main/home/Home';
import Sermons from './main/sermons/Sermons';
// import PaginationTest from './PaginationTest';
import Admin from './admin/Admin';
import Layout from './Layout';
import PersonForm from './admin/people/PersonForm';

function App() {
  return (
    <Router>
      <Layout>
        <main className="container-fullwidth">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leadership" component={Leadership} />
            <Route exact path="/beliefs" component={Beliefs} />
            <Route exact path="/sermons" component={Sermons} />
            {/* <Route exact path="/pagination" component={PaginationTest} /> */}
            <Route exact path="/admin" component={Admin} />
            <Route path="/person/:id?"><PersonForm /></Route>
          </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
