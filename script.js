// ahoj zvědavče, je to vanila, kod napsalo primarne chatgpt ¯\_(ツ)_/¯

const titles = [
  'to nefunguje vůbec', 
  'do psích kulí', 
  'nejde to', 
  'to se nějak rozbilo prostě', 
  'proč to kua říkám, to nikoho nezajimá', 
  'á vole nejde to', 
  'teď to ještě hodilo error kua', 
  'tak já se vole na to vyseru', 
  'píčo zase se nic nenačetlo', 
  'proč jsem nedržel hubu',
  'jessica'
]

document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("imageContainer");

  /** @var {Audio | undefined} */
  let lastSound;

  let echoMode = true;
  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("click", function () {
    echoMode = !echoMode;
  });

  for (let i = 1; i <= 11; i++) {
    const img = document.createElement("img");
    img.src = `assets/img/borecek${i}.png`; // Assuming images are named image1.jpg, image2.jpg, etc.
    img.alt = `Borecek ${i}`;
    img.classList.add("playImage");
    img.dataset.sound = `assets/audio/audio (mp3cut.net) (${i}).mp3`; // Assuming sounds are named sound1.mp3, sound2.mp3, etc.
    img.title = titles[i-1]

    img.addEventListener("click", function () {
      if (!echoMode) {
        lastSound?.pause();
      }
      const sound = new Audio(this.dataset.sound);
      lastSound = sound;
      sound.play();
    });
    imageContainer.appendChild(img);
  }
});
