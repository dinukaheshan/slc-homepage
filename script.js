/**
 * VIDEO JS
 * Plays and closes both videos, and restarts the videos from the beginning.
 */
function playVideo(videoId) {
    var video = document.getElementById(videoId);
    video.currentTime = 0; // Reset video to start
    video.play();
}

function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
    video.currentTime = 0;
}

document.querySelector("#play-btn-1").addEventListener("click", function () {
    playVideo("video1");
});

document.querySelector("#play-btn-2").addEventListener("click", function () {
    playVideo("video2");
});

document.querySelector("#close-btn-1").addEventListener("click", function () {
    pauseVideo("video1");
});

document.querySelector("#close-btn-2").addEventListener("click", function () {
    pauseVideo("video2");
});


/**
 * CATEGORY SLIDER JS
 */
const slider1 = new Splide('#first-slider', {
    perPage: 6,
    perMove: 1,
    gap: 50,
    pagination: false,
    breakpoints: {
        991: {
            perPage: 3,
            gap: 50,
        },
        767: {
            perPage: 2,
            gap: 5,
        }
    }
});

slider1.mount();

/**
 * REVIEW SLIDER JS
 */
const slider2 = new Splide('#second-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
    focus: 0,
    breakpoints: {
        991: {
            perPage: 1,
        },
        767: {
            perPage: 1,
        }
    }
});

slider2.mount();

btnNext.addEventListener('click', e => {
    slider2.go('+1');
});

btnPrev.addEventListener('click', e => {
    slider2.go('-1');
});


/**
 * FIRST SLIDER ICON JS
 */
const categoryPrev = document.querySelector('#category-prev');
const categoryNext = document.querySelector('#category-next');
const firstSlider = document.querySelector('#first-slider');
const splideFirst = document.querySelector('.category-header:first-child');
const splideLast = document.querySelector('.category-header:last-child');

const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            const isAriaHidden = splideFirst.hasAttribute('aria-hidden');
            if (isAriaHidden) {
                categoryPrev.style.display = 'flex';
                firstSlider.style.paddingLeft = '80px';
            } else {
                categoryPrev.style.display = 'none';
                firstSlider.style.paddingLeft = '0';
            }
        }
    }
});

const config = { attributes: true };
observer.observe(splideFirst, config);

const observerLast = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            const isAriaHidden = splideLast.hasAttribute('aria-hidden');
            if (isAriaHidden) {
                categoryNext.style.display = 'flex';
                firstSlider.style.paddingRight = '80px';
            } else {
                categoryNext.style.display = 'none';
            }
        }
    }
});

const configLast = { attributes: true };
observerLast.observe(splideLast, configLast);

// TAB JS
document.addEventListener('DOMContentLoaded', function () {
    const tabAElements = document.querySelectorAll('.tab-a');

    tabAElements.forEach(function (tabA) {
        tabA.addEventListener('click', function () {
            const dataId = this.getAttribute('data-id');

            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(function (tab) {
                tab.classList.remove('tab-active');
                if (tab.getAttribute('data-id') === dataId) {
                    tab.classList.add('tab-active');
                }
            });

            tabAElements.forEach(function (element) {
                element.classList.remove('active-a');
            });

            this.classList.add('active-a');
        });
    });
});


//CATEGORY NAMES FOR BUTTONS
const categoryName = document.querySelectorAll('.category-title');
const viewAllBtn = document.querySelectorAll('.view-all-btn');
const viewAllBtnMobile = document.querySelectorAll('.view-all-btn.mobile');

for (let i = 0; i < categoryName.length && i < viewAllBtn.length; i++) {
    const category = categoryName[i];
    const btn = viewAllBtn[i];
    btn.innerText = `Browse ${category.innerText} courses`;
}

for (let i = 0; i < categoryName.length && i < viewAllBtnMobile.length; i++) {
    const category = categoryName[i];
    const btn = viewAllBtnMobile[i];
    btn.innerText = `Browse ${category.innerText} courses`;
}