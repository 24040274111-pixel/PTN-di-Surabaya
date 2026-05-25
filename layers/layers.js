var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PTNdiSurabaya_1 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_1 = format_PTNdiSurabaya_1.readFeatures(json_PTNdiSurabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_1.addFeatures(features_PTNdiSurabaya_1);
var lyr_PTNdiSurabaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_1, 
                style: style_PTNdiSurabaya_1,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_1_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_1_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_1_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_1_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_1_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_1_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_1_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_1_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_1_8.png" /> UPNV Jatim<br />' });
var lyr_upnv_jatim_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'upnv_jatim<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/upnv_jatim_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -350.000000, 350.000000, 0.000000]
        })
    });
var lyr_unesa_lidahwetan_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_lidahwetan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_lidahwetan_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -263.000000, 350.000000, 0.000000]
        })
    });
var lyr_unesa_ketintang_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_ketintang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_ketintang_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_c_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_c<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_c_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -252.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_b_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_b<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_b_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -270.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_a_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_a<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_a_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -198.000000, 350.000000, 0.000000]
        })
    });
var lyr_uin_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'uin<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/uin_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_its_sukolilo_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_sukolilo<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_sukolilo_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_its_manyar_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_manyar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_manyar_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -197.000000, 350.000000, 0.000000]
        })
    });
var format_aksesibilitas_univunion_11 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_11 = format_aksesibilitas_univunion_11.readFeatures(json_aksesibilitas_univunion_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_11.addFeatures(features_aksesibilitas_univunion_11);
var lyr_aksesibilitas_univunion_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_11, 
                style: style_aksesibilitas_univunion_11,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_11_0.png" /> <br />\
    <img src="styles/legend/aksesibilitas_univunion_11_1.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_11_2.png" /> 2,4km (30 menit)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PTNdiSurabaya_1.setVisible(true);lyr_upnv_jatim_2.setVisible(true);lyr_unesa_lidahwetan_3.setVisible(true);lyr_unesa_ketintang_4.setVisible(true);lyr_unair_c_5.setVisible(true);lyr_unair_b_6.setVisible(true);lyr_unair_a_7.setVisible(true);lyr_uin_8.setVisible(true);lyr_its_sukolilo_9.setVisible(true);lyr_its_manyar_10.setVisible(true);lyr_aksesibilitas_univunion_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PTNdiSurabaya_1,lyr_upnv_jatim_2,lyr_unesa_lidahwetan_3,lyr_unesa_ketintang_4,lyr_unair_c_5,lyr_unair_b_6,lyr_unair_a_7,lyr_uin_8,lyr_its_sukolilo_9,lyr_its_manyar_10,lyr_aksesibilitas_univunion_11];
lyr_PTNdiSurabaya_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', 'Tahun Didirikan': 'Tahun Didirikan', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_11.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_1.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', 'Tahun Didirikan': 'TextEdit', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_11.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_1.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Rangking QS WUR': 'no label', 'Tahun Didirikan': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_aksesibilitas_univunion_11.set('fieldLabels', {'fid': 'hidden field', 'Access': 'no label', });
lyr_aksesibilitas_univunion_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});