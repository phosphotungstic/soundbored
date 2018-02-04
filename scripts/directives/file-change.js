(function(){
	angular
    .module('app')
    .directive('fileChange', ['audioFileService', fileChange]);


	function fileChange(audioFileService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        fileChange: '&'
      },
      link: function link(scope, element, attrs, ctrl) {
        element.on('change', onChange);

        scope.$on('destroy', function () {
          element.off('change', onChange);
        });

        function onChange() {
					var newFile = element[0].files[0];
					if(newFile.type.substring(0,5) != 'audio') {
						alert('Invalid file. Should be an audio file.');
						return;
          }
          
					audioFileService.addFile(newFile);
          ctrl.$setViewValue(newFile);
					element.val("");
        }
      }
		};
  }
})();