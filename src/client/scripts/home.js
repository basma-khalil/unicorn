/* ---- Start Animation On Scroll ---- */
AOS.init({
    duration: 600,
    easing  : 'ease-in-sine',
    offset  : 200,
});

// Change element fade direction if media query matches
const changeAos = (mq) => {

    if (mq.matches) {

        if (document.dir === 'rtl') {

            document.querySelector('figure.change-aos').setAttribute('data-aos', 'fade-left');
            document.querySelector('.post.change-aos').setAttribute('data-aos', 'fade-right');

        } else {

            document.querySelector('figure.change-aos').setAttribute('data-aos', 'fade-right');
            document.querySelector('.post.change-aos').setAttribute('data-aos', 'fade-left');
        }
    }
};

const mqBreakpoint = window.matchMedia('(min-width: 768px)');
changeAos(mqBreakpoint);
mqBreakpoint.addEventListener('change', changeAos);


/* ---- Start Calling Splide Sliders ---- */
if (document.dir === 'rtl') {

    Splide.defaults = {
        direction: 'rtl',
        i18n     : {
            prev: 'السابق',
            next: 'التالي',
        },
    };
}


new Splide('#articles__slider', {
    perPage    : 3,
    gap        : '2rem',
    pagination : false,
    lazyLoad   : 'nearby',
    breakpoints: {
        1200 : {
            perPage: 2,
        },
        768 : {
            perPage: 1,
        },
    },
}).mount();

new Splide('#clients__slider', {
    width      : '80%',
    perPage    : 6,
    gap        : '2rem',
    pagination : false,
    lazyLoad   : 'nearby',
    breakpoints: {
        992: {
            perPage: 3,
        },
        576: {
            width  : '90%',
            perPage: 2,
        },
    },
}).mount();

new Splide('#blog__slider', {
    perPage    : 3,
    gap        : '2rem',
    pagination : false,
    lazyLoad   : 'nearby',
    breakpoints: {
        992: {
            perPage: 2,
        },
        576: {
            perPage: 1,
        },
    },
}).mount();

new Splide('#reviews__slider', {
    autoplay  : true,
    type      : 'loop',
    pagination: false,
    interval  : 3000,
    lazyLoad  : 'nearby',
    classes   : {
        arrow: 'splide__arrow sr--only',
    },
}).mount();


/* ---- Start Facts Counter When It Is Scrolled To The Viewport ---- */
const inViewportCounter = () => {

    // Check if the counter section in the viewport
    const isInViewport = (element) => {

        const rect = element.getBoundingClientRect();

        return (
            rect.top    >= 0 &&
            rect.left   >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right  <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


    const numbers  = document.querySelector('.numbers'),
          counters = [...document.querySelectorAll('.numbers .counter')],
          speed    = 50; // The higher the slower


    counters.forEach(counter => {

        if (isInViewport(numbers)) {


            const updateCount = () => {

                const target = +counter.getAttribute('data-target'),
                      count  = +counter.innerText,
                      inc    = target / speed; // Lower inc to slow and higher to slow


                // Check if target is reached
                if (count < target) {

                    // Add inc to count and output in counter
                    const total = count + inc;

                    counter.innerText = total.toLocaleString();

                    // Call function every ms
                    setTimeout(updateCount, 100);

                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCount();


        } else {

            counter.innerText = 0;
        }
    });
};

window.addEventListener('scroll', inViewportCounter);