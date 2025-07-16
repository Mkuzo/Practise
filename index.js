const panda = document.getElementById("panda");
const cheetah = document.getElementById("cheetah");
const elephant = document.getElementById("elephant");
const names = document.getElementById("name");
const description = document.getElementById("description");
const image = document.getElementById("image");

function animal(){
  names.innerHTML = "panda";
  description.innerHTML = "panda are mammals";
  image.src = "OIP.jpeg"
  return;
};
function cheetahs(){
  names.innerText = "cheetah";
  description.innerText = "cheetah are the fastes animal in land";
  image.src = "OSK.jpeg";
  return;
};
function elephants(){
  names.innerHTML = "Elephant";
  description.innerHTML = "is the bigest animal in land"
  image.src = "OSK (1).jpeg";
};