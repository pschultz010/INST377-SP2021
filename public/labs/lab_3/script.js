// /* Put your javascript in here */

let pics = ["onigiri_1.png", "onigiri_2.png", "onigiri_3.png", "onigiri_4.png", "roll_1.png", "roll_2.png", "roll_3.png"]

function run() {
  pics.forEach((img, index) => {
      setTimeout(function(){ 
        document.getElementById('myPic').src = `images/${img}`;
      }, 1000 * (index + 1));
  })
}

setInterval(function(){ 
  run();
}, 1000);