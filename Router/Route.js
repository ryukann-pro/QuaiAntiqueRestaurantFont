export default class Route {
    constructor(url, title, pathHtml, authorize,pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize
    }
}

/**
 * [] Tout le monde peut y accéder
 * ["Disconnected"] -> réserver aux autilisateurs déconnecté
 * ["client"] réserver aux autilisateurs avec le role client 
 * ["admin"] réserver aux autilisateurs avec le role admin 
 * ["admin,client"] réserver avec le role client ou admin
 */