  const imageElement = document.getElementById('bgImage');
  const backgroundMap = {
    btnradio1: "/assets/images/bg_cream.png",
    btnradio2: "/assets/images/bg_blue.png",
    btnradio3: "/assets/images/bg_red.png",
    btnradio4: "/assets/images/bg_green.png"
  };

  Object.keys(backgroundMap).forEach(id => {
    const radio = document.getElementById(id);
    radio.addEventListener("change", () => {
      if (radio.checked) {
        imageElement.style.opacity = 0;
        setTimeout(() => {
          imageElement.src = backgroundMap[id];
          imageElement.style.opacity = 1;
        }, 200); 
      }
    });
  });

