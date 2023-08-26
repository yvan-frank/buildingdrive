import './App.css';
import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom';
import Home from "./pages/public/Home";
import {addNewListingLink, homeLink, showApartLink} from "./partials/RouteLink";
import React from "react";
import PageNotFound from "./pages/public/PageNotFound";
import ShowApartment from "./pages/public/ShowApartment";
import AddProperty from "./pages/users/AddProperty";
import Devis from "./pages/public/Devis";
import DevisStep from "./pages/DevisStep";
import Surface from "./pages/surface";
import Contact from "./pages/contact";


function App() {
  return (
    <>
      <Routes>
        {/*  public*/}
        {/*  <Route path={homeLink} element={<Home />} />*/}
          <Route path={homeLink} element={<Devis />} />
          <Route path={showApartLink} element={<ShowApartment />} />
          <Route path={addNewListingLink} element={<AddProperty />} />
          <Route path={'/devis/type'} element={<DevisStep />} />
          <Route path={'/devis/surface'} element={<Surface />} />
          <Route path={'/devis/contact'} element={<Contact />} />





          <Route path='*' element={ <PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
