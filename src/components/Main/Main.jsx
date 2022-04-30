import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import LandingsForm from './LandingsForm/LandingsForm';
import LandingsList from './LandingsList/LandingsList';
import NeasForm from './NeasForm/NeasForm';
import NeasList from './NeasList/NeasList';


function Main(props) {

  return <div>
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<LandingsForm />} path="/createlanding"></Route>
      <Route element={<LandingsList />} path="/landings"></Route>
      <Route element={<NeasForm />} path="/createneas"></Route>
      <Route element={<NeasList />} path="/neas"></Route>
    </Routes>
  </div>;
}


export default Main;
