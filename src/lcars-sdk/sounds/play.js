$( document ).ready(function() {
    var audio = new Audio('/lcars-sdk/sounds/0003.wav');

    $(".slider").on("mousedown", () => {
        audio.play()
        setTimeout(() => {
            console.log(1, audio.currentTime)
          audio.currentTime = 0.15;
          timer = setInterval(() => {
              console.log(2, audio.currentTime)
              audio.currentTime = 0.3;
          }, 500); 
        }, 750);
      }).on("mouseup", () => {
        clearInterval(timer);
      })
});

function play(sound) {
    var audio;
    
    switch(sound){
        case 0001:
            audio = new Audio('/lcars-sdk/sounds/0001.wav');
            audio.play();
        break;
        case 0002:
            audio = new Audio('/lcars-sdk/sounds/0002.wav');
            audio.play();
        break;
      }
  }