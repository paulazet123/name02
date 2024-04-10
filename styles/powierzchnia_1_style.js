var size = 0;
var placement = 'point';

var style_powierzchnia_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Liberation Sans\', sans-serif";
    var labelFill = "#0e760e";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.8;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("\"powierzchn\" ||' ha'") !== null) {
        labelText = String(feature.get("\"powierzchn\" ||' ha'"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(6,237,6,0.7686274509803922)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.028}),fill: new ol.style.Fill({color: 'rgba(16,166,26,0.5686274509803921)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
