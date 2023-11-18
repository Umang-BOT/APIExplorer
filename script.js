const container = document.querySelector(".card-container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

//making http request
const url = "https://jsonplaceholder.typicode.com/users";

const fetchPosts = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    //display
    const out = data.map((post) => {
      return `
        <div class="card">
          <div class="card-header">
            <h3>Name: ${post.name}</h3>
          </div>
          <div class="card-body">
            <img src=${"dat.jpg"} class="card-image"/>
            <p>Username: ${post.username}</p>
          </div>
          <div class="card-body">
            <p>Email: ${post.email}</p>
          </div>
          <div class="card-body">
            <p>Website: ${post.website}</p>
          </div>
        </div>
        `;
    });
    container.innerHTML = out.join("");
  } catch (err) {
    console.log(err);
  }
};
btn.addEventListener("click", fetchPosts);
