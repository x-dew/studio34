$(document).ready(function () {
    //Google map api settings
    (function initMap() {
        var sLatLng = {
            lat: 59.93172927746452,
            lng: 30.322663050000028
        };
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('googleMap'), {
            center: sLatLng,
            zoom: 18,
            disableDefaultUI: true,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#343332'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {elementType: "labels.icon", stylers: [{visibility: "off"}]},
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#454545'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9d9d9d'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9d9d9d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#191a1a'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9d9d9d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#9d9d9d'}]
                }
            ]
        });
        new google.maps.Marker({
            position: sLatLng,
            map,
            title: "Hello World!",
            icon: {
                url: "img/map-marker.svg",
                scaledSize: new google.maps.Size(80, 100)
            }
        });
    })()

    //Button up
    function scrollUp() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollUp);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    }
    var goTopBtn = document.getElementById('goUpBtn');
    goTopBtn.addEventListener('click', scrollUp);

})
