/**
 * Created by jupiterli on 6/07/2016.
 */

(function() {

  app
    .service('LogService', [LogService]);

  function LogService() {


    function log(content) {

      //filter
      //if (!(content.indexOf('FileSystemService: ') !== -1)) {
      //  return;
      //}

      var formattedContent = formatLog(content);
      console.log(formattedContent);

    }

    function error (content) {
      var formattedContent = formatLog(content);
      console.error(formattedContent);
    }

    function warn (content) {
      var formattedContent = formatLog(content);
      console.warn(formattedContent);

    }

    function debug (content) {
      console.debug(formatLog(content));
    }

    function formatLog(content) {
      return content + " -- " + moment().format('Do MMMM YYYY, h:mm:ss a')
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      log : log,
      error : error,
      warn : warn,
      debug : debug
    }
  }

})();
