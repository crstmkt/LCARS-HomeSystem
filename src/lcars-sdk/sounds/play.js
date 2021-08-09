//TO DO: Improve this function
// $(document).ready(function () {
//   var audio = new Audio("/lcars-sdk/sounds/0003.wav");

//   $(".slider")
//     .on("mousedown", () => {
//       audio.play();
//       setTimeout(() => {
//         console.log(1, audio.currentTime);
//         audio.currentTime = 0.15;
//         timer = setInterval(() => {
//           console.log(2, audio.currentTime);
//           audio.currentTime = 0.3;
//         }, 500);
//       }, 750);
//     })
//     .on("mouseup", () => {
//       clearInterval(timer);
//     });
// });

export default function play(sound) {
  switch (sound) {
    case 1:
      new Audio("/lcars-sdk/sounds/0001.wav").play();
      break;
    case 2:
      new Audio("/lcars-sdk/sounds/0002.wav").play();
      break;
  }
}
