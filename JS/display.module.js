export class Display {
  constructor(){
    console.log('hello from display class');
  };

  displayGames(games){
    let gamesBox ='';
    for(let i = 0; i < games.length; i++){
      gamesBox +=`
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
              <img src="${games[i].thumbnail}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${games[i].title}</h5>
                <p class="card-text">${games[i].short_description.split(" ",8)}</p>
              </div>
            </div>
        </div>
      `
    };
    document.getElementById('gameData').innerHTML = gamesBox;
  };
};