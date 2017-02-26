/**
 * Created by jupiterli on 27/02/2017.
 */

(function() {

  app
    .service('FacebookService', ['LogService', FacebookService]);

  function FacebookService(LogService) {

    var hasInit = false;
    var _isAvailable = false;

    var plugin = null;

    function log(content) {
      LogService.log(formatContent(content));
    }

    function warn(content) {
      LogService.warn(formatContent(content));
    }

    function error(content) {
      LogService.error(formatContent(content));
    }

    function debug(content) {
      LogService.debug(formatContent(content));
    }

    function formatContent (content) {
      return "FacebookService: " + content;
    }

    function isAvailable() {
      if (hasInit) {
        return _isAvailable;
      } else {
        warn("Service has not initialised properly.")
      }
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      init : function () {
        hasInit = true;

        if (typeof facebookConnectPlugin !== 'undefined' && facebookConnectPlugin) {
          plugin = facebookConnectPlugin;
          _isAvailable = true;
        } else {
          alert("Service is not available.");
        }

      },

      login : function () {
        if (isAvailable()) {
          plugin.login("id,name,gender,location,website,picture,relationship_status", function (response) {
            alert(JSON.stringify(response));
          }, function (error) {
            alert(JSON.stringify(response));
          });
        }
      }
    }
  }

})();
