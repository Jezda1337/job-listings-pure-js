export const card = (data)=>{
    const card = document.createElement('section');
    card.classList.add('card');
    (data.featured) ? card.classList.add('card-border') : null;
    card.innerHTML = `
        <section class="card__job-info">
                <section>
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
            </section>
            <figure class="card__company-logo">
                <img class="card__company-logo__img" src="${data.logo}" alt="company logo" />
            </figure>
        </section>

        <section class="card__job-tags">
            <a class="card__job-tag" href="#" data-tag="${data.role}">${data.role}</a>
            <a class="card__job-tag" href="#" data-tag="${data.level}">${data.level}</a>

            ${data.languages.map(lang=> `<a class="card__job-tag" href="#" data-tag="${lang}">${lang}</a>` ).join(' ')}
            ${data.tools.map(tool => `<a class="card__job-tag" href="#" data-tag="${tool}">${tool}</a>`).join(' ')}
        </section>
    `

    return card;
}
