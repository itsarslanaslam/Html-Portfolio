import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import React from 'react';
import Card from "./Card";

 

function App() {
 
  return (
    <>
    <Navbar/> 
   
    <div className="cards">
    
    <Footer/>
    <Card title="card 1" description = "card 1 desc" />
    <Card title="card 2" description = "card 2 desc" />
    <Card title="card 3" description = "card 3 desc" />
    <Card title="card 4" description = "card 4 desc" />
    </div>
    </>
  )
}

export default App
