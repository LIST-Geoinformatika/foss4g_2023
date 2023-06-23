import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import React, { useEffect } from "react";
import WKT from "ol/format/WKT.js";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

const wkt =
    "POLYGON((16.0265868748962 45.7218661257068,16.0255622895729 45.7210734835398,16.0257561300394 45.7204548281814,16.0259361247584 45.7198941658458,16.0253961406015 45.719391498279,16.025700747049 45.7190821621441,16.0270299388198 45.7181058087354,16.0291068009616 45.7168104224353,16.0301175405372 45.7174291181457,16.0312252003462 45.7182411458699,16.0311836631034 45.7185988210048,16.0300621575468 45.7194688320452,16.0279022209193 45.7210638171025,16.0269745558293 45.7216438003801,16.0265868748962 45.7218661257068))";

const AreaPolygon = ({ map }) => {
    useEffect(() => {
        if (!map) return;

        const format = new WKT();

        const newFeature = format.readFeature(wkt);
        newFeature.getGeometry().transform("EPSG:4326", "EPSG:3857");

        const vectorSource = new VectorSource({
            features: [newFeature],
        });

        const areaLayer = new VectorLayer({
            source: vectorSource,
            zIndex: 80,
            properties: {
                altitudeMode: "clampToGround",
            },
            style: new Style({
                fill: new Fill({
                    color: "#FFBD3388",
                }),
                stroke: new Stroke({
                    color: "blue",
                    width: 3,
                }),
            }),
        });

        map.addLayer(areaLayer);

        return () => {
            vectorSource.clear();
            map.removeLayer(areaLayer);
        };
    }, [map]);

    return null;
};

export default AreaPolygon;
