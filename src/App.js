import React from "react";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Table from "./components/Table"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
