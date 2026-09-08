var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_raster_AiO_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'raster_AiO<br />\
    <img src="styles/legend/raster_AiO_1_0.png" /> 10,0000000<br />\
    <img src="styles/legend/raster_AiO_1_1.png" /> 41,8500000<br />\
    <img src="styles/legend/raster_AiO_1_2.png" /> 73,7000000<br />\
    <img src="styles/legend/raster_AiO_1_3.png" /> 105,5500000<br />\
    <img src="styles/legend/raster_AiO_1_4.png" /> 137,4000000<br />\
    <img src="styles/legend/raster_AiO_1_5.png" /> 169,2500000<br />\
    <img src="styles/legend/raster_AiO_1_6.png" /> 201,1000000<br />\
    <img src="styles/legend/raster_AiO_1_7.png" /> 230,5000000<br />\
    <img src="styles/legend/raster_AiO_1_8.png" /> 255,0000000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/raster_AiO_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8332093.815632, -5475829.357523, -7724413.084211, -4723641.331945]
        })
    });
var format_protect_areas_AiO_2 = new ol.format.GeoJSON();
var features_protect_areas_AiO_2 = format_protect_areas_AiO_2.readFeatures(json_protect_areas_AiO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_protect_areas_AiO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protect_areas_AiO_2.addFeatures(features_protect_areas_AiO_2);
var lyr_protect_areas_AiO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protect_areas_AiO_2, 
                style: style_protect_areas_AiO_2,
                popuplayertitle: 'protect_areas_AiO',
                interactive: true,
                title: '<img src="styles/legend/protect_areas_AiO_2.png" /> protect_areas_AiO'
            });
var format_alpine_hut_AiO_3 = new ol.format.GeoJSON();
var features_alpine_hut_AiO_3 = format_alpine_hut_AiO_3.readFeatures(json_alpine_hut_AiO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alpine_hut_AiO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alpine_hut_AiO_3.addFeatures(features_alpine_hut_AiO_3);
var lyr_alpine_hut_AiO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alpine_hut_AiO_3, 
                style: style_alpine_hut_AiO_3,
                popuplayertitle: 'alpine_hut_AiO',
                interactive: true,
                title: '<img src="styles/legend/alpine_hut_AiO_3.png" /> alpine_hut_AiO'
            });
var format_AiO_valido_4 = new ol.format.GeoJSON();
var features_AiO_valido_4 = format_AiO_valido_4.readFeatures(json_AiO_valido_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AiO_valido_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AiO_valido_4.addFeatures(features_AiO_valido_4);
var lyr_AiO_valido_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AiO_valido_4, 
                style: style_AiO_valido_4,
                popuplayertitle: 'AiO_valido',
                interactive: false,
                title: '<img src="styles/legend/AiO_valido_4.png" /> AiO_valido'
            });
var format_san_carlos_de_bariloche_5 = new ol.format.GeoJSON();
var features_san_carlos_de_bariloche_5 = format_san_carlos_de_bariloche_5.readFeatures(json_san_carlos_de_bariloche_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_san_carlos_de_bariloche_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_san_carlos_de_bariloche_5.addFeatures(features_san_carlos_de_bariloche_5);
var lyr_san_carlos_de_bariloche_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_san_carlos_de_bariloche_5, 
                style: style_san_carlos_de_bariloche_5,
                popuplayertitle: 'san_carlos_de_bariloche',
                interactive: false,
                title: '<img src="styles/legend/san_carlos_de_bariloche_5.png" /> san_carlos_de_bariloche'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_raster_AiO_1.setVisible(true);lyr_protect_areas_AiO_2.setVisible(true);lyr_alpine_hut_AiO_3.setVisible(true);lyr_AiO_valido_4.setVisible(true);lyr_san_carlos_de_bariloche_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_raster_AiO_1,lyr_protect_areas_AiO_2,lyr_alpine_hut_AiO_3,lyr_AiO_valido_4,lyr_san_carlos_de_bariloche_5];
lyr_protect_areas_AiO_2.set('fieldAliases', {'SITE_ID': 'SITE_ID', 'SITE_PID': 'SITE_PID', 'SITE_TYPE': 'SITE_TYPE', 'NAME_ENG': 'NAME_ENG', 'NAME': 'NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'REALM': 'REALM', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'GOVSUBTYPE': 'GOVSUBTYPE', 'OWN_TYPE': 'OWN_TYPE', 'OWNSUBTYPE': 'OWNSUBTYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'PRNT_ISO3': 'PRNT_ISO3', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', 'INLND_WTRS': 'INLND_WTRS', 'OECM_ASMT': 'OECM_ASMT', 'layer': 'layer', 'path': 'path', });
lyr_alpine_hut_AiO_3.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', });
lyr_AiO_valido_4.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'codreg': 'codreg', 'codpro': 'codpro', 'codcom': 'codcom', 'nomreg': 'nomreg', 'nompro': 'nompro', 'nomcom': 'nomcom', 'layer': 'layer', 'path': 'path', });
lyr_san_carlos_de_bariloche_5.set('fieldAliases', {'id': 'id', });
lyr_protect_areas_AiO_2.set('fieldImages', {'SITE_ID': 'Range', 'SITE_PID': 'TextEdit', 'SITE_TYPE': 'TextEdit', 'NAME_ENG': 'TextEdit', 'NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'REALM': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'GOVSUBTYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'OWNSUBTYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'PRNT_ISO3': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', 'INLND_WTRS': 'TextEdit', 'OECM_ASMT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_alpine_hut_AiO_3.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', });
lyr_AiO_valido_4.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'codreg': 'TextEdit', 'codpro': 'TextEdit', 'codcom': 'TextEdit', 'nomreg': 'TextEdit', 'nompro': 'TextEdit', 'nomcom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_san_carlos_de_bariloche_5.set('fieldImages', {'id': 'TextEdit', });
lyr_protect_areas_AiO_2.set('fieldLabels', {'SITE_ID': 'no label', 'SITE_PID': 'no label', 'SITE_TYPE': 'no label', 'NAME_ENG': 'no label', 'NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'header label - visible with data', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'REALM': 'header label - visible with data', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'GOVSUBTYPE': 'no label', 'OWN_TYPE': 'no label', 'OWNSUBTYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'PRNT_ISO3': 'no label', 'ISO3': 'header label - visible with data', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', 'INLND_WTRS': 'no label', 'OECM_ASMT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_alpine_hut_AiO_3.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'header label - always visible', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsd': 'no label', 'dgpsid': 'no label', });
lyr_AiO_valido_4.set('fieldLabels', {'gid': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'codreg': 'no label', 'codpro': 'no label', 'codcom': 'no label', 'nomreg': 'no label', 'nompro': 'no label', 'nomcom': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_san_carlos_de_bariloche_5.set('fieldLabels', {'id': 'no label', });
lyr_san_carlos_de_bariloche_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});