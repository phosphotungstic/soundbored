(function(){
	angular
		.module('app')
		.component('audioBox', {
			templateUrl: 'scripts/components/audio-box/audio-box-view.html',
      controller: ['audioFileService', '$scope', audioBoxController],
      bindings: {
				file: "<",
				index: "<"
      }
		});

	function audioBoxController($scope) {
		var ctrl = this;
		ctrl.src = "";
		ctrl.playAudio = playAudio;
		ctrl.$onInit = onInit;

		////////////////////////////////////

		function onInit() {
			var reader = new FileReader();
			reader.addEventListener("load", function () {
				ctrl.src = reader.result;
			}, false);
			ctrl.url = reader.readAsDataURL(ctrl.file);
		}

		function playAudio() {
			var players = document.getElementsByClassName("player");
			for(var i = 0; i < players.length; i++) {
				if(!players[i].classList.contains("priority")) {
					players[i].pause();
				}
			}
			var audio = document.getElementById("audio-" + ctrl.file.lastModified);
			audio.src = ctrl.src;
			audio.play();
		}
	}

})();