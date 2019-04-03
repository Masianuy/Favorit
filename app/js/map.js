(function() {
	
	'use strict';

	var map = document.getElementById('map');
	var center = {lat: 45.9681281, lng: 34.4687966};
	var map = new google.maps.Map(
		map, 
		{
			zoom: 4, 
			center: center
		}
	);
    var icon = {
		path: 'M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375   C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96   c53,0,96,43,96,96S309,256,256,256z',
		scale: 0.1,
		fillСolor: 'blue',
		fillOpacity: 0.8
	};

})();