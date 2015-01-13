// Primary Namespace
var emberApp = emberApp || {};

emberApp.index = function(){

    "use strict";

    function init() {
      
    }

    function readMore(thisObj){
      //alert( $(thisObj).attr('id') );
    }

    return {
        init: init,
        readMore: readMore
    };

}();

function runOnPageLoad() { 
    
    /* default script to run on page load  */
    emberApp.index.init();



}

window.addEventListener("DOMContentLoaded", runOnPageLoad, false);