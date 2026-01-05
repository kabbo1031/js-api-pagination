let page = 1;
const limit = 5;

async function load(){
  document.getElementById('page').innerText = page;
  const list = document.getElementById('list');
  list.innerHTML = 'Loading...';

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();

  list.innerHTML = '';
  data.forEach(post=>{
    const li = document.createElement('li');
    li.innerText = post.title;
    list.appendChild(li);
  });
}

function next(){
  page++;
  load();
}

function prev(){
  if(page > 1){
    page--;
    load();
  }
}

load();
