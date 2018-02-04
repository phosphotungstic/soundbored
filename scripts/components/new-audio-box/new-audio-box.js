(function(){
	angular
		.module('app')
		.component('newAudioBox', {
			templateUrl: 'scripts/components/new-audio-box/new-audio-box-view.html',
			controller: ['audioFileService', newAudioBoxController]
		});

	function newAudioBoxController(audioFileService) {
		var ctrl = this;
		ctrl.file = [];
		ctrl.showAddNewAudioDialog = showAddNewAudioDialog;

		////////////////////////////////////

		function showAddNewAudioDialog() {
			document.getElementById('file').click();
		}
	}
})();