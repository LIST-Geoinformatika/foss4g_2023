import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM, TileWMS } from "ol/source";
import { fromLonLat, transformExtent } from "ol/proj";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
window.Cesium = Cesium;
import OLCesium from "olcs/OLCesium.js";
import AreaPolygon from "./AreaPolygon";
import Measure3D from "./Measure3D";
import Measure2D from "./Measure2D";

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

const MapComponent = ({ active3d, measureActive }) => {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();

    // OLCS 3D states
    const [olcs3d, setOlcs3d] = useState();

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

    // Adding OLCS to map
    useEffect(() => {
        if (!map) return;

        const ol3d = new OLCesium({
            map: map,
        });
        setOlcs3d(ol3d);
        const scene = ol3d.getCesiumScene();

        scene.terrainProvider = Cesium.createWorldTerrain();

        const tileSet3DSource = new Cesium.Cesium3DTileset({
            url: "https://tiling.listlabs.net/3d-tiles/cesium/e0dfcdb6-d400-4d02-b9fe-962e8eda5095/tiles/tileset.json",
            maximumScreenSpaceError: 16,
            skipLevelOfDetail: true,
            baseScreenSpaceError: 1024,
        });

        const tileset = scene.primitives.add(tileSet3DSource);
        tileset.pointCloudShading.maximumAttenuation = undefined;
        tileset.pointCloudShading.baseResolution = undefined;
        tileset.pointCloudShading.geometricErrorScale = 1;
        tileset.pointCloudShading.attenuation = true;
        tileset.pointCloudShading.eyeDomeLighting = true;
    }, [map]);

    useEffect(() => {
        if (!olcs3d) return;

        olcs3d.setEnabled(active3d);
    }, [active3d, olcs3d]);

    return (
        <>
            <div
                id="map"
                ref={mapElement}
                className="h-full w-full"
            ></div>
            <AreaPolygon map={map} />
            <Measure3D
                olcs3d={olcs3d}
                measureActive={measureActive}
            />
            {measureActive && <Measure2D map={map} />}
        </>
    );
};

export default MapComponent;
