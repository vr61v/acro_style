var object = [{
  "name": "АRENA STAGE",
  "date": "2023.03.18",
  "count": 360
},{
  "name": "Русские Звезды",
  "date": "2023.01.28",
  "count": 21
},{
  "name": "Турнир Да.Бро",
  "date": "2023.03.25",
  "count": 108
}]

var data = JSON.parse(JSON.stringify(object));

function drawData(active){
  const list = document.getElementById("list");

  if(active){
    list.innerHTML = "";
    if(active == 1){data.sort((a, b) => a['name'] < b['name'] ? 1 : -1);}
    if(active == 2) {list.innerHTML = ""; data.sort((a, b) => a['name'] > b['name'] ? 1 : -1);}
    if(active == 3) {list.innerHTML = ""; data.sort((a, b) => Date.parse(a['date']) < Date.parse(b['date']) ? 1 : -1);}
    if(active == 4) {list.innerHTML = ""; data.sort((a, b) => Date.parse(a['date']) > Date.parse(b['date']) ? 1 : -1);}
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
function pagination(element) {
  let page = 1;
  const items = 12;

  function draw(countItems, currentPage){
    var list = document.getElementById("gallery-content");
    list.innerHTML = "";
    --currentPage;

    for(let i = countItems * currentPage + 1; i <= countItems * currentPage + countItems; ++i){
      if(i > data[element]['count']){ break; }
      var item = document.createElement("div");
      var image = document.createElement("img");
      image.src = `../source/alboms/${data[element]['name']}/file${i}.jpg`;
      console.log(`../source/alboms/${data[element]['name']}/file${i}.jpg`)
      image.classList.add("gallery__img");
      item.appendChild(image);
      list.appendChild(item);
    }
  }
  function display(currpage, countItems) {
    const buttons = document.querySelector('.gallery__buttons');
    buttons.innerHTML = ""
    const pages = Math.ceil(data[element]['count'] / countItems);
    const ul = document.createElement("ul");
    ul.classList.add('gallery__buttons--ul');

    let minI = 1; maxI = pages;
    if(currpage - 2 > 0){ minI = currpage - 2; }
    if(currpage + 2 < pages + 1){ maxI = currpage + 2; }
    

    if(minI != 1){    
      const dotes = document.createElement("li");
      dotes.innerText = "...";
      ul.appendChild(displayButtons(1));
      ul.appendChild(dotes);
    }
    
    for (let i = minI; i <= maxI; ++i) {
      ul.appendChild(displayButtons(i));
    }

    if(maxI != pages){
      const dotes = document.createElement("li");
      dotes.innerText = "...";
      ul.appendChild(dotes);
      ul.appendChild(displayButtons(pages));
    }

    buttons.appendChild(ul)

  }
  function displayButtons(pageCurr){
    const li = document.createElement("li");
    li.innerText = pageCurr;

    if(page == pageCurr){ li.classList.add("gallery__active"); }

    li.addEventListener('click', () => {
      page = pageCurr;
      draw(items, page);
      display(page, items);
    })

    return li;
  }

  draw(items, page);
  display(page, items);
}
function openGallery(element){
  document.getElementById("gallery").style.display = "block";
  document.getElementById("body").style.overflow = "hidden";
  document.getElementsByClassName("gallery__data")[0].innerText = `${data[element]['name']}, ${data[element]['date']}`;

  pagination(element);
}
function closeGallery(){
  document.getElementById("gallery").style.display = "none";
  document.getElementById("body").style.overflow = "auto";
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
window.onclick = function(event) {
  if (event.target == document.getElementById("gallery")) {
    document.getElementById("gallery").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
  }
}