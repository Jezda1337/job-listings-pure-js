export const search = ()=>{
  const search = document.createElement('section');
    search.classList.add('card','search');
    search.innerHTML = `
        <p>Tags placeholder</p>
        <button class="search__clear" id="clear" onclick="clear()">Clear</button>
    `;
    return search;
};
