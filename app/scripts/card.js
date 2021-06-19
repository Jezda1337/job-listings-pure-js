export const card = (data)=>{
    const card = document.createElement('section');
    const tags = [data.role,data.level,data.language,data.tools];
    console.log(typeof data.languages);
    card.classList.add('card');
    (data.featured) ? card.classList.add('card-border') : null;
    card.innerHTML = `
        <section class="card__job-info">
            <section class="card__job-header">
                <h2 class="card__company-name">${data.company}</h2>
                <span class="${(data.new) ? 'card__tag-new' : 'd-none'}">New</span>
                <span class="${(data.featured) ? 'card__tag-featured' : 'd-none'}">Featured</span>
            </section>
            <h2 class="card__position">${data.position}</h2>
            <section class="card__position-details">
                <span class="card__position-detail">${data.postedAt}</span>
                <span class="card__position-detail">${data.role}</span>
                <span class="card__position-detail">${data.location}</span>
            </section>
            <figure class="card__company-logo">
                <img class="card__company-logo__img" src="${data.logo}" alt="company logo" />
            </figure>
        </section>

        <section class="card__job-tags">
            <a class="card__job-tag" href="#">${data.role}</a>
            <a class="card__job-tag" href="#">${data.level}</a>

            ${data.languages.map(lang=> `<a class="card__job-tag" href="#">${lang}</a>` ).join(' ')}
            ${data.tools.map(tool => `<a class="card__job-tag" href="#">${tool}</a>`).join(' ')}
        </section>
    `

    return card;
}


// role, level, languages, tools

