const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// function createPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);



function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function () {
      posts.push(post);
      //presetting error to be true So error will occur
      let error = true;
      if(!error){
        //telling that resolve is true and we can go further
        resolve();
      } else {
        reject('Error: sth went wrong');
      }
      
     
    }, 2000);
  })
  
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
.then(getPosts)
.catch(function(err){
  console.log(err);
});
