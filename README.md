# FOSS4G_2023

2D/3D WebGIS platform using React, OpenLayers and Cesium

## Workshop intro

As the most used front-end development library today, React.js is probably the best foundation when it comes to building WebGIS applications. The combination with a very robust and dynamic map library like OpenLayers makes it the perfect tool for the job. Transformation of spatial data from 2D to 3D view is achievable with Cesium.js. Throughout the duration of this workshop, participants will learn how to setup their own Web GISapplication using Vite, React.js, OpenLayers and Cesium libraries and the Tailwind framework.

Participants will learn how to:

-   Set up a basic React app,

-   Integrate OpenLayers with React,

-   Integrate Cesium.js with React and OpenLayers,

-   Add and control base maps displayed in 2D and 3D,

-   Load and display vector data and point clouds on the map,

-   Transition from 2D to 3D view and

-   Implement measurement tools in 2D and 3D.

Don't worry if you're not skilled with React or JavaScript, this workshop aims to cover all the basic steps to get you up and running. The workshop is divided into several steps - 1, 2, 3 and 4.

It is intended and recommended to use the Visual Studio Code editor, but we see no reason not to use another option if you are used to it. Let's start installing the necessary packages!

## Step 1

### Node.js and npm

To successfully execute our code, we will first install the open source Node.js cross-platform server environment and the npm package manager for the JavaScript programming language.

We can use a Node installer to install both Node.js and npm on our system.

-   Node.js installer -> <https://nodejs.org/en/download> (OS X or Windows users)

-   NodeSource installer -> <https://github.com/nodesource/distributions> (Linux users)

Be sure to install the version labeled LTS. Other versions have not yet been tested with npm. If you need help with installation, the following links provide detailed instructions for each operating system:

Windows: <https://www.geeksforgeeks.org/installation-of-node-js-on-windows/>

Linux: <https://www.geeksforgeeks.org/installation-of-node-js-on-linux/>

MacOS: <https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/>

### Installing React.js with Vite

Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

-   A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

-   A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box but is also highly extensible via its Plugin API and JavaScript API with full typing support.

The supported template presets Vite offers are:

| JavaScript | TypeScript |
| ---------- | ---------- |
| Vanilla    | Vanilla-ts |
| Vue        | Vue-ts     |
| React      | React-ts   |
| Preact     | Preact-ts  |
| Lit        | Lit-ts     |
| Svelte     | Svelte-ts  |

Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

React is an open-source JavaScript library for building user interfaces. It was developed by Facebook and is widely used in web development. React follows a component-based architecture, which allows developers to build reusable UI components that can be composed together to create complex user interfaces.

Key features of React for web GIS applications include:

1.  Component-based structure for GIS components: React's component-based architecture is well-suited for creating GIS-specific components such as maps, layers, markers, pop-ups, and other interactive elements. These components can encapsulate complex GIS functionality, making it easier to reuse and maintain code across different parts of your application.

2.  Efficient rendering with the Virtual DOM: React utilizes a virtual representation of the DOM called the Virtual DOM. This lightweight copy of the actual DOM allows React to efficiently update and render only the necessary GIS components when the application state changes. This performance optimization ensures smooth and responsive mapping experiences.

3.  Declarative syntax for mapping interactions: React's declarative syntax makes it straightforward to describe the desired interactions and behavior of GIS components. You can define how the map responds to user input, such as panning, zooming, or selecting features, by specifying the desired state. React takes care of updating the UI and synchronizing it with the underlying mapping library.

4.  Integration with OpenLayers and Cesium: React integrates seamlessly with popular mapping libraries like OpenLayers and Cesium. You can leverage the power and capabilities of these libraries by combining them with React's component-driven approach. React acts as a bridge between the mapping library and your UI components, facilitating a smooth and efficient development workflow.

5.  Rich ecosystem and community support: React has a vibrant ecosystem with a wide range of GIS-related libraries and tools. You can find React components, wrappers, and plugins specifically built for working with geospatial data and mapping libraries. The React community is active, providing resources, documentation, and sharing best practices for building web GIS applications.

Whether you are building mapping dashboards, geospatial data visualization tools, or location-based applications, React empowers you to create compelling and responsive web GIS experiences.

By combining React with tools like Vite, which provides fast development server and build tooling, developers can create efficient and modern web applications quickly.

In order to create our new React project with Vite, let's create a folder in the desired location on the computer in which we will install the necessary packages and create our application. Let's open Visual Studio Code and its Terminal.

