(function(){
	angular
		.module('app')
		.factory('audioFileService', function() {
      var files = [];
      var audioFileInstance = {
        getFiles: getFiles,
        addFile: addFile,
        clearFiles: clearFiles,
        removeFile: removeFile,
        swapFiles: swapFiles,
        injectFile: injectFile
      };

      return audioFileInstance;

      ////////////////////////////////////

      function getFiles() {
        return files;
      }
      function addFile(inputFile, insertIndex) {
        if(insertIndex) {
          files.splice(insertIndex-1, 0, inputFile);
        }
        else {
          files.push(inputFile);
        }
      }

      function clearFiles () {
        files.length = 0;
      }

      function removeFile(lastModified) {
        for(var i = 0; i < files.length; i++) {
          if(lastModified == files[i].lastModified) {
            files.splice(i,1);
          }
        }
      }

      function swapFiles(index1, index2) {
        if(!isValidFileIndex(index1) || !isValidFileIndex(index2)) return;
        index1--;
        index2--;
        var temp = files[index1];
        files[index1] = files[index2];
        files[index2] = temp;
      }

      function injectFile(injected, injectAfter) {
        if(!isValidFileIndex(injected) || !isValidFileIndex(injectAfter)) return;
        injected--;
        injectAfter;
        files.splice(injectAfter, 0, files[injected])
        files.pop();
      }

      function isValidFileIndex(index) {
        var trueIndex = index-1;
        return trueIndex >= 0 && trueIndex < files.length
      }
    });
})();