window.onload = function() {
	setupPlayer();
	setupControllerEvents();
}

function setupPlayer() {
	var conf = {
		key : "fe58bae2-0664-4f6f-875b-b91e4c5f6eaa",
		source : {
			// AVC Stream
			//dash : "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
			// HEVC Stream
			dash : "https://isppubdash-i.akamaihd.net/dash/live/676482/stage-fox-wach-dash-drm/1/master.mpd",
			
			//DRM AVC Stream
			// dash: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
		    drm: {
		      widevine: {
		        LA_URL: 'https://widevine-stage.license.istreamplanet.com/widevine/api/license/a6232aca-31da-4d25-afcf-8ae45246c84a'
		      },
		      playready: {
		        LA_URL: 'https://playready-stage.license.istreamplanet.com/api/license'
		      }
			}
			
// 		    dash: 'https://dtv-latam-abc.akamaized.net/dash/live/700371/dtv/DTV-ABC-ae/master.mpd',
// 		    drm: {
// //		      widevine: {
// //				LA_URL: 'https://widevine.license.istreamplanet.com/widevine/api/license/41710beb-de7c-4d5d-bf03-2db003b86f11',
// //				headers : [{
// //					name: 'X-ISP-TOKEN',
// //					value: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoic2Vzc2lvbiIsInVpZCI6IjQzODRkZWU4LTQ2MjctNDBmMi05ZDRmLTQwODI2ZWYwMDU4NiIsImFub24iOmZhbHNlLCJwZXJtaXNzaW9ucyI6WyJhbGxvdy1hbnktZ2VvbG9jYXRpb24iLCJjcmVhdGUtY29udGVudCIsImRlbGV0ZS1jb250ZW50IiwibWFuYWdlLWJpbGxpbmdwbGFucyIsIm1hbmFnZS1jYXJvdXNlbCIsIm1hbmFnZS1jYXRlZ29yaWVzIiwibWFuYWdlLWVudGl0bGVtZW50cyIsIm1hbmFnZS1mZWVkcyIsIm1hbmFnZS1ub3RpZmljYXRpb25zIiwibWFuYWdlLXBhY2thZ2VzIiwibWFuYWdlLXBlcm1pc3Npb25zIiwibWFuYWdlLXBvbGljaWVzIiwibWFuYWdlLXByb2R1Y3RzIiwibWFuYWdlLXJlZ2lvbnMiLCJtYW5hZ2Utcm9sZXMiLCJtYW5hZ2Utc3Vic2NyaXB0aW9ucyIsIm1hbmFnZS11c2VyLXJvbGVzIiwibWFuYWdlLXVzZXJzIiwicHVibGlzaC1jb250ZW50IiwicmVhZC1wZXJtaXNzaW9ucyIsInJlYWQtc3Vic2NyaXB0aW9ucyIsInJlYWQtdXNlcmRldGFpbHMiLCJyZWZ1bmQiLCJ1cGRhdGUtY29udGVudCIsInVwZGF0ZS1jb250ZW50LXN0cmVhbXMiLCJ2aWV3LWVudGl0bGVtZW50cyIsInZpZXctcG9saWNpZXMiLCJ2aWV3LXVucHVibGlzaGVkLWNvbnRlbnQiLCJ3cml0ZS11c2VyZGV0YWlscyJdLCJhcGlLZXkiOiI5ZDE5YjNlZC1jMDVmLTRlMGMtYTMzOC00MTg3MDUxMDBkYTMiLCJvcmlnaW5hbFRlbmFudCI6IiIsImV4cCI6MTU0MDIyODE0MywiaWF0IjoxNTQwMjI2OTQzLCJpc3MiOiJPcmJpcy1PQU0tVjEiLCJzdWIiOiI0Mzg0ZGVlOC00NjI3LTQwZjItOWQ0Zi00MDgyNmVmMDA1ODYifQ.3ob-bxwHOcOy28WUvZAVZ_JNWtU8jF7-6QyR0eHRFzJLK6Dym6EQ_ioKQofxgDc1nJzg-o6wWfaw7e5wKWNBkA'
// //				  }]
// //		      },
// 		      playready: {
// 		        LA_URL: 'https://playready.license.istreamplanet.com/api/license',
// 		        headers : [{
// 					name: 'X-ISP-TOKEN:',
// 					value: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoic2Vzc2lvbiIsInVpZCI6IjQzODRkZWU4LTQ2MjctNDBmMi05ZDRmLTQwODI2ZWYwMDU4NiIsImFub24iOmZhbHNlLCJwZXJtaXNzaW9ucyI6WyJhbGxvdy1hbnktZ2VvbG9jYXRpb24iLCJjcmVhdGUtY29udGVudCIsImRlbGV0ZS1jb250ZW50IiwibWFuYWdlLWJpbGxpbmdwbGFucyIsIm1hbmFnZS1jYXJvdXNlbCIsIm1hbmFnZS1jYXRlZ29yaWVzIiwibWFuYWdlLWVudGl0bGVtZW50cyIsIm1hbmFnZS1mZWVkcyIsIm1hbmFnZS1ub3RpZmljYXRpb25zIiwibWFuYWdlLXBhY2thZ2VzIiwibWFuYWdlLXBlcm1pc3Npb25zIiwibWFuYWdlLXBvbGljaWVzIiwibWFuYWdlLXByb2R1Y3RzIiwibWFuYWdlLXJlZ2lvbnMiLCJtYW5hZ2Utcm9sZXMiLCJtYW5hZ2Utc3Vic2NyaXB0aW9ucyIsIm1hbmFnZS11c2VyLXJvbGVzIiwibWFuYWdlLXVzZXJzIiwicHVibGlzaC1jb250ZW50IiwicmVhZC1wZXJtaXNzaW9ucyIsInJlYWQtc3Vic2NyaXB0aW9ucyIsInJlYWQtdXNlcmRldGFpbHMiLCJyZWZ1bmQiLCJ1cGRhdGUtY29udGVudCIsInVwZGF0ZS1jb250ZW50LXN0cmVhbXMiLCJ2aWV3LWVudGl0bGVtZW50cyIsInZpZXctcG9saWNpZXMiLCJ2aWV3LXVucHVibGlzaGVkLWNvbnRlbnQiLCJ3cml0ZS11c2VyZGV0YWlscyJdLCJhcGlLZXkiOiI5ZDE5YjNlZC1jMDVmLTRlMGMtYTMzOC00MTg3MDUxMDBkYTMiLCJvcmlnaW5hbFRlbmFudCI6IiIsImV4cCI6MTU0MDIyODUyMCwiaWF0IjoxNTQwMjI2OTQzLCJpc3MiOiJPcmJpcy1PQU0tVjEiLCJzdWIiOiI0Mzg0ZGVlOC00NjI3LTQwZjItOWQ0Zi00MDgyNmVmMDA1ODYifQ.P58ls3JIxyC5hvAtitxFAx5jnAuhxi-5fI3r3-el5s1EjhIxgzrnn9N2e10TTPM0yOyOMuKfuke_E1kwvXeKDQ'
// 				  }]
// 		      }
// 		    }
		},
		playback : {
			autoplay : true
		},
		tweaks : {
			max_buffer_level : 30,
			file_protocol : true,
			app_id : "15d16cde-fae5-47f2-afae-03e1c16a44e9"
		}
	};

	window.player = bitmovin.player("player");
	player.setup(conf).then(function(value) {
		// Success
		console.log("Successfully created bitmovin player instance");
	}, function(reason) {
		// Error!
		console.log("Error while creating bitmovin player instance");
	});
	
	player.addEventHandler(bitmovin.player.EVENT.ON_WARNING, function(data){
        console.log("On Warning: "+JSON.stringify(data))
    });
	player.addEventHandler(bitmovin.player.EVENT.ON_ERROR, function(data){
        console.log("On Error: "+JSON.stringify(data))
    });
}

function setupControllerEvents() {
	tizen.tvinputdevice.registerKey('MediaPlayPause');
	tizen.tvinputdevice.registerKey('ColorF0Red');

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case tizen.tvinputdevice.getKey('MediaPlayPause').code:
			if (player.isPlaying()) {
				player.pause();
			} else {
				player.play();
			}
			break;
		case 37: // LEFT arrow
			break;
		case 38: // UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40: // DOWN arrow
			break;
		case 13: // OK button
			break;
		case 10009: // RETURN button
			tizen.application.getCurrentApplication().exit();
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}