Navigate to the directory where you want to create your React project using the cd command. For example:

-   `cd path/to/project/directory`

Run the following command to create a new React project with Vite:

-   `npm create vite@latest`

Then follow the prompts!

If you have successfully followed the installation steps in the terminal, using the command

-   `npm run dev`

our new React application will run on the local server.

If the setup of the new React application is successful, we can add the Tailwind CSS framework. Also, if you have problems with the installation or want to learn more, you can do so at <https://vitejs.dev/guide/> .

### Adding Tailwind CSS Framework to our React App

Tailwind CSS is a highly customizable, utility-first CSS framework that enables developers to rapidly build modern and responsive user interfaces. It provides a comprehensive set of pre-designed utility classes that can be easily applied to HTML elements, allowing for efficient styling and layout creation.

When it comes to web GIS applications, Tailwind CSS offers several benefits:

1.  Rapid prototyping: Tailwind CSS's utility classes allow for quick and intuitive prototyping of GIS user interfaces. With a wide range of responsive layout options, typography styles, colors, and spacing utilities, developers can easily create visually appealing and functional GIS interfaces in less time.

2.  Customizability: Tailwind CSS provides a highly customizable approach to styling. Developers can tailor the framework to match the specific branding and design requirements of their web GIS applications. By editing the tailwind.config.js file, it's possible to add custom colors, define breakpoints, and extend or override existing utility classes.

3.  Consistent design language: Web GIS applications often involve multiple components, maps, and data visualizations. Tailwind CSS's utility classes ensure a consistent design language throughout the application. This uniformity enhances the user experience and makes it easier for developers to maintain a coherent visual style across various GIS elements.

4.  Responsive design: Web GIS applications need to adapt to different screen sizes and devices. Tailwind CSS provides responsive utilities that allow for straightforward handling of different breakpoints and screen orientations. With responsive classes like sm, md, lg, developers can easily create layouts that respond to different screen sizes, ensuring a seamless experience across devices.

5.  Efficiency and performance: Tailwind CSS follows a utility-first approach, which means only the required styles are included in the final CSS output. This approach eliminates unnecessary bloat and reduces the overall file size of the CSS, resulting in faster load times and improved performance for web GIS applications.

By leveraging the power and flexibility of Tailwind CSS, developers can streamline the UI development process, create visually consistent GIS interfaces, and enhance the responsiveness and performance of their web GIS applications.

Installing Tailwind, like all packages so far, is quite straightforward. You can do this in the following few steps:

**Step 1:** Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:

-   `npm install -D tailwindcss  postcss  autoprefixer`

-   `npx  tailwindcss  init  --p`

**Step 2:** Add the paths to all of your template files in your tailwind.config.js file:

```
/** @type {import('tailwindcss').Config} */ 
export default { 
    content: [  
        "./index.html",  
        "./src/**/*.{js,ts,jsx,tsx}", 
    ], 
    theme: { 
    extend: {}, 
 },  
    plugins: [], 
 }`
```

**Step 3:** Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file:

```
@tailwind base;  
@tailwind components;  
@tailwind utilities;

