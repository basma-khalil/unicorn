/* ---- Start Portfolio Carousel ---- */
const portfolioCarousel = new Splide('#portfolio__slider', {
    perPage    : 3,
    padding    : {right: '10rem'},
    lazyLoad   : 'nearby',
    classes    : {
        arrow: 'splide__arrow sr--only',
    },
    breakpoints: {
        856  : {
            perPage: 2,
            padding: {right: 0, left: 0},
        },
        438  : {
            perPage: 1,
        },
    },
});


const buildPortfolioCarousel = () => {

    const fragment         = document.createDocumentFragment(),
          documentLang     = document.documentElement.lang,
          splideTrack      = document.querySelector('.portfolio__slider .splide__track'),
          activeTags       = [...document.querySelectorAll('.projects .tag.active')],
          activeTagsValues = activeTags.map(tag => tag.dataset.value),
          splideList       = document.createElement('ul'),
          imgs             = [
            {src: './images/portfolio-1.webp', alt: 'Portfolio 1', arAlt: 'سابقة الأعمال 1', dataTag: 'travel mystery'},
            {src: './images/portfolio-2.webp', alt: 'Portfolio 2', arAlt: 'سابقة الأعمال 2', dataTag: 'art'},
            {src: './images/portfolio-3.webp', alt: 'Portfolio 3', arAlt: 'سابقة الأعمال 3', dataTag: 'illusion'},
            {src: './images/portfolio-4.webp', alt: 'Portfolio 4', arAlt: 'سابقة الأعمال 4', dataTag: 'mystery'},
            {src: './images/portfolio-5.webp', alt: 'Portfolio 5', arAlt: 'سابقة الأعمال 5', dataTag: 'art paintings'},
          ];


    imgs.forEach(img => {

        const showImgCheck = activeTagsValues.some(value => img.dataTag.includes(value));

        // Check if there are no active buttons, show all images
        // Or if there are active buttons, show only the clicked tag images
        if ((activeTags.length === 0) || (showImgCheck)) {

            const slide =
                `<li class="splide__slide" data-tag="${img.dataTag}">
                    <a href="#" title="${documentLang === 'ar' ? `الذهاب إلى ${img.arAlt}` : `Go To ${img.alt}`}" target="_blank" rel="nofollow">
                        <img src="${documentLang === 'ar' ? `../${img.src}` : img.src}" alt="${documentLang === 'ar' ? img.arAlt : img.alt}" loading="lazy">
                    </a>
                </li>`;

            splideList.insertAdjacentHTML('beforeend', slide);
        }
    });


    splideList.classList.add('splide__list');
    fragment.appendChild(splideList);
    splideTrack.appendChild(fragment);
    portfolioCarousel.mount();
};

buildPortfolioCarousel();


const resetPortfolioCarousel = () => {

    portfolioCarousel.destroy();
    document.querySelector('.portfolio__slider .splide__list').remove();
    buildPortfolioCarousel();
};


/* ---- Start Filter Portfolio Carousel Images Based On Clicking Tag ---- */
const filterPortfolioCarousel = (evt) => {

    const clickedTag = evt.target;

    // Check if button is clicked
    if (clickedTag.nodeName === 'BUTTON') {

        clickedTag.parentElement.classList.toggle('active');

        resetPortfolioCarousel();
    }
}

// Add Filter Function To Buttons Parent Instead Of Every Button For More Performance
document.querySelector('.projects .tags').addEventListener('click', filterPortfolioCarousel);
