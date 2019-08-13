// UNIVERSAL IMAGE SIZE: 243.31 x

let games = [
  {
    name: 'Fruit Sensei',
    id: "fruitSensei",
    desc: 'A user interactive game that allows the user to use their smart phones to play the game, the goal of the game is to slice as much fruit as possible',
    creators: ["Navid Mamoon"],
    image: "fruitsensei.png",
    progress: 90,
    likes: 500,
    Comments: 10000,
    // gameLink: ,

  },
  {
    name: 'Pokemon Battle',
    id: "pokemonBattle",
    desc: "Replaca of the popular game where animals called Pokemon battle it out to determine which one is the best!",
    creators: ["David Johnny", "Mark Douglas", "Sebasteon Allen"],
    image: "game1.png",
    progress: 90,
    likes: 5,
    Comments: 10,
    // gameLink: ,
  },
  {
    name: 'Space Invaders',
    id: "spaceInvaders",
    desc: "Space Invaders is game that puts the players space fighting skills to the test. Space Invaders takes place in an inter Galactic War between humans and Aliens, your mission, wheather you choose to accept it, is to elimenate every last Alien in sight to save humanity.  ",
    creators: ["Sai Vedagiri", "Lameck Nymbane"],
    image: "spaceinvaders.png",
    progress: 90,
    likes: 5,
    Comments: 10,
    // gameLink:,
  },
  {
    name: 'MASH: A Game of Life',
    id: "mash",
    desc: "MASH: A Game Of Life is a digital replica of the popular grade-school randomization game! Find out your future by simply typing your name, and the amount of kids you want to have!",
    creators: ["Malachi Gardner"],
    image: "mash2.png",
    progress: 90,
    likes: 5,
    Comments: 10,
    // gameLink: ,
    // lookingFor: "Web Designers",
  },
  {
    name: 'All Star Wars',
    id: "allStarWars",
    desc: "You're trapped on the Death Star, Stormtroopers are firing at you, and you have nothing to defend yourself but your phone! So turn your phone into a mighty lightsaber by scanning the QR Code below!",
    creators: ["Navid Mamoon"],
    image: "allstarwars.png",
    progress: 90,
    likes: 50,
    Comments: 1000,
    // gameLink: ,
  },
  {
    name: 'Bouncing Balls',
    id: "bouncingBalls",
    desc: "Bouncing Ball is not a game an example of one the first projects we did here at All Star Code. This was the first project we did learning Java Script.",
    creators: ["Darius Edwards"],
    image: "bouncingBall.png",
    progress: 50,
    likes: 5,
    Comments: 10,
    // gamelink: ,
  },
]

let modalContainer = document.getElementById("modalContainer");
for (game of games) {
  modalContainer.innerHTML +=
    `
  <div class="modal fade" id="${game.id}" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${game.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src="${game.image}" width="350px">
        <p>${game.desc}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Play Game!</button>
      </div>
    </div>
  </div>
</div>
  `
}




let gameContainer = document.getElementById("games");
for (game of games) {
  gameContainer.innerHTML +=
    `
    <div class="col-4">
        <div class="card">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${game.id}">
            <img class="card-img-top" src="${game.image}" alt="Card image cap">
          </button>
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <p class="card-text">By ${game.creators}</p>
            <br>
            <p>${game.desc}</p>
          </div>
          <div class="card-footer">
            <p class="card-text">❤️ ${game.likes} | 💬 ${game.Comments} </p>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${game.progress}%;" aria-valuenow="${game.progress}" aria-valuemin="0" aria-valuemax="100">${game.progress}%</div>
          </div>
          </div>
        </div>
      </div>
    `
}