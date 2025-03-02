(function () {
    'use strict';
 
    angular
        .module('sampleApp' , [])
        .directive('autoResize', autoResize);
 
    autoResize.$inject = ['$timeout'];
 
    function autoResize($timeout) {
 
        var directive = {
            restrict: 'A',
            link: function autoResizeLink(scope, element, attributes, controller) {
 
                element.css({ 'height': 'auto', 'overflow-y': 'hidden' });
                $timeout(function () {
                    element.css('height', element[0].scrollHeight + 'px');
                }, 100);
 
                element.on('input', function () {
                    element.css({ 'height': 'auto', 'overflow-y': 'hidden' });
                    element.css('height', element[0].scrollHeight + 'px');
 
                });
            }
        };
 
        return directive;
    };
})();






//----------audio play------------------------
function toggleAudio() {
    var audioElement = document.getElementById('player')
    var soundOn = document.getElementById('play')
    var soundOff = document.getElementById('pause')
    if (audioElement.paused) {
      audioElement.play();
      $(soundOn).show();
      $(soundOff).hide();
    } else {
      audioElement.pause();
      $(soundOn).hide();
      $(soundOff).show();
    }
  } 


  function sendMail() {
    var params = {
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_803ycfo";
    const templateID = "template_7yafjpg";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("message").value = "";
          console.log(res);
          alert("Амжилттай илгээгдлээ!!!")
  
      })
      .catch(err=>console.log(err));
  
  }
