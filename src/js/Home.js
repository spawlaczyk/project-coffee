import { templates, select } from './settings.js';
import utils from './utils.js';

class Home {
  constructor(homeContainer){
    const thisHome = this;

    thisHome.renderInMenu(homeContainer);
  }

  

  renderInMenu(){
    const thisHome = this;

    const generatedHTML = templates.homePage(thisHome.data);

    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    const containerHome = document.querySelector(select.containerOf.home);

    containerHome.appendChild(thisHome.element);
  }
}

export default Home;