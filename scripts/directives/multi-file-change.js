(function(){
	angular
    .module('app')
    .directive('multiFileChange', ['audioFileService', multiFileChange]);


	function multiFileChange(audioFileService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        multiFileChange: '&'
      },
      link: function link(scope, element, attrs, ctrl) {
        element.on('change', onChange);

        scope.$on('destroy', function () {
          element.off('change', onChange);
        });

        function onChange() {
          var newFiles = element[0].files;
          var invalidFileIndexes = [];
          var overageCount = 0;
          for(var i = 0; i < newFiles.length; i++) {
            if(newFiles[i].type.substring(0,5) != 'audio') {
              if(invalidFileIndexes.length <= 5) {
                invalidFileIndexes.push(newFiles[i].name);
              }
              else {
                overageCount++;
              }
            }
            else {
              audioFileService.addFile(newFiles[i]);
            }
          }

          if(invalidFileIndexes.length > 0) {
            var alertString = "The following files have been ignored: "
            + invalidFileIndexes.join("\n")
            + (overageCount > 0 ? "\nand " + overageCount + " others" : "");
            alert(alertString);
          }

          ctrl.$setViewValue(element[0].files);
					element.val("");
        }
      }
		};
  }
})();