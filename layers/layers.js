var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KotaDepok_1 = new ol.format.GeoJSON();
var features_KotaDepok_1 = format_KotaDepok_1.readFeatures(json_KotaDepok_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaDepok_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaDepok_1.addFeatures(features_KotaDepok_1);
var lyr_KotaDepok_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaDepok_1, 
                style: style_KotaDepok_1,
                popuplayertitle: 'Kota Depok',
                interactive: true,
                title: '<img src="styles/legend/KotaDepok_1.png" /> Kota Depok'
            });
var format_JalanKotaDepok_2 = new ol.format.GeoJSON();
var features_JalanKotaDepok_2 = format_JalanKotaDepok_2.readFeatures(json_JalanKotaDepok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKotaDepok_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKotaDepok_2.addFeatures(features_JalanKotaDepok_2);
var lyr_JalanKotaDepok_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKotaDepok_2, 
                style: style_JalanKotaDepok_2,
                popuplayertitle: 'Jalan Kota Depok',
                interactive: true,
                title: '<img src="styles/legend/JalanKotaDepok_2.png" /> Jalan Kota Depok'
            });
var format_RumahSakitdiKotaDepok_3 = new ol.format.GeoJSON();
var features_RumahSakitdiKotaDepok_3 = format_RumahSakitdiKotaDepok_3.readFeatures(json_RumahSakitdiKotaDepok_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitdiKotaDepok_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitdiKotaDepok_3.addFeatures(features_RumahSakitdiKotaDepok_3);
var lyr_RumahSakitdiKotaDepok_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakitdiKotaDepok_3, 
                style: style_RumahSakitdiKotaDepok_3,
                popuplayertitle: 'Rumah Sakit di Kota Depok',
                interactive: true,
                title: '<img src="styles/legend/RumahSakitdiKotaDepok_3.png" /> Rumah Sakit di Kota Depok'
            });

lyr_WorldStreetMap_0.setVisible(true);lyr_KotaDepok_1.setVisible(true);lyr_JalanKotaDepok_2.setVisible(true);lyr_RumahSakitdiKotaDepok_3.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_KotaDepok_1,lyr_JalanKotaDepok_2,lyr_RumahSakitdiKotaDepok_3];
lyr_KotaDepok_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NMKEL2002': 'NMKEL2002', 'KABNAME': 'KABNAME', 'KECNAME': 'KECNAME', 'HECTARES': 'HECTARES', });
lyr_JalanKotaDepok_2.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'JLN412_': 'JLN412_', 'JLN412_ID': 'JLN412_ID', });
lyr_RumahSakitdiKotaDepok_3.set('fieldAliases', {'ID': 'ID', 'Nama': 'Nama', });
lyr_KotaDepok_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'NMKEL2002': '', 'KABNAME': '', 'KECNAME': '', 'HECTARES': '', });
lyr_JalanKotaDepok_2.set('fieldImages', {'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'JLN412_': '', 'JLN412_ID': '', });
lyr_RumahSakitdiKotaDepok_3.set('fieldImages', {'ID': 'Range', 'Nama': 'TextEdit', });
lyr_KotaDepok_1.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'NMKEL2002': 'header label - always visible', 'KABNAME': 'header label - always visible', 'KECNAME': 'header label - always visible', 'HECTARES': 'hidden field', });
lyr_JalanKotaDepok_2.set('fieldLabels', {'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LPOLY_': 'hidden field', 'RPOLY_': 'hidden field', 'LENGTH': 'inline label - always visible', 'JLN412_': 'hidden field', 'JLN412_ID': 'hidden field', });
lyr_RumahSakitdiKotaDepok_3.set('fieldLabels', {'ID': 'hidden field', 'Nama': 'header label - always visible', });
lyr_RumahSakitdiKotaDepok_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});