import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import Beliefs from './main/beliefs/Beliefs';
import Leadership from './main/leadership/Leadership';
import Home from './main/home/Home';
import Give from './main/give/Give';
import Sermons from './main/sermons/Sermons';
import Admin from './admin/Admin';
import Layout from './Layout';
import Unauthorized from './admin/Unauthorized'
import Dashboard from './admin/Dashboard';
import AddSermon from './admin/AddSermon';
import EditSermon from './admin/EditSermon';
import DeleteSermon from './admin/DeleteSermon'

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
            <Route exact path="/give" component={Give} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/unauthorized" component={Unauthorized} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/dashboard/sermon/add" component={AddSermon} />
            <Route exact path="/admin/dashboard/sermon/edit" component={EditSermon} />
            <Route exact path="/admin/dashboard/sermon/delete" component={DeleteSermon} />
          </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
