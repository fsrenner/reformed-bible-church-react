import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import People from './people/People';
import Households from "./households/Households";
import Addresses from "./addresses/Addresses";
import Logout from "./login/Logout";
import { setTab } from '../redux/actions';

export default function Admin() {

  const dispatch = useDispatch();
  const key = useSelector((state) => state.states.tab);

  return (
    <section className="container-fullwidth rbc tabs">
      <Logout />
      <Tabs defaultActiveKey="people" id="uncontrolled-tab-example" className="mb-3" activeKey={key} onSelect={(tab) => dispatch(
        setTab({
          tab
        })
      )}>
        <Tab eventKey="people" title="People">
          <People />
        </Tab>
        <Tab eventKey="household" title="Households">
          <Households />
        </Tab>
        <Tab eventKey="addresses" title="Addresses">
          <Addresses />
        </Tab>
      </Tabs>
    </section>
  )
}