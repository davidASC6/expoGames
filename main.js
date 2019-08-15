// UNIVERSAL IMAGE SIZE: 275.65 x 232.23

let games = [
  {
    name: 'Fruit Sensei',
    id: "fruitSensei",
    desc: 'A user interactive game that allows the user to use their smart phones to play the game, the goal of the game is to slice as much fruit as possible',
    creators: ["Navid Mamoon"],
    image: "fruitsensei.png",
    progress: 100,
    likes: 567,
    Comments: 259,
    gameLink: "http://fruit-sensei.herokuapp.com/",
    lookingFor: "Game Testers",
    LinkedIn: "https://www.linkedin.com/in/navid-mamoon",
    github: "https://github.com/navidmx",
  },
  {
    name: 'Pokemon Battle',
    id: "pokemonBattle",
    desc: "Replica of the popular game where animals called Pokemon battle it out to determine which one is the best!",
    creators: ["David Johnny", "Mark Douglas", "Sebasteon Allen"],
    image: "game1.png",
    progress: 98,
    likes: 56,
    Comments: 68,
    gameLink: "https://davidasc6.github.io/pokemonbattle/",
    lookingFor: "Sprite Designers",
    LinkedIn: "https://www.linkedin.com/in/navid-mamoon",
    github: "https://github.com/davidASC6",
  },
  {
    name: 'Space Invaders',
    id: "spaceInvaders",
    desc: "Space Invaders is game that puts the players space fighting skills to the test. Space Invaders takes place in an inter Galactic War between humans and Aliens, your mission, wheather you choose to accept it, is to elimenate every last Alien in sight to save humanity.  ",
    creators: ["Sai Vedagiri", "Lameck Nymbane"],
    image: "spaceinvaders.png",
    progress: 100,
    likes: 190,
    Comments: 365,
    gameLink: "https://lameckasc6.github.io/spaceInvaders/",
    lookingFor: "Game Testers, Devs who can help make the aliens move",
    LinkedIn: "https://www.linkedin.com/in/sai-vedagiri",
    github: "https://github.com/LameckASC6",
  },
  {
    name: 'MASH: A Game of Life',
    id: "mash",
    desc: "MASH: A Game Of Life is a digital replica of the popular grade-school randomization game! Find out your future by simply typing your name, and the amount of kids you want to have!",
    creators: ["Malachi Gardner"],
    image: "mash2.png",
    progress: 100,
    likes: 57,
    Comments: 16,
    gameLink: "https://malachigardnerasc6.github.io/MASH/",
    lookingFor: "Web Designers, Web Developers",
    LinkedIn: "https://www.linkedin.com/in/malachi-gardner-b2619718b",
    github: "https://github.com/MalachiGardnerASC6",
  },
  {
    name: 'All Star Wars',
    id: "allStarWars",
    desc: "You're trapped on the Death Star, Stormtroopers are firing at you, and you have nothing to defend yourself but your phone! So turn your phone into a mighty lightsaber by scanning the QR Code below!",
    creators: ["Navid Mamoon"],
    image: "allstarwars.png",
    progress: 100,
    likes: 505,
    Comments: 890,
    gameLink: "http://navidmx.herokuapp.com/",
    lookingFor: "Game Testers",
    LinkedIn: "https://www.linkedin.com/in/navid-mamoon",
    github: "https://github.com/navidmx",
  },
  {
    name: 'Bouncing Balls',
    id: "bouncingBalls",
    desc: "Bouncing Ball is an upcoming interactive stress relief game where the user will be able to grab, bounce, and throw color-changing balls. Currently looking for developers to help work on interaction!",
    creators: ['Darius Edwards'],
    image: "bouncingBall.png",
    progress: 60,
    likes: 12,
    Comments: 14,
    gameLink: "https://dariusedwards.github.io/Bouncing-Balls/",
    lookingFor: "Game Designers, Developers who are adept in JS physics and interaction ",
    Instagram: "https://www.instagram.com/saurid_skin/",
    Instagramimage: "instagram-logo.png",
    github: "https://github.com/DariusEdwards",
  },
]

let gameContainer = document.getElementById("games");
let modalContainer = document.getElementById("modalContainer");

loadGames('true');

function filter() {
  let choice = document.getElementById('filterSelector').value;
  if (choice == 'none') {
    loadGames('true');
  }
  if (choice == 'complete') { 
    loadGames('game.progress == 100');
  }
  if (choice == 'in-progress') {
    loadGames('game.progress < 100');
  }
}

function loadGames(conditional) {
  gameContainer.innerHTML = "";
  modalContainer.innerHTML = "";
  for (game of games) {
    if (eval(conditional)){
      gameContainer.innerHTML +=
        `
        <div class="col-md-4">
            <div class="card">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${game.id}">
                <img class="card-img-top" src="${game.image}" alt="Card image cap" width="275" height="232">
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
              <img src="${game.image}" width="350px"><a href= "${game.LinkedIn}"><img src="LinkedIn.png" width="50px"><a/><a href="${game.github}"><img src="github-logo-1.png" width="50"><a/>
              <p>${game.desc}</p>
            </div>
            <div id=lookingFor>Currently Looking For: ${game.lookingFor} </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary"><a href = "${game.gameLink}">Play Game!<a/></button>
            </div>
          </div>
        </div>
        </div>
        `
    }
  }
}

