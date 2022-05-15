import L from 'leaflet';

const asteroidIcon = new L.Icon({
    iconUrl: require('../assets/img/rock.png'),
    iconRetinaUrl: require('../assets/img/rock.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
})

export { asteroidIcon }