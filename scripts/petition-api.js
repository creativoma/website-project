const API_POST = "https://jsonplaceholder.typicode.com/posts";

fetch(API_POST)
  .then(response => response.json())
  .then((json) =>{
    for (let i = 0; i < json.length; i++) {
      const element = json[i];
      const newElem = document.createElement('div');
      newElem.id = "card";
      const section = document.querySelector('#blog-post-api');
      section.appendChild(newElem).innerHTML = 
      `<img src="https://via.placeholder.com/320x200/bbebda/000" alt="main picture">
      <h3>${element.title}</h3>
      <p>${element.body}</p>` 
    }
  })


  fetch(API_POST)
  .then(response => response.json())
  .then((json) =>{
    for (let i = 0; i < 4 ; i++) {
      const element = json[i];
      const newElem = document.createElement('div');
      newElem.id = "card";
      const section = document.querySelector('#main-blog-post');
      section.appendChild(newElem).innerHTML = 
      `<img src="https://via.placeholder.com/320x200/bbebda/000" alt="main picture">
      <h3>${element.title}</h3>
      <p>${element.body}</p>` 
    }
  })