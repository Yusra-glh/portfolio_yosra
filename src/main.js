import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Homelight from "../src/pages/homeLight";
import Homevideo from "../src/pages/homeVideo";
import Homeparticle from "../src/pages/homeParticle";
import Homegrey from "../src/pages/homeGrey";
import Homechef from "../src/pages/homeChef";
import Homedesigner from "../src/pages/homeDesigner";
import Homelawyer from "../src/pages/homeLawyer";
import Homelightnew from "../src/pages/homeLightnew";
import Homedarknew from "../src/pages/homeDarknew";
import Homereveal from "../src/pages/homeReveal";
import Homereveallight from "../src/pages/homeRevealLight";
import Homerevealdarknew from "../src/pages/homeRevealDarknew";
import Homereveallightnew from "../src/pages/homeRevealLightnew";
import PhotolinkDetails from "./pages/photolinkDetails";
import CarForHerDetails from "./pages/carForHerDetails";
import BookAndBoatDetails from "./pages/bookandboatDetails";
import BeemDriverDetails from "./pages/beemDriverDetails";
import BeemTaxiDetails from "./pages/beemTaxiDetails";
import RavenDetails from "./pages/ravenDetails";
import RestDetails from "./pages/restDetails";
import IramaDetails from "./pages/iramaDetails";
import BagzeeDetails from "./pages/bagzeeDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path = "/" element={< Home/>}/> */}
          {/* <Route path="/homelight" element={<Homelight />} />
          <Route path="/homevideo" element={<Homevideo />} />
          <Route path="/homeparticle" element={<Homeparticle />} />
          <Route path="/homegrey" element={<Homegrey />} />
          <Route path="/homechef" element={<Homechef />} />
          <Route path="/homedesigner" element={<Homedesigner />} />
          <Route path="/homelawyer" element={<Homelawyer />} />
          <Route path="/homelightnew" element={<Homelightnew />} />
          <Route path="/homedarknew" element={<Homedarknew />} />
          <Route path="/homereveal" element={<Homereveal />} />
          <Route path="/homereveallight" element={<Homereveallight />} />
          <Route path="/homerevealdarknew" element={<Homerevealdarknew />} /> */}
          <Route path="/photolink" element={<PhotolinkDetails />} />
          <Route path="/bookandboat" element={<BookAndBoatDetails />} />
          <Route path="/beemtaxi" element={<BeemTaxiDetails />} />
          <Route path="/beemdriver" element={<BeemDriverDetails />} />
          <Route path="/raven" element={<RavenDetails />} />
          <Route path="/rest4u" element={<RestDetails />} />
          <Route path="/irama" element={<IramaDetails />} />
          <Route path="/bagzee" element={<BagzeeDetails />} />
          <Route path="/carforher" element={<CarForHerDetails />} />
          <Route path="/" element={<Homereveallightnew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
