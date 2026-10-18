// const usersContainer = document.getElementById("users");
// const postsContainer = document.getElementById("posts");
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         users.forEach(user => {
//             const button = document.createElement("button");
//             button.textContent = user.name;
//             button.addEventListener("click", () => {
//                 getUserPosts(user.id);
//             });
//             usersContainer.appendChild(button);
//         });
//     })
//     .catch(error => console.log(error));

// function getUserPosts(userId) {
//     postsContainer.textContent = "Loading posts...";
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then(response => response.json())
//         .then(posts => {
//             postsContainer.innerHTML = "";
//             posts.forEach(post => {
//                 const title = document.createElement("p");
//                 title.textContent = post.title;
//                 postsContainer.appendChild(title);
//             });
//         })
//         .catch(error => {
//             postsContainer.textContent = "Failed to load posts.";
//             console.log(error);
//         });
// }