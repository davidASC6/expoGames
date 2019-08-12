let games = [
    {
        name:'Fruit Sensei',
        desc: 'An user interactive game that allows the user to use their smart phones to play the game, the goal of the game is to slice as much fruit as possible',
        creators: ["Navid Mamoon"],
        image: "fruitsensei.png"
    },
    {
        name: 'Pokemon Battle',
        desc: "Description",
        creators: ["David Johnny", "Mark Douglas", "Sebasteon Allen"],
        image: "game1.png"
    }
]

let gameContainer = document.getElementById("games");

for (game of games) {
    gameContainer.innerHTML += 
    `
    <div class="col-4">
        <div class="card">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            <img class="card-img-top" src="${game.image}" alt="Card image cap">
          </button>
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <p class="card-text">By ${game.creators}</p>
          </div>
          <div class="card-footer">
            <p class="card-text">Likes: , Comments: </p>
          </div>
        </div>
      </div>
    `
}