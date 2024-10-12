// //Inicio el mapa en la coordenada , con zoom 
// var map = L.map('map').setView([6.268658, -75.565801], 13);

// //Inicio mapa base de un proveedor (OSM)

// var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

// var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
// });

// var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
// }).addTo(map);

// //Información Cartográfica
// var marker = L.marker([6.268658, -75.565801]).addTo(map);
// marker.bindPopup("<b>Mi primer PopUp!</b><br>Yo estoy en Medellín").openPopup();

// var circle = L.circle([6.273052, -75.575199], {
//     color: '#17c0bd',
//     fillColor: '#17c0bd',
//     fillOpacity: 0.5,
//     radius: 1000
// });

// circle.bindPopup("Inserté un Circulo");

// var baseMaps = {
//     "OpenStreetMap": osm,
//     "OpenStreetMap.HOT": osmHOT,
//     "Esri": Esri_WorldImagery
// };

// var overlayMaps = {
//     "marker": marker,
//     "circle": circle,
    

// };

// var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

// var frontera;
// // Cargar el archivo GeoJSON
// fetch('/geoJSON/fronteras_wgs84.geojson')
//     .then(response => response.json())
//     .then(data => {
//         // Añadir el GeoJSON al mapa con estilos y eventos
//         frontera=L.geoJSON(data, {
//             style: estiloBarrio,  // Aplica la función de estilo
//             onEachFeature: function (feature, layer) {
//                 // Añadir popups para los barrios
//                 if (feature.properties && feature.properties.nombre_bar) {
//                     layer.bindPopup("Barrio: <br>" + feature.properties.nombre_bar);
//                 }
//             }
//         });
//                 // Agregar la capa GeoJSON al control de capas
//                 layerControl.addOverlay(frontera, 'Barrios de Medellín');
//     })
//     .catch(err => console.error('Error cargando el archivo GeoJSON: ', err));

// // Función de estilo para personalizar el color de los barrios
// function estiloBarrio(feature) {
//     var baseStyle = {
//         weight: 1,
//         opacity: 1,
//         fillOpacity: 0.7
//     };

//     // Ajustar el color en función del nombre del barrio
//     switch (feature.properties.nombre_bar) {
//         case 'Laureles':   // Cambia 'Laureles' por el nombre real del barrio en el GeoJSON
//             baseStyle.color = '#ff0000';  // Color rojo para el borde
//             baseStyle.fillColor = '#ffb3b3';  // Color de relleno rojo claro
//             break;
//         case 'La Floresta':
//             baseStyle.color = '#00ff00';  // Color verde para el borde
//             baseStyle.fillColor = '#b3ffb3';  // Color de relleno verde claro
//             break;
//         case 'Las Palmas':
//             baseStyle.color = '#0000ff';  // Color azul para el borde
//             baseStyle.fillColor = '#b3b3ff';  // Color de relleno azul claro
//             break;
//         default:
//             baseStyle.color = '#cccccc';  // Color gris para el borde
//             baseStyle.fillColor = '#e6e6e6';  // Color de relleno gris claro
//     }
//     return baseStyle;
// }

// //variable que tiene el estilo
// // var stilo_barrios_med = {
// //     radius: 8,
// //     fillColor: "#17c0bd",
// //     color: "#17c0bd",
// //     weight: 1,
// //     opacity: 1,
// //     fillOpacity: 0.7
// // }

// var customIcon = L.icon({
//     iconUrl: 'icon/camara-de-cctv.png',  // Ruta a la imagen del icono
//     iconSize: [32, 32],               // Tamaño del ícono (ancho, alto)
//     iconAnchor: [16, 32],             // Punto de anclaje del ícono (coordenadas en la imagen)
//     popupAnchor: [0, -32]             // Punto de anclaje del popup relativo al ícono
// });
// var camaras;
// // Cargar el archivo GeoJSON
// fetch('/geoJSON/camaras_wgs84.geojson')
//     .then(response => response.json())
//     .then(data => {
//         // Añadir el GeoJSON al mapa con estilos y eventos
//         frontera=L.geoJSON(data, {
//             pointToLayer: function (feature, latlng) {
//                 // Crear un marcador con el ícono personalizado
//                 return L.marker(latlng, { icon: customIcon });
//             },
//             style: estiloBarrio,  // Aplica la función de estilo
//             onEachFeature: function (feature, layer) {
//                 // Añadir popups para los barrios
//                 if (feature.properties && feature.properties.link_foto) {
//                     layer.bindPopup('<img src="' + feature.properties.link_foto + '" alt="" style="width: 300px;"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reiciendis eius quia vel unde harum cum omnis cumque eaque praesentium consequuntur aperiam, quo facere, ut vitae ex repellendus aut ad?</p>');
//                 }
//             }
//         });
//                 // Agregar la capa GeoJSON al control de capas
//                 layerControl.addOverlay(frontera, 'CCTV Medellín');
//     })
//     .catch(err => console.error('Error cargando el archivo GeoJSON: ', err));

