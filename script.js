document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("imageContainer");

  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `assets/img/borecek${i}.png`; // Assuming images are named image1.jpg, image2.jpg, etc.
    img.alt = `Borecek ${i}`;
    img.classList.add("playImage");
    img.dataset.sound = `assets/audio/audio (mp3cut.net) (${i}).mp3`; // Assuming sounds are named sound1.mp3, sound2.mp3, etc.

    img.addEventListener("click", function () {
      const sound = new Audio(this.dataset.sound);
      sound.play();
    });

    imageContainer.appendChild(img);
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed");

//   const imageContainer = document.getElementById("imageContainer");
//   if (!imageContainer) {
//     console.error("Image container not found!");
//     return;
//   }

//   const numImages = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

//   console.log(`Generating ${numImages} images`);

//   for (let i = 1; i <= numImages; i++) {
//     const img = document.createElement("img");
//     img.src = `image${i}.jpg`; // Assuming images are named image1.jpg, image2.jpg, etc.
//     img.alt = `Image ${i}`;
//     img.classList.add("playImage");
//     img.dataset.sound = `sound${i}.mp3`; // Assuming sounds are named sound1.mp3, sound2.mp3, etc.

//     img.addEventListener("click", function () {
//       console.log(`Image ${i} clicked`);
//       const sound = new Audio(this.dataset.sound);
//       sound.play();
//     });

//     imageContainer.appendChild(img);
//     console.log(`Added image ${i}`);
//   }
// });