```

**Step 4:** Run your build process with npm run dev in Terminal.
**Step 5** Now you can start using Tailwind’s utility classes to style your content!

If you have problems with the installation, you can find more information here: <https://tailwindcss.com/docs/guides/vite>.

### Open Layers installation 

OpenLayers is a powerful open-source JavaScript library that provides a comprehensive set of tools for building interactive and dynamic maps in web GIS applications. It offers a wide range of features, including map display, interaction handling, data visualization, and geospatial analysis capabilities.

Key features of OpenLayers for web GIS applications include:

1.  Map Display: OpenLayers enables the creation of map displays with support for various base maps, such as OpenStreetMap, Google Maps, Bing Maps, and custom tile layers. It allows developers to add and customize layers, including vector data, raster images, and tile sets, providing a flexible environment for visualizing geospatial information.

2.  Interactivity: OpenLayers facilitates user interaction with maps by supporting various navigation controls, such as panning, zooming, and rotation. It also provides functionality for handling user input, including mouse events, touch gestures, and keyboard interactions. This interactivity allows users to explore and interact with map features and data.

3.  Data Visualization: OpenLayers offers rich capabilities for visualizing geospatial data on maps. It supports rendering of point, line, and polygon features with customizable styles and symbology. Additionally, it provides options for labeling features, applying thematic colors, and displaying pop-ups or tooltips for data exploration.

4.  Geospatial Analysis: OpenLayers includes tools for performing geospatial analysis tasks directly in the browser. It supports spatial operations like buffering, intersection, and spatial queries, enabling developers to perform on-the-fly data analysis and present results to users in real-time.

5.  Integration with other libraries: OpenLayers can be easily integrated with other JavaScript libraries and frameworks, such as React and Cesium. This flexibility allows developers to combine the strengths of different tools and create comprehensive web GIS applications that incorporate mapping, data visualization, and 3D capabilities.

6.  Cross-browser and cross-platform compatibility: OpenLayers is designed to work seamlessly across different browsers and platforms. It supports major web browsers, including Chrome, Firefox, Safari, and Edge, and is compatible with desktop and mobile devices. This compatibility ensures that web GIS applications built with OpenLayers can reach a wide range of users.

To add OpenLayers to our project, please add OpenLayers npm package to the project with

-   `Npm install ol`

Now that we have installed all the necessary packages, we are ready for the next step in which we will create the map and add the header component.

More information about the OpenLayers library and its use with React can be found here: <https://medium.com/swlh/how-to-incorporate-openlayers-maps-into-react-65b411985744>.

## Step 2

In addition to the basic react components that are created by the initialization of the library itself, we will create Header and MapComponent components.

### Header component

In order to make it easier to navigate the functionalities that we will deal with today, let's create a header component:

```
import React from "react";
import Logo from "./assets/Logo";

const Header = () => {
    return (
        <div className="w-full bg-neutral-100 h-14 px-4 py-2 flex justify-between border-b-2 border-neutral-400">
            <Logo />
            <div className="flex gap-5">
                <button className="rounded-full w-9 h-9 bg-cyan-500 text-white hover:bg-cyan-400">3D</button>
                <button className="rounded-full w-9 h-9 bg-cyan-500 text-white hover:bg-cyan-400">M</button>
            </div>
        </div>
    );
};

export default Header;
```

Header.jsx file contains the definition of the Header component, which will represent the header section of our application. We created a functional component using an arrow function that will return JSX that represents the structure of the header section. Inside the parent div we have two child elements where we can put the necessary buttons and logo for our app. Using Tailwind CSS, we will style our header and make it more user-friendly. Finally, we will export the Header component as the default export of this file, making it available for other parts of our application to use.

### Map component

We will create a MapComponent.jsx file to create the map and import necessary dependencies from ol and React library:

```
import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM, TileWMS } from "ol/source";
import { fromLonLat, transformExtent } from "ol/proj";
```

After we have loaded all the necessary modules, we can create the initial parameters for the map view:

```
const mapViewParams = {
    projection: "EPSG:3857",
    center: fromLonLat([16.450145, 44.515856]),
    zoom: 7,
    maxZoom: 18,
    minZoom: 3,
    extent: transformExtent([15.6, 45.6, 16.3, 45.9], "EPSG:4326", "EPSG:3857"),
};
```

-   projection specifies the map projection as "EPSG:3857", which is the Web Mercator projection used by many web mapping libraries,
-   center specifies the center of the map view using longitude and latitude coordinates transformed using fromLonLat function,
-   zoom sets the initial zoom level of the map,
-   maxZoom and minZoom define the maximum and minimum allowed zoom levels,
-   extent sets the map's extent using a bounding box defined in the EPSG:4326 projection and transformed to EPSG:3857 using the transformExtent function.

Let's create a new instance of the OpenLayers View class using the object created earlier:

```
const mapView = new View({
    ...mapViewParams,
    smoothExtentConstraint: true,
});
```

-   ...mapViewParams spreads the properties from mapViewParams into the View constructor, setting up the initial view configuration,
-   smoothExtentConstraint enables smooth extent constraint, ensuring that the map does not display areas outside the specified extent.

Now we can create a MapComponent functional component:

```
const MapComponent = () => {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
```

-   map and setMap are created using the useState hook. map represents the map instance, and setMap is used to update its value,
-   mapElement and mapRef are created using the useRef hook. mapElement is used to reference the div element that will contain the map, while mapRef stores the map instance created with OpenLayers.

```
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
        });
        if (mapRef.current) setMap(mapRef.current);
        return () => {};
    }, [map, mapElement]);
