// let imageUrls = [
//     '../images/bas1.jpg',
//     '../images/bas2.png',
//   ];

//   let images = document.getElementsByTagName("img");
//   for (let i = 0; i < images.length; i++) {
//   images[i].src = imageUrls[i];
// }

// let loadingSpinner = document.getElementById("loading-spinner");
// let loadedImages = 0;


// for (let i = 0; i < images.length; i++) {
//     let image = new Image();
//     image.onload = function() {
//       loadedImages++;
//       if (loadedImages === images.length) {
//         loadingSpinner.style.display = "visible";
//       }
//     };
//     image.src = imageUrls[i];
//   }




const canvas = document.getElementById("start-canvas");
const ctx = canvas.getContext('2d'); 

const imageObj =  [
    './images/bas2.png',
];
let loadedImages = 0;

for( let i = 0; i <loadedImages.length; i++){
    const img = new Image();
    img.onload = function(){
        loadedImages ++;
        if (loadedImages === images.length){
            let currentFrame = 0;
            setInterval(function(){
                ctx.clearRect(0,0, canvas.width, canvas.height);
                ctx.drawImage(imageObj[currentFrame], 0,0);

                currentFrame++;
                if (currentFrame === loadedImages.length){
                    currentFrame = 0;
                }
            }, 1000 / frameRate);
        }
    }
    img.src = images[i];
    imageObj.push(img)
}
