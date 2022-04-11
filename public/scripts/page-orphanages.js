//create map
const map = L.map('mapid').setView([-23.564848518213452,-46.684891068793014], 14);

//create and tileLayer
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Associação Marly Cury <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create add and marker
L.marker([-23.572246282461027,-46.67139403242994], { icon })
.addTo(map)
.bindPopup(popup);

L.marker([-23.562951660519683,-46.672479054420876], { icon })
.addTo(map)
.bindPopup(popup);

L.marker([-23.58305139241302,-46.7093862504658], { icon })
.addTo(map)
.bindPopup(popup);


