let currSection = "about";

const openSection = (section) => {
  transitions();

  document.getElementById(`nav-${currSection}`).classList.remove("active-nav");
  if (section === "about") {
    document.getElementById("navbar").classList.remove("open");
    document.getElementById("navbar").classList.add("close");
  } else if (section === "experiences") {
    document.getElementById(`nav-${section}`).classList.add("active-nav");
    document.getElementById("experiences").classList.add("open-exp");
  } else {
    if (currSection === "experiences") {
      document.getElementById("experiences").classList.remove("open-exp");
    }
    document.getElementById(`nav-${section}`).classList.add("active-nav");
    document.getElementById("navbar").classList.remove("close");
    document.getElementById("navbar").classList.add("open");
  }

  document.getElementById(currSection).classList.remove("open");
  document.getElementById(currSection).classList.add("close");
  document.getElementById(section).classList.remove("close");

  if (section !== "experiences") {
    document.getElementById("experiences").classList.remove("open-exp");
    document.getElementById(section).classList.add("open");
  }

  currSection = section;
};

const transitions = () => {
  let frames = document.getElementsByClassName("frame");

  for (let frame of frames) {
    frame.style.display = "block";

    frame.onanimationend = () => {
      frame.style.display = "none";
    };
  }
};

let main = document.getElementsByClassName("project-cntr")[0];
let div = document.createElement("div");
div.className = "main-project-cntr";
main.append(div.cloneNode(true));
