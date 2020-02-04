// Mimic blog posts on a server getting and reading them

const posts = [
  { title: 'Post1', body: 'This is post1' },
  { title: 'Post2', body: 'This is post2' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, another_function) {
  setTimeout(() => {
    posts.push(post);
    another_function();
  }, 2000);
}

getPosts();

createPost({ title: 'Post3', body: 'This is post3' }, getPosts);
