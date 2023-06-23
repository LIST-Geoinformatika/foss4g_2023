import React from "react";
import "./App.css";
import MapComponent from "./MapComponent";
import Header from "./Header";

function App() {
    return (
        <div className="flex flex-col h-[100svh] w-full">
            <Header />
            <MapComponent />
        </div>
    );
}

export default App;
