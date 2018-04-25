var mobileMenu = false;
var mobileMenuDiv = false;
var map = null;

var element = null;

function initialize() {
	console.log("initialize!");
	mobileMenuDiv = document.getElementById("mobilemenu");
	mobileMenuDiv.style.display = "none";
	var x = "Total Width: " + screen.width + "px";
	console.log(x);
}

function toggleMenu() {

	mobileMenu = !mobileMenu;
	if (mobileMenu) {
		document.getElementById("mobilemenu").style.display = "inline-block";

	} else {
		document.getElementById("mobilemenu").style.display = "none";
	}
}

function closeMenu() {
	console.log("closemenu!");
	if (mobileMenu) {
		document.getElementById("mobilemenu").style.display = "inline-block";

	}

}

function resize() {
	location.reload(true);
}

function contactInitialize() {
	element = document.getElementById("map");
	map = new google.maps.Map(element, {
		center : new google.maps.LatLng(53.3489867, -6.2434582), // we insert the default values of the location -->
		zoom : 16, // level is entered to show the position appropriately-->
		mapTypeId : "OSM",
		mapTypeControl : true,
		streetViewControl : true,
		src : "http://maps.googleapis.com/maps/api/js?sensor=false"
	});
	map.mapTypes.set("OSM", new google.maps.ImageMapType({
		getTileUrl : function(coord, zoom) {
			var tilesPerGlobe = 1 << zoom;
			var x = coord.x % tilesPerGlobe;
			if (x < 0) {
				x = tilesPerGlobe + x;
			}
			return "http://tile.openstreetmap.org/" + zoom + "/" + x + "/" + coord.y + ".png";
		},
		marker : new google.maps.Marker({
			position : {
				lat : 53.3489867,
				lng : -6.2434582
			},
			map : map,
			title : 'Hello World!'
		}),
		tileSize : new google.maps.Size(256, 256),
		name : "OpenStreetMap",
		maxZoom : 18
	}));
}
