import React from 'react';
import './App.css';
import UpdateButton from "./containers/UpdateHits";
import TotalHits from "./components/TotalHits";

const App = () => (
    <div className="App">
        <UpdateButton/>
        <TotalHits/>
    </div>
);

export default App;