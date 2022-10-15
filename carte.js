

var image;

window.onload = function() {
  generation(); 
}

function generation(){
document.getElementById('id3').innerHTML = null;
  image = [];
  for (let i =1 ; i< 53; i++){
     image.push("images/"+i+".png")
      let img= document.createElement("img")
      img.src = "images/"+i+".png";
      img.weight = 80
      img.height = 85
      document.getElementById('id3').appendChild(img)
  }

}


function brassage_carte(image) {
  moitie_deck = image.length/2;
  nouveau_paquet = []
  for (let i = 0; i < moitie_deck; i++) {
    let paquet1 = image[i]
    let paquet2 = image[i + moitie_deck] 
    nouveau_paquet.push(paquet1)
    nouveau_paquet.push(paquet2)
  }
  
  return nouveau_paquet;
}


function brassage() {
  document.getElementById('id3').innerHTML = null;
  nouveau = brassage_carte(image); 
  for (let i=0; i < nouveau.length ; i++) {
    let img = document.createElement("img");
    img.src = nouveau[i];
    img.weight = 80
    img.height = 85
    document.getElementById('id3').appendChild(img);       
  }

  image = nouveau
}
