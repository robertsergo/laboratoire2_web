

var image;

window.onload = function() {
  generation(); 
}

function generation(){
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
    let a = image[i]
    let b = image[i+moitie_deck] 
    nouveau_paquet.push(a)
    nouveau_paquet.push(b)
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

















































