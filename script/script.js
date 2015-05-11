$(document).ready(function() {

  $('img').on('click', function() {
    var id = $(this).attr('id');
    soundManager.play(id);
  })

  $('button').on('click', function() {
   soundManager.play('checkout');
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
    soundManager.createSound({
      id:'cola', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/cola.mp3'
    });  
    soundManager.createSound({
      id:'candy', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/candy.mp3'
    });  
    soundManager.createSound({
      id:'chocolate', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/chocola.mp3'
    }); 
    soundManager.createSound({
      id:'chicken', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/chicken.mp3'
    }); 
    soundManager.createSound({
      id:'ham', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/ham.mp3'
    }); 
    soundManager.createSound({
      id:'cupcake', 
      url:'http://www.springfieldfiles.com/sounds/mmmm/cupcakes.mp3'
    }); 
    soundManager.createSound({
      id:'checkout', 
      url:'http://www.richmolnar.com/Sounds/Apu%20-%20Please%20come%20again.wav'
    }); 
  }; 
});
