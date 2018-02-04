(function(){
	angular
		.module('app')
		.component('removeAudio', {
			templateUrl: 'scripts/components/remove-audio/remove-audio-view.html',
      controller: ['audioFileService', removeAudioController],
      bindings: {
        file: "<"
      }
		});

	function removeAudioController(audioFileService) {
		var ctrl = this;
		ctrl.removeCurrentFile = removeCurrentFile;

		////////////////////////////////////

		function removeCurrentFile() {
			audioFileService.removeFile(this.file.lastModified);
		}
	}
})();