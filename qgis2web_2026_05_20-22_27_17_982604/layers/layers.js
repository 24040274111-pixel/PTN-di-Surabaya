ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_2.png" /> <br />' });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_2.png" /> univ_surabaya'
            });
var lyr_its_manyar_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_manyar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_manyar_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -197.000000, 350.000000, 0.000000]
        })
    });
var lyr_its_sukolilo_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_sukolilo<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_sukolilo_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_uin_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'uin<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/uin_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_a_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_a<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_a_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -198.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_b_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_b<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_b_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -270.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_c_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_c<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_c_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -252.000000, 350.000000, 0.000000]
        })
    });
var lyr_unesa_ketintang_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_ketintang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_ketintang_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_unesa_lidahwetan_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_lidahwetan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_lidahwetan_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -263.000000, 350.000000, 0.000000]
        })
    });
var lyr_upnv_jatim_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'upnv_jatim<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/upnv_jatim_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -350.000000, 350.000000, 0.000000]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);lyr_its_manyar_3.setVisible(true);lyr_its_sukolilo_4.setVisible(true);lyr_uin_5.setVisible(true);lyr_unair_a_6.setVisible(true);lyr_unair_b_7.setVisible(true);lyr_unair_c_8.setVisible(true);lyr_unesa_ketintang_9.setVisible(true);lyr_unesa_lidahwetan_10.setVisible(true);lyr_upnv_jatim_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univunion_1,lyr_univ_surabaya_2,lyr_its_manyar_3,lyr_its_sukolilo_4,lyr_uin_5,lyr_unair_a_6,lyr_unair_b_7,lyr_unair_c_8,lyr_unesa_ketintang_9,lyr_unesa_lidahwetan_10,lyr_upnv_jatim_11];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': '', 'Nama': '', 'Kampus': '', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Access': 'inline label - always visible', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', });
lyr_univ_surabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});