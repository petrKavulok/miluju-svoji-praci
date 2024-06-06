// ahoj zvědavče, je to vanila, kod napsalo primarne chatgpt ¯\_(ツ)_/¯

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
