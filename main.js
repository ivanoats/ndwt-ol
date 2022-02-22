import './style.css';
import {Map, View } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {fromLonLat} from 'ol/proj';

import {GeoJSON} from 'ol/format';

import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const source = new VectorSource({
  url: 'data//ndwt.geojson',
  format: new GeoJSON(),
});

const hoodRiver =  fromLonLat([45.7068,-121.5281]);
console.log('hoodRiver', hoodRiver);


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: source
    })
  ],
  view: new View({
    center: fromLonLat([-121.5281, 45.7068]),
    zoom: 7
  })
});
