import { Overlay } from "ol";
import React, { useEffect, useRef } from "react";
import { getLength } from "ol/sphere";

export const formatLength = (line) => {
    const length = getLength(line);
    let output;
    if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + " " + "km";
    } else {
        output = Math.round(length * 100) / 100 + " " + "m";
    }
    return output;
};

const MeasuredFeature = ({ map, feature }) => {
    const displayRef = useRef(null);

    useEffect(() => {
        if (!map || !displayRef.current) return;

        const drawnOverlay = new Overlay({
            element: displayRef.current,
            offset: [15, 0],
            positioning: "center-left",
        });

        const geom = feature.getGeometry();

        const output = formatLength(geom);
        const tooltipCoord = geom.getLastCoordinate();
        displayRef.current.innerHTML = output || "";
        drawnOverlay.setPosition(tooltipCoord);

        map.addOverlay(drawnOverlay);

        return () => {
            map?.removeOverlay(drawnOverlay);
        };
    }, []);

    return (
        <div
            ref={displayRef}
            className="rounded-md border-0 bg-neutral-100/50 px-2 text-neutral-600"
        ></div>
    );
};

export default MeasuredFeature;