```

-   This useEffect hook is responsible for creating and initializing the map when the component mounts or when the map or mapElement dependencies change,
-   If mapRef.current exists or mapElement.current is falsy, the effect is skipped,
-   An OSM source is created using new OSM(),
-   The Map instance is created using new Map and assigned to mapRef.current,
-   The map is configured with a target element (mapElement.current), an array of layers (including an OSM tile layer and a WMS tile layer), and the view (mapView),
-   If mapRef.current is truthy (i.e., the map instance is successfully created), setMap is called to update the map state,
-   An empty cleanup function is returned to ensure any necessary cleanup is performed.

```
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
```

-   This renders the JSX markup for the MapComponent component.
-   The div element represents the container for the map and has an id of "map".
-   The ref attribute is set to mapElement to reference this div element.
-   The className is set to "h-full w-full" to apply CSS classes for styling.

Finally, let's export the component as the default export of the module, making it available for import and use in other files.

`export default MapComponent;`

## Step 3

### Cesium and OLCesium setup

To quickly start using Cesium with React and OpenLayers, it's easiest to use OL-Cesium integration library. Ol-Cesium is a JavaScript library that integrates OpenLayers and Cesium, combining their mapping capabilities to create interactive and immersive geospatial applications. It seamlessly overlays OpenLayers' 2D map layers onto the Cesium 3D globe, enabling users to switch between 2D and 3D views effortlessly. The integration empowers developers to incorporate satellite imagery, terrain data, and 3D models alongside traditional map layers, offering a more dynamic and immersive exploration experience. With support for interactivity, data visualization, and advanced features like animations and geospatial analysis, Ol-Cesium allows developers to build sophisticated applications across domains such as urban planning, navigation, etc. By leveraging the strengths of both libraries, Ol-Cesium provides a powerful foundation for creating compelling geospatial applications that seamlessly blend 2D and 3D visualizations.

Installing Cesium with React can be somewhat complex, but Vite plugins help to get you going in no time!

First, install Cesium as a dependency by running the command `npm install cesium` or `yarn add cesium`. Then, install the Vite Cesium plugin by running the command `npm install vite-plugin-cesium` or `yarn add vite-plugin-cesium`. Finally, configure your Vite project by updating the Vite configuration file (vite.config.js) to include the Cesium plugin as a plugin option, ensuring that Cesium's assets are properly handled and loaded in your application. Simply import cesium from "vite-plugin-cesium" and add it to array of plugins for Vite to load. Note we're already using react plugin for Vite, so append cesium after that!

https://github.com/nshen/vite-plugin-cesium

```

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), cesium()],

});

