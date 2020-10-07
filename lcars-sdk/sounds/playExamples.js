function play(sound) {
    var audio;
    
    switch(sound){
        case 0001:
            audio = new Audio('../../lcars-sdk/sounds/0001.wav');
        break;
        case 0002:
            audio = new Audio('../../lcars-sdk/sounds/0002.wav');
        break;
    }    
    audio.play();
  }