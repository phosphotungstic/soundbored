(function(){
	angular
		.module('app')
		.component('repeatAudio', {
			templateUrl: 'scripts/components/repeat-audio/repeat-audio-view.html',
      controller: ['audioFileService', repeatAudioController],
      bindings: {
        file: "<"
      }
		});

	function repeatAudioController(audioFileService) {
		var ctrl = this;
		ctrl.repeat = false;
		ctrl.toggleRepeat = toggleRepeat;

		////////////////////////////////////

		function toggleRepeat() {
			ctrl.repeat = !ctrl.repeat;
			document.getElementById("audio-" + ctrl.file.lastModified).loop = ctrl.repeat;
		}
	}
})();