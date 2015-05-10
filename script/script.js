$(document).ready(function() {
  $('#burger').on('click', function() {
   soundManager.play('burger');
  });
  $('#beer').on('click', function() {
   soundManager.play('beer');
  });
  $('#doughnut').on('click', function() {
   soundManager.play('doughnut');
  });
})

/***********************
SOUND MANAGER
************************/

soundManager.flashVersion = 9;  
soundManager.url = 'swf/';  

soundManager.onready(function() {
  soundManager.onload = function() {  
    soundManager.createSound({
      id:'burger', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/burger.mp3'
    }); 
    soundManager.createSound({
      id:'beer', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/beer2.mp3'
    });
    soundManager.createSound({
      id:'doughnut', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/forbidd.mp3'
    });  
  }; 
});
