var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_3_1 = new ol.format.GeoJSON();
var features_3_1 = format_3_1.readFeatures(json_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_1.addFeatures(features_3_1);
var lyr_3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_1, 
                style: style_3_1,
                popuplayertitle: 'водичка пофикшено3',
                interactive: true,
                title: '<img src="styles/legend/3_1.png" /> водичка пофикшено3'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'дома под водой',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> дома под водой'
            });

lyr_OSMStandard_0.setVisible(true);lyr_3_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_3_1,lyr__2];
lyr_3_1.set('fieldAliases', {'fid': 'fid', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_3_1.set('fieldImages', {'fid': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_3_1.set('fieldLabels', {'fid': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