//     // Crear la capa base para el minimapa
// var miniMapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

// // Agregar el minimapa en la esquina inferior izquierda
// var miniMap = new L.Control.MiniMap(miniMapLayer, {
//     toggleDisplay: true,  // Permite ocultar/mostrar el minimapa
//     minimized: false,     // Minimapa visible por defecto
//     position: 'bottomleft' // Posición del minimapa
// }).addTo(map);

// Inicializar el mapa
var map = L.map('map').setView([6.268658, -75.565801], 13);

// Mapas base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var baseMaps = {
    'OpenStreetMap': osm,
    'Esri World Imagery': Esri_WorldImagery
};

// Control de capas para los overlays
var overlayMaps = {};

// Agregar control de capas al mapa
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


//Información Cartográfica
var marker = L.marker([6.268658, -75.565801]).addTo(map);
marker.bindPopup("<b>Mi primer PopUp!</b><br>Yo estoy en Medellín").openPopup();

var circle = L.circle([6.268658, -75.565801], {
    color: '#17c0bd',
    fillColor: '#17c0bd',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

circle.bindPopup("Inserté un Circulo");

// Cargar el archivo GeoJSON
fetch('/geoJSON/camaras_wgs84.geojson')
    .then(response => response.json())
    .then(data => {
        // Añadir el GeoJSON al mapa con estilos y eventos
        frontera=L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                // Crear un marcador con el ícono personalizado
                return L.marker(latlng, { icon: customIcon });
            },
            style: estiloBarrio,  // Aplica la función de estilo
            onEachFeature: function (feature, layer) {
                // Añadir popups para los barrios
                if (feature.properties && feature.properties.link_foto) {
                    layer.bindPopup('<img src="' + feature.properties.link_foto + '" alt="" style="width: 300px;"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reiciendis eius quia vel unde harum cum omnis cumque eaque praesentium consequuntur aperiam, quo facere, ut vitae ex repellendus aut ad?</p>');
                }
            }
        });
                // Agregar la capa GeoJSON al control de capas
                layerControl.addOverlay(frontera, 'CCTV Medellín');
    })
    .catch(err => console.error('Error cargando el archivo GeoJSON: ', err));


// Función para cargar tablas con geometría y agregarlas al control de capas
fetch('/tablasgeo')
  .then(response => response.json())
  .then(tablas => {
    console.log('Tablas con geometría:', tablas); // Verifica la estructura de los datos

    tablas.forEach(tabla => {
      var nombreTabla = tabla.table_name;

      // Crear una capa vacía para esta tabla y añadirla al control de capas
      var layer = L.layerGroup();
      console.log('Añadiendo capa:', nombreTabla); // Verifica que se están añadiendo las capas
      layerControl.addOverlay(layer, nombreTabla); // Añadir al control de capas

      // Escuchar cuando el usuario activa la capa en el control
      map.on('overlayadd', function(event) {
        if (event.name === nombreTabla) {
          console.log('Cargando datos para la tabla:', nombreTabla); // Verifica que la tabla esté siendo seleccionada

          // Cargar los datos de la tabla y mostrarlos en el mapa
          fetch(`/tablas/${nombreTabla}`)
            .then(response => response.json())
            .then(data => {
              console.log('Datos GeoJSON para', nombreTabla, data); // Verifica los datos recibidos
              var geoLayer = L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                  if (feature.properties) {
                    layer.bindPopup(JSON.stringify(feature.properties)); // Personaliza el popup si lo deseas
                  }
                }
              });
              layer.addLayer(geoLayer); // Añadir los datos a la capa
            })
            .catch(err => console.error('Error cargando los datos de la tabla:', err));
        }
      });

      // Escuchar cuando el usuario desactiva la capa en el control
      map.on('overlayremove', function(event) {
        if (event.name === nombreTabla) {
          layer.clearLayers();  // Limpia la capa cuando se desactiva
        }
      });
    });
  })
  .catch(err => console.error('Error obteniendo las tablas con geometría:', err));

// Minimapa
var miniMapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var miniMap = new L.Control.MiniMap(miniMapLayer, {
    toggleDisplay: true,
    minimized: false,
    position: 'bottomleft'
}).addTo(map);