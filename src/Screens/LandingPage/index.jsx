"use client";

import { Layout, Hero, Gallery, Events, Sponsors } from "../../Components";
import ExecutivesRow from "../../Components/Landing/ExecutivesRow";
import { events } from "../../helpers/data";

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <ExecutivesRow />
      <Events events={events} type="EVENTS" />
      <Gallery />
      <Sponsors />
    </Layout>
  );
}

export default LandingPage;
