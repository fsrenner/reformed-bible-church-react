import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import Beliefs from './main/beliefs/Beliefs';
import Leadership from './main/leadership/Leadership';
import Home from './main/home/Home';
import Sermons from './main/sermons/Sermons';
// import PaginationTest from './PaginationTest';
// import Admin from './admin/Admin';
import Layout from './Layout';
// import PersonForm from './admin/people/PersonForm';
// import HouseholdForm from './admin/households/HouseholdForm';
// import AddressForm from './admin/addresses/AddressForm'
// import Login from './admin/login/Login';
// import Unauthorized from './admin/login/Unauthorized';

function App() {
  // const isLoggedIn = useSelector((state) => state.auth.user?.username);

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
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/unauthorized" component={Unauthorized} /> */}
            {/* <Route exact path="/admin">{ isLoggedIn ? <Admin /> : <Unauthorized/>}</Route> */}
            {/* <Route path="/person/:id?">{ isLoggedIn ? <PersonForm /> : <Unauthorized/>}</Route> */}
            {/* <Route path="/household/:id?">{ isLoggedIn ? <HouseholdForm /> : <Unauthorized/>}</Route> */}
            {/* <Route path="/address/:id?">{ isLoggedIn ? <AddressForm /> : <Unauthorized/>}</Route> */}
          </Switch>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
