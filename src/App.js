import React, { useState } from "react";
import MainForm from "./components/MainForm";
import Nav from "./components/Nav";
import Swap from "./components/Swap";
import FlashGrid from "./components/FlashGrid";
import {Route,Routes} from 'react-router-dom';
import FlashDetails from "./components/FlashDetails";
import { useSelector } from "react-redux";


function App() {
  let mainobj=useSelector((state)=>state.mainReducer)
  const[cardDetails,setCardDetails]=useState();
  function newCard(index){let secondObj= mainobj.find((i,I)=>I===index);setCardDetails(secondObj)}

  return (
    <div className="flex flex-col items-center ">
      <Nav />
      <div className="app" >
      <Swap/>
      <Routes>
        <Route exact path="/" element={<><MainForm/></>} />
        <Route path='/my_flashcard' element={<FlashGrid newCard={newCard}/>} />
        <Route path='/flash_details' element={<FlashDetails cardDetails={cardDetails} />}/>
      </Routes>
      </div>
    </div>
  )}

export default App;
