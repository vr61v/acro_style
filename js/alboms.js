var object = [{
  "name": "АRENA STAGE",
  "date": "18.03.23",
  "count": 11
},{
  "name": "Русские Звезды",
  "date": "28.01.23",
  "count": 9
},{
  "name": "Турнир Да.Бро",
  "date": "25.03.23",
  "count": 7
}]

var data = JSON.parse(JSON.stringify(object));

function drawData(active){
  const list = document.getElementById("list");

  if(active){
    list.innerHTML = "";
    if(active == 1){data.sort((a, b) => a['name'] < b['name'] ? 1 : -1);}
    if(active == 2) {list.innerHTML = ""; data.sort((a, b) => a['name'] > b['name'] ? 1 : -1);}
    if(active == 3) {list.innerHTML = ""; data.sort((a, b) => Date(a['date']) < Date(b['date']) ? 1 : -1);}
    if(active == 4) {list.innerHTML = ""; data.sort((a, b) => Date(a['date']) > Date(b['date']) ? 1 : -1);}
    if(active == 5) {list.innerHTML = ""; data.sort((a, b) => a['count'] > b['count'] ? 1 : -1);}
    if(active == 6) {list.innerHTML = ""; data.sort((a, b) => a['count'] < b['count'] ? 1 : -1);}
  }

  for(let i = 0; i < data.length; ++i){
    list.innerHTML += 
      `<div class="photo__list--item" onclick="openGallery('${ i }')" style="background-image: url('../source/alboms/${data[i]['name']}/prev.jpg')"> 
        <div class="photo__list--item--text">
          <div class="photo__list--item--title">${ data[i]['name'] }</div>
          <div class="photo__list--item--data">${ data[i]['date'] }</div>
        </div>
      </div>`;
  } 
}
drawData(-1);

document.getElementById('SortBy1').addEventListener('click', e =>{
  drawData(1);
  document.getElementById('SortByActive').innerHTML = 'Алфавиту А-Я';
})
document.getElementById('SortBy2').addEventListener('click', e =>{
  drawData(2);
  document.getElementById('SortByActive').innerHTML = 'Алфавиту Я-А';
})
document.getElementById('SortBy3').addEventListener('click', e =>{
  drawData(3);
  document.getElementById('SortByActive').innerHTML = 'Новые';
})
document.getElementById('SortBy4').addEventListener('click', e =>{
  drawData(4);
  document.getElementById('SortByActive').innerHTML = 'Старые';
})
document.getElementById('SortBy5').addEventListener('click', e =>{
  drawData(5);
  document.getElementById('SortByActive').innerHTML = 'Количество фото >';
})
document.getElementById('SortBy6').addEventListener('click', e =>{
  drawData(6);
  document.getElementById('SortByActive').innerHTML = 'Количество фото <';
})



function openGallery(element){
  document.getElementById("gallery").style.display = "block";
  document.getElementById("body").style.overflow = "hidden";
  
  var gallery = document.getElementById("gallery-content");
  gallery.innerHTML = "";
  for(let i = 1; i <= data[element]['count']; ++i){
    gallery.innerHTML += `<div> <img class="gallery__img" src="../source/alboms/${data[element]['name']}/Файл ${i}.jpg" /> </div>`;
  }
  document.getElementsByClassName('photo__gallery').innerHTML = gallery;
  
}
function closeGallery(){
  document.getElementById("gallery").style.display = "none";
  document.getElementById("body").style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("gallery")) {
    document.getElementById("gallery").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
  }
}
