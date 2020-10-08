// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  '♡': '♥',
  '♥': '♡'
};

let colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here! 

// Make likes clickable

let likes = document.querySelectorAll('.like')

function likeArticle(event) {
  let heart = event.target
  mimicServerCall()
    .then(function(serverMessage){
      alert("You notified the server")
      alert(serverMessage)
      heart.innerText = glyphStates[heart.innerText]
      heart.style.color = colorStates[heart.style.color]
    })
      .catch(function(error){
        alert ("Something went wrong")
        let modal = document.getElementById('modal')
        modal.className = ''
      })

}

for (let glyph of likes) {
  glyph.addEventListener("click", likeArticle);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
