import { getData } from "./data.js";
import {card} from './card.js';
const parseData = async ()=> {
    const main = document.querySelector('.main');
    
    const data = await getData();
    data.forEach(job =>{
        main.appendChild(card(job))
    })
    
}

parseData();