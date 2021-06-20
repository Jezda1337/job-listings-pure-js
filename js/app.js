import { getData } from "./data.js";
import {card} from './card.js';
import {search} from './search.js';

const parseData = async ()=> {
    const main = document.querySelector('.main');
    main.appendChild(search())
    const data = await getData();
    data.forEach(job =>{
        main.appendChild(card(job))
    });
    const tags = document.querySelectorAll("[data-tag]");
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    tags.forEach(tag =>{
      tag.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML);
        const target = e.target.innerHTML;
        cards.forEach(card=>{
          if(cards.contains(tag)) {
            card.classList.add('d-none')
          }
        })
      })
    })
};

parseData();

const srch = document.querySelector('.search');
const clear = document.querySelector('#clear');
// console.log(tags);

clear.addEventListener('click', ()=>{
  srch.style.display = 'none';
})
