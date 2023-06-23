import React, { useEffect } from "react";
import * as Cesium from "cesium";

const Measure3D = ({ olcs3d, measureActive }) => {
    let points, polylines, distanceLabel, verticalLabel, horizontalLabel;
    let point1, point2;
    let point1GeoPosition, point2GeoPosition;

    let handler;

    const addHandler = (viewer) => {
        let scene = viewer.getCesiumScene();

        points = scene.primitives.add(new Cesium.PointPrimitiveCollection());
        polylines = scene.primitives.add(new Cesium.PolylineCollection());
        const LINEPOINTCOLOR = Cesium.Color.fromCssColorString("#ffcc33");
        const ellipsoid = Cesium.Ellipsoid.WGS84;
        const geodesic = new Cesium.EllipsoidGeodesic();

        const label = {
            font: "12px sans-serif",
            showBackground: true,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            pixelOffset: new Cesium.Cartesian2(0, 0),
            eyeOffset: new Cesium.Cartesian3(0, 0, -50),
            fillColor: Cesium.Color.BLACK,
            backgroundColor: Cesium.Color.fromCssColorString("#ffcc33CC"),
        };
        function addDistanceLabel(point1, point2, height) {
            point1.cartographic = ellipsoid.cartesianToCartographic(point1.position);
            point2.cartographic = ellipsoid.cartesianToCartographic(point2.position);
            point1.longitude = parseFloat(Cesium.Math.toDegrees(point1.position.x));
            point1.latitude = parseFloat(Cesium.Math.toDegrees(point1.position.y));
            point2.longitude = parseFloat(Cesium.Math.toDegrees(point2.position.x));
            point2.latitude = parseFloat(Cesium.Math.toDegrees(point2.position.y));

            // Three distances
            const horizontalDistance = getHorizontalDistanceString(point1, point2);
            const trueDistance = getDistanceString(point1, point2);
            const verticalDistance = getVerticalDistanceString();

            // Labels
            label.text = horizontalDistance;
            horizontalLabel = viewer.getDataSourceDisplay().defaultDataSource.entities.add({
                position: getMidpoint(point1, point2, point1GeoPosition.height),
                label: label,
            });
            label.text = trueDistance;
            distanceLabel = viewer.getDataSourceDisplay().defaultDataSource.entities.add({
                position: getMidpoint(point1, point2, height),
                label: label,
            });
            label.text = verticalDistance;
            verticalLabel = viewer.getDataSourceDisplay().defaultDataSource.entities.add({
                position: getMidpoint(point2, point2, height),
                label: label,
            });
        }

        function getHorizontalDistanceString(point1, point2) {
            geodesic.setEndPoints(point1.cartographic, point2.cartographic);
            const meters = geodesic.surfaceDistance.toFixed(2);
            if (meters >= 1000) {
                return (meters / 1000).toFixed(1) + " км";
            }
            return meters + " м";
        }

        function getVerticalDistanceString() {
            const heights = [point1GeoPosition.height, point2GeoPosition.height];
            const meters = Math.max.apply(Math, heights) - Math.min.apply(Math, heights);
            if (meters >= 1000) {
                return (meters / 1000).toFixed(1) + " км";
            }
            return meters.toFixed(2) + " м";
        }

        function getDistanceString(point1, point2) {
            geodesic.setEndPoints(point1.cartographic, point2.cartographic);
            const horizontalMeters = geodesic.surfaceDistance.toFixed(2);
            const heights = [point1GeoPosition.height, point2GeoPosition.height];
            const verticalMeters = Math.max.apply(Math, heights) - Math.min.apply(Math, heights);
            const meters = Math.pow(Math.pow(horizontalMeters, 2) + Math.pow(verticalMeters, 2), 0.5);

            if (meters >= 1000) {
                return (meters / 1000).toFixed(1) + " км";
            }
            return meters.toFixed(2) + " м";
        }

        function getMidpoint(point1, point2, height) {
            const scratch = new Cesium.Cartographic();
            geodesic.setEndPoints(point1.cartographic, point2.cartographic);
            const midpointCartographic = geodesic.interpolateUsingFraction(0.5, scratch);
            return Cesium.Cartesian3.fromRadians(midpointCartographic.longitude, midpointCartographic.latitude, height);
        }

        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

        const inputAction = (click) => {
            if (scene.mode !== Cesium.SceneMode.MORPHING) {
                const pickedObject = scene.pick(click.position);
                if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
                    const cartesian = scene.pickPosition(click.position);
                    // console.log(cartesian);
                    if (Cesium.defined(cartesian)) {
                        if (points.length === 2) {
                            points.removeAll();
                            polylines.removeAll();
                            viewer.getDataSourceDisplay().defaultDataSource.entities.remove(distanceLabel);
                            viewer.getDataSourceDisplay().defaultDataSource.entities.remove(horizontalLabel);
                            viewer.getDataSourceDisplay().defaultDataSource.entities.remove(verticalLabel);
                        }
                        //add first point
                        if (points.length === 0) {
                            point1 = points.add({
                                position: new Cesium.Cartesian3(cartesian.x, cartesian.y, cartesian.z),
                                color: LINEPOINTCOLOR,
                            });
                        } //add second point and lines
                        else if (points.length === 1) {
                            point2 = points.add({
                                position: new Cesium.Cartesian3(cartesian.x, cartesian.y, cartesian.z),
                                color: LINEPOINTCOLOR,
                            });
                            point1GeoPosition = Cesium.Cartographic.fromCartesian(point1.position);
                            point2GeoPosition = Cesium.Cartographic.fromCartesian(point2.position);
                            // eslint-disable-next-line no-undef
                            const point3GeoPosition = Cesium.Cartographic.fromCartesian(
                                new Cesium.Cartesian3(point2.position.x, point2.position.y, point1.position.z)
                            );

                            const pl1Positions = [
                                new Cesium.Cartesian3.fromRadians(
                                    point1GeoPosition.longitude,
                                    point1GeoPosition.latitude,
                                    point1GeoPosition.height
                                ),
                                new Cesium.Cartesian3.fromRadians(
                                    point2GeoPosition.longitude,
                                    point2GeoPosition.latitude,
                                    point2GeoPosition.height
                                ),
                            ];
                            const pl2Positions = [
                                new Cesium.Cartesian3.fromRadians(
                                    point2GeoPosition.longitude,
                                    point2GeoPosition.latitude,
                                    point2GeoPosition.height
                                ),
                                new Cesium.Cartesian3.fromRadians(
                                    point2GeoPosition.longitude,
                                    point2GeoPosition.latitude,
                                    point1GeoPosition.height
                                ),
                            ];
                            const pl3Positions = [
                                new Cesium.Cartesian3.fromRadians(
                                    point1GeoPosition.longitude,
                                    point1GeoPosition.latitude,
                                    point1GeoPosition.height
                                ),
                                new Cesium.Cartesian3.fromRadians(
                                    point2GeoPosition.longitude,
                                    point2GeoPosition.latitude,
                                    point1GeoPosition.height
                                ),
                            ];

                            const polyline1 = polylines.add({
                                show: true,
                                positions: pl1Positions,
                                width: 1,
                                material: new Cesium.Material({
                                    fabric: {
                                        type: "Color",
                                        uniforms: {
                                            color: LINEPOINTCOLOR,
                                        },
                                    },
                                }),
                            });
                            const polyline2 = polylines.add({
                                show: true,
                                positions: pl2Positions,
                                width: 1,
                                material: new Cesium.Material({
                                    fabric: {
                                        type: "PolylineDash",
                                        uniforms: {
                                            color: LINEPOINTCOLOR,
                                        },
                                    },
                                }),
                            });
                            const polyline3 = polylines.add({
                                show: true,
                                positions: pl3Positions,
                                width: 1,
                                material: new Cesium.Material({
                                    fabric: {
                                        type: "PolylineDash",
                                        uniforms: {
                                            color: LINEPOINTCOLOR,
                                        },
                                    },
                                }),
                            });
                            let labelZ;
                            if (point2GeoPosition.height >= point1GeoPosition.height) {
                                labelZ =
                                    point1GeoPosition.height +
                                    (point2GeoPosition.height - point1GeoPosition.height) / 2.0;
                            } else {
                                labelZ =
                                    point2GeoPosition.height +
                                    (point1GeoPosition.height - point2GeoPosition.height) / 2.0;
                            }

                            addDistanceLabel(point1, point2, labelZ);
                        }
                    }
                }
            }
        };

        handler.setInputAction(inputAction, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    };

    function removeMeasure(viewer) {
        let scene = viewer.getCesiumScene();

        scene.primitives.remove(points);
        scene.primitives.remove(polylines);
        viewer.getDataSourceDisplay().defaultDataSource.entities.remove(distanceLabel);
        viewer.getDataSourceDisplay().defaultDataSource.entities.remove(verticalLabel);
        viewer.getDataSourceDisplay().defaultDataSource.entities.remove(horizontalLabel);

        handler?.destroy();
    }

    useEffect(() => {
        if (!olcs3d) return;

        if (measureActive) {
            addHandler(olcs3d);
        }

        return () => {
            removeMeasure(olcs3d);
        };
    }, [measureActive, olcs3d]);

    return null;
};

export default Measure3D;
