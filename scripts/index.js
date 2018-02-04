  angular.module('app', []);
  angular.module('app').controller('mainController', ['audioFileService', '$scope', function(audioFileService, $scope) {
    $scope.files = audioFileService.getFiles();

    $scope.stopAllAudio = function() {
			var players = document.getElementsByClassName("player");
			for(var i = 0; i < players.length; i++) {
				players[i].pause();
      }
    }
    $scope.showMultiFile = function() {
      document.getElementById('multifile').click();
    }
    $scope.clearFiles = function() {
      audioFileService.clearFiles();
    }

    $scope.swap = function() {
      var swap1 = document.getElementById("val1").value;
      var swap2 = document.getElementById("val2").value;
      if($scope.files.length > 1) {
        audioFileService.swapFiles(swap1, swap2);
      }
    }

    $scope.inject = function() {
      var injected = document.getElementById("val1").value;
      var injectAfter = document.getElementById("val2").value;
      if($scope.files.length > 1) {
        audioFileService.injectFile(injected, injectAfter);
      }
    }
  }]);