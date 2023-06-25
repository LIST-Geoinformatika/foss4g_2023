import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM, TileWMS } from "ol/source";
import { fromLonLat, transformExtent } from "ol/proj";

const mapViewParams = {
    projection: "EPSG:3857",
    center: fromLonLat([15.9, 45.8]),
    zoom: 7,
    maxZoom: 18,
    minZoom: 3,
    extent: transformExtent([15.6, 45.6, 16.3, 45.9], "EPSG:4326", "EPSG:3857"),
};

const mapView = new View({
    ...mapViewParams,
    smoothExtentConstraint: true,
});

const MapComponent = () => {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();

    useEffect(() => {
        if (mapRef.current || !mapElement.current) return;

        const osmSource = new OSM();

        mapRef.current = new Map({
            target: mapElement.current,
            layers: [
                // OSM
                new TileLayer({
                    source: osmSource,
                    visible: true,
                }),
                //DOF
                new TileLayer({
                    title: "DOF",
                    type: "base",
                    source: new TileWMS({
                        url: "https://geoportal.dgu.hr/services/inspire/orthophoto_2014-2016/wms",
                        params: { LAYERS: "OI.OrthoImagery", TILED: true },
                        crossOrigin: null,
                    }),
                    visible: false,
                }),
            ],
            view: mapView,
            //controls: defaultControls(),
        });

        if (mapRef.current) setMap(mapRef.current);

        return () => {
            //second;
        };
    }, [map, mapElement]);

    return (
        <>
            <div
                id="map"
                ref={mapElement}
                className="h-full w-full"
            ></div>
        </>
    );
};

export default MapComponent;
