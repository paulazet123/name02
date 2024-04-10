var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_powierzchnia_1 = new ol.format.GeoJSON();
var features_powierzchnia_1 = format_powierzchnia_1.readFeatures(json_powierzchnia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_powierzchnia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_powierzchnia_1.addFeatures(features_powierzchnia_1);
var lyr_powierzchnia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_powierzchnia_1, 
                style: style_powierzchnia_1,
                popuplayertitle: "powierzchnia",
                interactive: true,
                title: '<img src="styles/legend/powierzchnia_1.png" /> powierzchnia'
            });
var format_proponowanalokalizacjawiatrakw_2 = new ol.format.GeoJSON();
var features_proponowanalokalizacjawiatrakw_2 = format_proponowanalokalizacjawiatrakw_2.readFeatures(json_proponowanalokalizacjawiatrakw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proponowanalokalizacjawiatrakw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proponowanalokalizacjawiatrakw_2.addFeatures(features_proponowanalokalizacjawiatrakw_2);
var lyr_proponowanalokalizacjawiatrakw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proponowanalokalizacjawiatrakw_2, 
                style: style_proponowanalokalizacjawiatrakw_2,
                popuplayertitle: "proponowana lokalizacja wiatraków",
                interactive: false,
                title: '<img src="styles/legend/proponowanalokalizacjawiatrakw_2.png" /> proponowana lokalizacja wiatraków'
            });
var format_bufor13km_3 = new ol.format.GeoJSON();
var features_bufor13km_3 = format_bufor13km_3.readFeatures(json_bufor13km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufor13km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufor13km_3.addFeatures(features_bufor13km_3);
var lyr_bufor13km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufor13km_3, 
                style: style_bufor13km_3,
                popuplayertitle: "bufor 13 km",
                interactive: false,
                title: '<img src="styles/legend/bufor13km_3.png" /> bufor 13 km'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_powierzchnia_1.setVisible(true);lyr_proponowanalokalizacjawiatrakw_2.setVisible(true);lyr_bufor13km_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_powierzchnia_1,lyr_proponowanalokalizacjawiatrakw_2,lyr_bufor13km_3];
lyr_powierzchnia_1.set('fieldAliases', {'uuid': 'Identyfikator', 'powierzchn': 'powierzchnia ha', });
lyr_proponowanalokalizacjawiatrakw_2.set('fieldAliases', {'id': 'id', });
lyr_bufor13km_3.set('fieldAliases', {'id': 'id', });
lyr_powierzchnia_1.set('fieldImages', {'uuid': 'TextEdit', 'powierzchn': 'TextEdit', });
lyr_proponowanalokalizacjawiatrakw_2.set('fieldImages', {'id': '', });
lyr_bufor13km_3.set('fieldImages', {'id': 'TextEdit', });
lyr_powierzchnia_1.set('fieldLabels', {'uuid': 'no label', 'powierzchn': 'inline label - always visible', });
lyr_proponowanalokalizacjawiatrakw_2.set('fieldLabels', {'id': 'no label', });
lyr_bufor13km_3.set('fieldLabels', {'id': 'no label', });
lyr_bufor13km_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});