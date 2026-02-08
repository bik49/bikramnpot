const posts = [
  {
    title: "A Simple Day That Taught Me a Lot",
    content: "Today wasn’t special, yet it reminded me that peace comes from small moments."
  },
  {
    title: "Why I Started This Blog",
    content: "I wanted a place to express myself freely and document my personal growth."
  },
  {
    title: "Late Night Thoughts",
    content: "At night, silence speaks louder than words. I find clarity in those moments."
  }
];

const postContainer = document.getElementById("posts");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
  postContainer.appendChild(div);
});
