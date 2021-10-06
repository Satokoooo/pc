const animationTargetElement = document.getElementById('mainTitle')


const texts = animationTargetElement.textContent,
      textsArray = [];

animationTargetElement.textContent= "";

for (let i = 0; i <texts.split("").length; i++) {
  const tx = texts.split("")[i];
  if (tx === " "){
    textsArray.push(" ");
  } else {
    textsArray.push('<span style="animation-delay:' + (i *0.2) + 's;">' + tx + '</span>')
  }
}

for (let j = 0; j < textsArray.length; j++) {
  animationTargetElement.innerHTML += textsArray[j];
}