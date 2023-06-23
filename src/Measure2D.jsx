import { LineString, MultiPoint } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from "ol/style";
import React, { useEffect, useRef, useState } from "react";
import Draw from "ol/interaction/Draw";
import MeasuredFeature, { formatLength } from "./MeasuredFeature";
import { Overlay } from "ol";
import { unByKey } from "ol/Observable";

const Measure2D = ({ map }) => {
    const [measuredFeatures, setMeasuredFeatures] = useState([]);

    const helpTooltip = useRef(null);
    const measureTooltip = useRef(null);

    let sketch = null;

    const drawStartHandler = (evt, measureTooltipOverlay, sketch) => {
        if (!measureTooltip.current) return;

        measureTooltip.current.style.display = "block";
        sketch = evt.feature;

        const sketchGeom = sketch?.getGeometry();

        sketchGeom?.on("change", (evt) => sketchGeomChangeHandler(evt, measureTooltipOverlay));
    };

    const sketchGeomChangeHandler = (evt, measureTooltipOverlay) => {
        if (!measureTooltip.current) return;

        const geom = evt.target;
        const output = formatLength(geom);
        const tooltipCoord = geom.getLastCoordinate();

        measureTooltip.current.innerHTML = output || "";
        measureTooltipOverlay.setPosition(tooltipCoord);
    };

    const featureAddHandler = (evt) => {
        const feature = evt.feature;
        if (feature) setMeasuredFeatures((prev) => [...prev, feature]);
    };

    const drawStyle = (feature) => {
        const styles = [];
        // Geometry of feature - LineString or Polygon
        const geometry = feature?.getGeometry();
        if (!geometry) return;

        let coordinates = geometry.getCoordinates();
        let lineSegments = geometry;

        // Draw line for each segment and add length
        lineSegments.forEachSegment((a, b) => {
            styles.push(
                new Style({
                    geometry: new LineString([a, b]),
                    stroke: new Stroke({
                        color: "#ffcc33",
                        width: 2,
                        lineCap: "square",
                        lineJoin: "round",
                    }),
                    text: new Text({
                        text: formatLength(new LineString([a, b])),
                        placement: "line",
                        offsetY: 15,
                        font: "14px DM Sans",
                    }),
                })
            );
        });
        // Add point on every coordinate
        styles.push(
            new Style({
                geometry: new MultiPoint(coordinates),
                image: new CircleStyle({
                    radius: 3,
                    fill: new Fill({
                        color: "#ff0000",
                    }),
                    stroke: new Stroke({
                        color: "#ff0000",
                    }),
                }),
            })
        );

        return styles;
    };

    useEffect(() => {
        const source = new VectorSource({});

        // On completed feature
        const sourceAddEvent = source.on("addfeature", featureAddHandler);

        const interactionType = "LineString";

        const layer = new VectorLayer({
            source: source,
            style: drawStyle, // TypeScript not taking function as argument - wrong
            properties: {
                name: "measure-layer",
            },
            className: "z-90",
        });

        if (!interactionType || !map || !measureTooltip.current) return;

        map.addLayer(layer);

        const draw = new Draw({
            source: source,
            type: interactionType,
            stopClick: true,
            style: new Style({
                fill: new Fill({
                    color: "rgba(255, 255, 255, 0.2)",
                }),
                stroke: new Stroke({
                    color: "rgba(0, 0, 0, 0.5)",
                    lineDash: [10, 10],
                    width: 2,
                }),
                image: new CircleStyle({
                    radius: 5,
                    stroke: new Stroke({
                        color: "rgba(0, 0, 0, 0.2)",
                    }),
                    fill: new Fill({
                        color: "rgba(255, 255, 255, 0.2)",
                    }),
                }),
            }),
        });

        map.addInteraction(draw);

        // Measure tooltip overlay
        const measureTooltipOverlay = new Overlay({
            element: measureTooltip.current,
            offset: [0, -15],
            positioning: "bottom-center",
            stopEvent: false,
            insertFirst: false,
            id: "measureTooltip",
        });

        map.addOverlay(measureTooltipOverlay);

        const drawStart = draw.on("drawstart", (evt) => drawStartHandler(evt, measureTooltipOverlay, sketch));

        const drawEnd = draw.on("drawend", () => {
            if (!measureTooltip.current) return;
            measureTooltip.current.style.display = "none";

            // unset sketch
            sketch = null;
        });

        return () => {
            map.removeInteraction(draw);
            map.removeLayer(layer);
            map.removeOverlay(measureTooltipOverlay);

            //Source remove event
            unByKey(sourceAddEvent);

            // Map remove event
            unByKey(drawStart);
            unByKey(drawEnd);
        };
    }, []);

    return (
        <div>
            <div
                id="helpTooltip"
                ref={helpTooltip}
                className="rounded-md border-0 bg-neutral-100/50 px-2 text-neutral-600 "
            ></div>
            <div
                id="measureTooltip"
                ref={measureTooltip}
                className="rounded-md border-0 bg-neutral-100/50 px-2 text-neutral-600 "
            ></div>
            {/* Drawn features overlay */}
            {measuredFeatures.map((feature, idx) => (
                <MeasuredFeature
                    key={`measured-feature-${idx}`}
                    feature={feature}
                />
            ))}
        </div>
    );
};

export default Measure2D;
