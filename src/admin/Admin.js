import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import People from './people/People';
import Households from "./households/Households";
import Addresses from "./addresses/Addresses";

export default function Admin() {

  return (
    <section className="container-fullwidth rbc tabs">
      <Tabs defaultActiveKey="people" id="uncontrolled-tab-example" className="mb-3">
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