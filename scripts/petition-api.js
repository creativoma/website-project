const API_POST = "https://jsonplaceholder.typicode.com/posts";

fetch(API_POST)
  .then(response => response.json())
  .then((json) =>{
    for (let i = 0; i < json.length; i++) {
      const element = json[i];
      const newElem = document.createElement('div');
      newElem.classList = "card-container";
      const section = document.getElementById('blog-post-api');
      if (section != false && section != null){
        section.appendChild(newElem).innerHTML = 
        `<img src="https://via.placeholder.com/320x200/bbebda/000">
        <h3>${element.title}</h3>
        <p>${element.body}</p>` 
      }
    }
  })

  fetch(API_POST)
  .then(response => response.json())
  .then((json) =>{
    for (let i = 0; i < 4 ; i++) {
      const element = json[i];
      const newElem = document.createElement('div');
      newElem.classList = "card-container";
      const section = document.getElementById('main-blog-post');
      if (section != false && section != null){
        section.appendChild(newElem).innerHTML = 
        `<img src="https://via.placeholder.com/320x200/bbebda/000">
        <h3>${element.title}</h3>
        <p>${element.body}</p>` 
      }
    }
  })