```

And that would be it if you were only using Cesium in your application. You can simply add OL-Cesium as a separate dependency by running the command "npm install olcs" or "yarn add olcs" in your project directory. OL-Cesium requires you to do some extra steps for a full setup. It is important to note that Cesium is accessed through the global `window.Cesium` object while OpenLayers is accessed through ES6 imports. This is mostly due to legacy reasons, so we must expose Cesium through `window` variable to use this library.

On top of your JSX files where you would usually import your components/libraries/etc., import Cesium, Cesium widgets and OLCesium like this:

```
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
window.Cesium = Cesium; //Declare Cesium in global window object
import OLCesium from "olcs/OLCesium.js";
```

Everything is now configured to use the full potential of Cesium and OpenLayers in your web apps.

If your app is meant to be used both in 2D and 3D mode, it is best to initially load your map in 2D, initialize cesium (3D) right away, and toggle between modes using a button and calling `setEnabled()` method on declared OLCesium 3d handler.

First, we will connect to a 3D button defined in `<Header />` component so we can toggle between 2D and 3D. It would be best to connect to this button through React Context API or state management library of your choice. Since this is only a demo app, and workshop time is limited, we will implement useState in our `<App />` component, since it is a parent component both of `<MapComponent />` and `<Header />`.

```
...
const [active3d, setActive3d] = useState(false);
return (
    <div className="flex flex-col h-[100svh] w-full">
        <Header setActive3d={setActive3d} />
        <MapComponent active3d={active3d} />
    </div>
...

```

As you can see, we pass useState value and “setter” function to our child components as props.

In Header component we can add onClick handler to our button that will simply toggle between true and false values (negating previous value):

```
<button onClick={() => setActive3d((prev) => !prev)}
className="rounded-full w-9 h-9 bg-cyan-500 text-white hover:bg-cyan-400"
>

```

Remember to destructure props (setActive3d) in react function.

` const Header = ({ setActive3d }) => { ...`

Do the similar destructuring in MapComponent, this time only value from useState is needed!

For better understanding of what goes on in OL-Cesium and toggling between modes we will define two useEffect functions. First will initialize 3d map from 2d map and save it in a state so we can access it, while second useEffect will toggle between modes.

First useEffect takes map as its only dependency. This is because we need to wait for the 2D map to load before we can implement 3D view. If there is no map instance saved, we need to skip rest, so add an if statement on top of function. Now it’s time to instantiate a new OLCesium object and give it a reference to our 2D map.

```
const ol3d = new OLCesium({
    map: map,
});

```

Same as with map, we can save this object to a React state for later use and manipulation. Save it to `olcs3d` using setState function.

At this point we have a functional 3d viewer in our application. Although, you can’t access it because our on/off state for toggling between 2D and 3D is not yet connected, so let's do this part first.

This is where our second useEffect comes into play. Define a new useEffect just below the first one which will depend on two variables: `active3d` and `olcs3d` (2D/3D state and our OLCS instance). This useEffect is very simple, it reacts to a toggling action and enables/disables 3D in our map:

```
useEffect(() => {
    if (!olcs3d) return;
olcs3d.setEnabled(active3d);

}, [active3d, olcs3d]);

```

Now you can open your app and toggle between 2D, and 3D view. Unfortunately, at this point it’s not really appealing since it just gives you the option to pan/zoom in 3D space. To make it slightly better, we can add default Cesium terrain that is provided publicly from their Ion cloud even without sign-up for preview/development purposes. In the first useEffect, get a scene from ol3d instance and save it to a variable. Now set `terrainProvider` of this variable to a value of Cesium created world terrain.

```
const scene = ol3d.getCesiumScene();
scene.terrainProvider = Cesium.createWorldTerrain();

```

If you open your browser, you will now see that the base map is projected on a provided terrain in 3D space.

### Adding 3D tiles to our map

Cesium supports various types of input data, enabling developers to create rich and interactive geospatial visualizations. One of the primary data formats is 3D Tiles, a hierarchical data structure optimized for streaming and rendering massive 3D datasets. With 3D Tiles, complex 3D models, buildings, terrain, and point clouds can be efficiently streamed and visualized in Cesium (and OL-Cesium). Additionally, Cesium supports vector data, allowing the rendering of vector layers such as points, lines, and polygons, often sourced from popular formats like GeoJSON or Esri Shapefiles. These vector layers can be styled and interacted with to provide detailed and dynamic geospatial representations. Furthermore, Cesium can integrate imagery data, such as satellite imagery or aerial photos, providing high-resolution base maps for geospatial contexts.

Since 3D Tiles are one the most popular forms of loading data into Cesium viewer, we will import our dataset right on the map and display it in 3D. For this workshop you will be using a tileset provided by the authors. This tileset was generated from a point cloud survey of a small gravel quarry lake near Zagreb. Usually, you would upload your data to a Cesium Ion cloud, process it, and then load it right into view using your Cesium Ion token and asset id. In this example, we show that it's possible to use open-source software to achieve the same result. The whole process is out of scope for this workshop, but working tileset is served from our own server at: <https://tiling.listlabs.net/3d-tiles/cesium/e0dfcdb6-d400-4d02-b9fe-962e8eda5095/tiles/tileset.json>

In our first useEffect, we can load our 3DTileset by instantiating a new object from Cesium3DTileset class with few parameters. These parameters are further explained below.

```
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

```

**url**: The URL of the Cesium 3D Tiles tileset. It specifies the location of the tileset's metadata file (tileset.json) that describes the structure and content of the 3D tiles.

**maximumScreenSpaceError**: This parameter determines the maximum allowable screen space error for rendering the 3D tiles. It controls the level of detail displayed based on the viewer's distance from the tiles. A lower value results in more detailed rendering but may impact performance.

**skipLevelOfDetail**: When set to true, it allows skipping levels of detail based on screen space error. This can improve performance by reducing the number of tiles loaded and rendered at different distances.

**baseScreenSpaceError**: This sets the base screen space error for the 3D tiles. It defines the desired level of detail when the viewer is at the default height (eye level) above the tiles. A lower value results in higher detail at the default height.

The following parameters are specific to the tileset.pointCloudShading object, which provides control over the visual appearance of the point cloud:

**maximumAttenuation**: This parameter sets the maximum attenuation value for point cloud shading. It controls how much the point cloud appearance fades based on distance from the viewer. When set to undefined, the maximum attenuation is determined automatically.

**baseResolution**: This parameter defines the base resolution for point cloud shading. It specifies the desired level of detail when the viewer is at the default height. When set to undefined, the base resolution is determined automatically.

**geometricErrorScale**: It scales the geometric error of the point cloud, influencing the level of detail displayed. A value of 1 indicates no scaling.

**attenuation**: When set to true, enables attenuation for point cloud shading, causing the points to fade based on distance from the viewer.

**eyeDomeLighting**: This parameter enables eye-dome lighting for point cloud shading. It enhances the visual appearance of the point cloud by simulating global illumination effects.

At this point you can see the point cloud loaded on the map in 3D view.

### Working with vector layers

In OpenLayers, vector layers are a fundamental component for rendering and interacting with vector-based geospatial data. Vector layers in OpenLayers can encompass points, lines, and polygons, allowing developers to display and style complex spatial features with customizable attributes such as color, opacity, and size. These layers can be sourced from various formats like GeoJSON, KML, or GPX, etc. A cool feature of OL-Cesium is that you can use vector layers loaded in 2D view on your 3D view with minimal effort.

First, let’s create a new React component as a child of MapComponent and give it a name of “AreaPolygon” as it will display our area of interest (around our 3D tileset).

For simplicity, we will load this polygon from hard-coded WKT representation, but you would preferably load this data from some endpoint. Define wkt variable as:

```
const wkt =
"POLYGON((16.0265868748962 45.7218661257068,16.0255622895729 45.7210734835398,16.0257561300394 45.7204548281814,16.0259361247584 45.7198941658458,16.0253961406015 45.719391498279,16.025700747049 45.7190821621441,16.0270299388198 45.7181058087354,16.0291068009616 45.7168104224353,16.0301175405372 45.7174291181457,16.0312252003462 45.7182411458699,16.0311836631034 45.7185988210048,16.0300621575468 45.7194688320452,16.0279022209193 45.7210638171025,16.0269745558293 45.7216438003801,16.0265868748962 45.7218661257068))";

```

When using OpenLayers in React without some wrapper, it is best to keep logic in useEffect since OL and React have fundamentally different way of interacting with their respective APIs. React follows a declarative approach, where developers describe the desired UI state, and React handles the updates. This abstraction simplifies UI development by removing the need for manual DOM manipulation. In contrast, OpenLayers utilizes an imperative API, enabling developers to directly manipulate the map and its elements. This approach grants fine-grained control over map layers and interactions, allowing precise customization based on specific requirements. While React focuses on abstracting UI complexity, OpenLayers offers direct control for detailed map manipulation and customization. Currently, the preferred way of connecting the two libraries is by embedding most of OL logic into useEffect functions (even though there is a lot more to discuss on this topic, it is good enough for most use cases).

Our new component must have access to a map instance. Therefore, it needs to be passed as a prop from a parent component. Now we can define a useEffect that depends on this map. Inside the function first make sure that map is properly loaded and then define a new WKT format since our data is stored that way. After that, transform the geometry of this data to EPSG:3857 since we will be using this reference system in this workshop (mainly because of measurements in later steps). OL requires us to define two instances. First is a VectorSource that holds the data, and the second one is VectorLayer that is a visual representation on the map itself. Your component should look something like this:

``` 

const  AreaPolygon  = ({ map }) => { 
    useEffect(() => { 
        if (!map) return; 
        const  format  =  new  WKT(); 
        const  newFeature  =  format.readFeature(wkt); 
        newFeature.getGeometry().transform("EPSG:4326", "EPSG:3857"); 
        const  vectorSource  =  new  VectorSource({ 
    features: [newFeature], 
}); 

const  areaLayer  =  new  VectorLayer({ 
source:  vectorSource, 
zIndex:  80, 
style:  new  Style({ 
fill:  new  Fill({ 
color:  "#FFBD3388", 
}), 

stroke:  new  Stroke({ 
color:  "blue", 
width:  3, 
}), 
}), 
});

map.addLayer(areaLayer); 
return () => { 
vectorSource.clear(); 
map.removeLayer(areaLayer); 
}; 

}, [map]); 
return  null; 
}; 

```

You can see that our useEffect has a return function. This function is called on component unmout. Since React will run useEffect each time it needs to rerender component for any reason, it is necessary to clean-up after itself. If we were to skip this step, on each render it would add new VectorSource and VectorLayer. If you open your browser at this point, you will see that in 2D everything is displayed as it should be, but in 3D you can barely see the polygon as it’s rendered below terrain and our tileset. To fix this OL-Cesium can take a custom layer property named `altitudeMode`. If we set this value to `clampToGround`, our vector data will automatically be reprojected to appropriate height.

```
const areaLayer = new VectorLayer({
    source: vectorSource,
    zIndex: 80,
    properties: {
    altitudeMode: "clampToGround",
},

...

```

Now, our 2D and 3D views are finished, and everything is displayed nicely!

## Step 4

In the last step of this workshop we will implement measure tool both in 2D and 3D. This last step is somewhat complex but this workshop is aimed to cover some advanced usecases. We will to cover concepts in this section as best as we can, but always feel free to ask questions either during or after the workshop.

### Distance measure

We will start this part by connecting our second button in the header to the rest of the app. You can create new React state using same logic used for toggling between 2D/3D view. We will call this state `measureActive`. We will pass this state down to `<Header />` and `<MapInstance />`. In header the same logic applies as with previous button. In MapComponent we will first implement 2D measure and activate it using our created state.

Let's create a new React component named `<Measure2d />`. To demonstrate the best practise on using React components with OpenLayers, we will toggle this component using conditional rendering paradigm often used in React. In curly brackets first add a value that can be evaluated as truthy followed by double `&&` sign, and ond the right side the component which needs to be toggled on/off is loaded (in our case `<Measure2d />`). This will add/remove 2D measure from our app depending on the state of `measureActive`. Remember to pass map as a prop to this component!

Inside our new component we need a single useEffect function that can take an empty dependency array (or `map`, but it's almost impossible to trigger measure before map is loaded so it is not neccessary). This function will create a temporary `VectorSource` and `VecotLayer` for storing measured features, as well as add drawing interaction on map.

For styling your layer use this function (explaining it is a bit outside of scope for this workshop, but if you are interested feel free to ask more):

```
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
```

Most often, measure in OL is implemented as `Draw` since it includes drawing on map itself. Style for this interaction is not that important but to make it look nicer, we will add text to each segment of the linestring. Your `Draw` definition should look something like this:

```
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
```

When the interaction is defined it needs to be added to the map, same as we add vector layer or some other functionality in OL.

To make our measuring even better, we will add to empty `<div/>` elements in JSX which will be used to render overlays into. Add refs to those elements using `useRef` hook.

```
const helpTooltip = useRef(null);
const measureTooltip = useRef(null);
```

We need to listen to few draw interaction events to make our measure functional. Most important are `drawstart` and `drawend` let's define a callbac function for the first one since it's a bit more complex:

```
const drawStartHandler = (evt, measureTooltipOverlay, sketch) => {
        if (!measureTooltip.current) return;

        measureTooltip.current.style.display = "block";
        sketch = evt.feature;

        const sketchGeom = sketch?.getGeometry();

        sketchGeom?.on("change", (evt) => sketchGeomChangeHandler(evt, measureTooltipOverlay));
    };
```

The function drawStartHandler is triggered when a draw event starts in OpenLayers. It displays a measure tooltip overlay and attaches a change event listener to the sketch geometry, which calls the sketchGeomChangeHandler function when the geometry changes.

Let's now move our overlay on map as we move our cursor:

```
const sketchGeomChangeHandler = (evt, measureTooltipOverlay) => {
        if (!measureTooltip.current) return;

        const geom = evt.target;
        const output = formatLength(geom);
        const tooltipCoord = geom.getLastCoordinate();

        measureTooltip.current.innerHTML = output || "";
        measureTooltipOverlay.setPosition(tooltipCoord);
    };
```

The sketchGeomChangeHandler function is called when there is a change in the sketch geometry. It retrieves the updated geometry, formats its length using the `formatLength` function, updates the measure tooltip with the formatted output, and positions the measure tooltip overlay at the last coordinate of the geometry.

The `formatLength` helper function takes a line geometry as input and calculates its length. If the length is greater than 100 meters, it returns the length in kilometers rounded to two decimal places with the "km" unit. Otherwise, it returns the length in meters rounded to two decimal places with the "m" unit. You can copy/paste it from here, but let's keep it undefined for now since we are going to define it later in a child component (or even better in a separate file allthogether).

```
import { getLength } from "ol/sphere";

const formatLength = (line) => {
    const length = getLength(line);
    let output;
    if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + " " + "km";
    } else {
        output = Math.round(length * 100) / 100 + " " + "m";
    }
    return output;
};
```

Let's return to our draw events. `drawend` is a bit simpler so we can define it as anonymous function like this:

```
const drawEnd = draw.on("drawend", () => {
            if (!measureTooltip.current) return;
            measureTooltip.current.style.display = "none";

            // unset sketch
            sketch = null;
        });
```

On end of drawing operation, this function hides the measure tooltip by setting its display style to "none" and sets the sketch variable to null.

Now lets go back to our overlays. Since we want to enable more than one measurement on the map, it would be nice to add an overlay on each measured feature. Lets start by adding a state that will hold our features in an array.

```
const [measuredFeatures, setMeasuredFeatures] = useState([]);
```

We will add a new feature to this state each time a new feature is added to our vector source. So let's first add this handler callback:

```
const featureAddHandler = (evt) => {
    const feature = evt.feature;
    if (feature) setMeasuredFeatures((prev) => [...prev, feature]);
};

```

And assign a new event listener to our source:

```
const sourceAddEvent = source.on("addfeature", featureAddHandler);
```

Now, each time a feature is finished measuring (drawing ended), we can add an overlay on the map to label it.

Create a new React component and load it inside `MapInstance` using `.map()` method of drawn features array:

```
{measuredFeatures.map((feature, idx) => (
    <MeasuredFeature
        key={`measured-feature-${idx}`}
        feature={feature}
        map={map}
    />
))}
```

This component is defined as:

```
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

```

Notice we loaded our `formatLength`, here since it is used in this component also. As mentioned previously, you can define it wherever you want!
Detailed explanation of this component is out of scope for this workshop, but in short this React component creates a DOM element (displayRef.current) to display the measured feature. In the useEffect hook, it creates an OpenLayers overlay (drawnOverlay) with the provided element and positions it on the map based on the feature's geometry. The feature's length is calculated using the formatLength function and displayed in the DOM element. The overlay is added to the map, and when the component is unmounted, the overlay is removed from the map. Finally, the component returns a `<div>` element with a reference to displayRef, which will be used to display the measured feature length.

At the end remember to define a cleanup function for the useEffect. Try to do this yourself (or take a peek at the full code in step-4 branch).

Now if everything went well measure should be triggered using a button and you should be able to measure distances on the map! Try to do this in 3D!

## 3D Measure

Measuring in 3D if a far more complex operation than a simple measure in 2D space. This operation has to be implemented using Cesium.js which by itself is a very complex library that would require this workshop to be split acros multiple days. We have provided you with a very simple measure that works in 3D and we will explain some basic concepts on how to do this live during the workshop.

Feel free to save your code localy using git and check out to branch `step-4` and open the file `Measure3D`.

The Measure3D component is a React component that utilizes the Cesium library for 3D visualization and enables distance measurement in a Cesium viewer.

Inside the component, there are several variables declared to manage different elements used for measurement, such as points, polylines, and labels. These elements are added to the Cesium scene to visualize the measured distances.

The addHandler function sets up event handling for measuring distances. It creates point primitives and polyline primitives based on user interactions. It also calculates and displays distance labels for the measured distances.

There are helper functions like getDistanceString, getVerticalDistanceString, and addDistanceLabel that handle the calculations and display of distances and labels. These functions make use of Cesium's geodesic calculations and cartographic conversions to determine distances in meters or kilometers.

The inputAction function is triggered when the user left-clicks on the viewer. It detects the clicked position in the scene, adds points to the primitives collection, and creates polylines based on the added points. It also updates the distance labels accordingly.

The removeMeasure function is responsible for cleaning up the added primitives and labels when the measurement is no longer active or the component is unmounted. It removes the points, polylines, and labels from the Cesium scene.

The useEffect hook is used to add or remove the measurement functionality based on the measureActive prop. When measureActive is true, the addHandler function is called to set up the measurement functionality. When measureActive is false or the component is unmounted, the removeMeasure function is called to clean up the measurement elements.

## Authors

-   [Mirna Bušić](https://www.linkedin.com/in/mirnabusic/)
-   [Luka Stemberga](https://www.linkedin.com/in/luka-stemberga/)

Follow [LIST LABS](https://www.linkedin.com/company/list-labs/mycompany/?viewAsMember=true) on LinkedIn or checkout our [web page](https://www.listlabs.net/en/)!
