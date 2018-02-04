(function(){
	angular
		.module('app')
		.component('priorityAudio', {
			templateUrl: 'scripts/components/priority-audio/priority-audio-view.html',
      controller: ['audioFileService', priorityAudioController],
      bindings: {
        file: "<"
      }
		});

	function priorityAudioController(audioFileService) {
    var ctrl = this;
    ctrl.priority = false;
		ctrl.togglePriority = togglePriority;

		////////////////////////////////////

		function togglePriority() {
      ctrl.priority = !ctrl.priority;
      if(ctrl.priority) {
        document.getElementById("audio-" + ctrl.file.lastModified).classList.add('priority');
      }
      else {
        document.getElementById("audio-" + ctrl.file.lastModified).classList.remove('priority');
      }
    }
	}
})();