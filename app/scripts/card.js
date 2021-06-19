export const card = (data)=>{
    const card = document.createElement('section');
    card.classList.add('card');
    (data.featured) ? card.classList.add('card-border') : null;
    card.innerHTML = `
        <section class="card__job-info">
            <section class="card__job-header">
                <h2 class="card__company-name">${data.company}</h2>
                <span class="${(data.new) ? 'card__tag-new' : 'd-none'}">New</span>
                <span class="${(data.featured) ? 'card__tag-featured' : 'd-none'}">Featured</span>
            </section>
            <figure class="card__company-logo">
                <img class="card__company-logo__img" src="${data.logo}" alt="company logo" />
            </figure>
        </section>

        <section class="card__job-tags>

        </section>
    `

    return card;
}