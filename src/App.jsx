import React, { useState } from "react";
import "./App.css";
import MapComponent from "./MapComponent";
import Header from "./Header";

function App() {
    const [active3d, setActive3d] = useState(false);
    const [measureActive, setMeasureActive] = useState(false);

    return (
        <div className="flex flex-col h-[100svh] w-full">
            <Header
                setActive3d={setActive3d}
                setMeasureActive={setMeasureActive}
            />
            <MapComponent
                active3d={active3d}
                measureActive={measureActive}
            />
        </div>
    );
}

export default App;
