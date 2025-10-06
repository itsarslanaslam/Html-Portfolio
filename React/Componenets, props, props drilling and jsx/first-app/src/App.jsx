import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import React from 'react';
import Card from "./Card";
import File1 from "./components/File1";

 

function App() {
  const name = "Alp"
  return (
    <>
    <Navbar/> 

    <div className="cards">
    <Card title="card 1" description = "card 1 desc" />
    <Card title="card 2" description = "card 2 desc" />
    <Card title="card 3" description = "card 3 desc" />
    <Card title="card 4" description = "card 4 desc" />
    </div>
{/* Props drilling */}
    <File1 name = {name}/>
    <Footer />
    </>
  )
}

export default App
