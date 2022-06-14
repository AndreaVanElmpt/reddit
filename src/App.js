import React from "react";
import Header from "./components/header/Header";
import {
    Routes,
    Route,
} from 'react-router-dom'
import './App.css';
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";


function App() {
  return (
    <>
      <Header/>
      <div> Altijd leuk als het werkt</div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subreddit" element={<Subreddit />} />
        </Routes>
    </>
  );
}

export default App;
