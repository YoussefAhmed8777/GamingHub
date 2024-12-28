import { Display } from "./display.module.js";

export class Home {
  constructor(){
    // console.log('hello from home class');
    document.querySelectorAll('.nav-link').forEach(function(link){
      link.addEventListener('click', function(){
        // console.log('hello from navlink');
        document.querySelector('.navbar-nav .active').classList.remove('active');
        link.classList.add('active');
        const category = link.getAttribute('data-category');
        getGames(category);
      });
    });
    this.display = new Display();
    this.getGames('shooter');
  };

  async getGames(category){
    const options = {
      method:`get`,
      headers:{
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '11a42468f6mshb11ede644f057ecp1ae8ffjsnb10f82222a8c'
      }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    const respone = await api.json();
    console.log(respone);
    this.display.displayGames(respone);
  };
};