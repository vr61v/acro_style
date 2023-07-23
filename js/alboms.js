var object = [{
  "name": "АRENA STAGE",
  "date": "18.03.23",
  "count": 360
},{
  "name": "Русские Звезды",
  "date": "28.01.23",
  "count": 21
},{
  "name": "Турнир Да.Бро",
  "date": "25.03.23",
  "count": 108
}]
var data = JSON.parse(JSON.stringify(object));


function drawData(activeBtn){
  const list = document.getElementById("list");

  if(activeBtn){
    list.innerHTML = "";
    if(activeBtn.target.innerHTML == "Алфавиту А-Я")
      { data.sort((a, b) => a['name'] < b['name'] ? 1 : -1); }
    if(activeBtn.target.innerHTML == "Новые")
      { data.sort((a, b) => Date(a['data']) < Date(b['data']) ? 1 : -1); }
    if(activeBtn.target.innerHTML == "Количество фото")
      { data.sort((a, b) => Number(a['count']) < Number(b['count']) ? 1 : -1); }
  }

  for(let i = 0; i < data.length; ++i){
    list.innerHTML += 
      `<div class="photo__list--item" style="background-image: url('../source/alboms/${data[i]['name']}/prev.jpg')"> 
        <div class="photo__list--item--text">
          <div class="photo__list--item--title">${ data[i]['name'] }</div>
          <div class="photo__list--item--data">${ data[i]['date'] }</div>
        </div>
      </div>`;
  }
}

drawData(null);



document.querySelector('#sortby').addEventListener('click', e =>{
  buttons = document.querySelectorAll('#sortbyBtn');
  for(var i = 0; i < 3; ++i){ 
    buttons[i].classList.remove("photo__sortby--list--item--active");
    buttons[i].classList.add("photo__sortby--list--item");
  }
  if(e.target.id == "sortbyBtn"){ 
    e.target.classList.remove("photo__sortby--list--item");
    e.target.classList.add("photo__sortby--list--item--active");
    drawData(e);
  }

})





