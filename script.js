/**
 * Author: Max Van Houcke
 * Main script for Antwerp Studio
 */


/**
 * Main function
 */
document.addEventListener("DOMContentLoaded", function(event) {
    showFadeOnLoad();
});


function showFadeOnLoad() {
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        initializeFade();
        postLoadImages();
    });
}


function postLoadImages() {
    const desktop = window.matchMedia("(min-width: 1000px)").matches;

    let toBeLoaded = desktop ? DESKTOP_IMGS : MOBILE_IMGS;
    for (let img of toBeLoaded) {
        loadImg(img, addToPage)
    }

    function loadImg(src, callback) {
        let img = document.createElement('img');
        img.src = src;
        if (img.complete) {
            callback(img)
        } else {
            img.addEventListener('load', () => callback(img))
        }
    }

    function addToPage(img) {
        let images;
        if (desktop) {
            images = document.querySelector('.fade .desktop');
        } else {
            images = document.querySelector('.fade .mobile');
        }
        images.prepend(img);
    }
}

/**
 * Start the fading of the pictures
 */
function initializeFade() {
    window.setInterval(function () {

        const desktop = window.matchMedia("(min-width: 1000px)").matches;

        let images;
        if (desktop) {
            images = document.querySelectorAll('.fade .desktop img');
        } else {
            images = document.querySelectorAll('.fade .mobile img');
        }

        let changed = false;
        for (let i = images.length - 1; i > 0; i--) {
            if (!images[i].classList.contains('hide')) {
                images[i].classList.add('hide');
                changed = true;
                break;
            }
        }

        if (!changed) {

            // Show last one
            const last = images[images.length - 1];
            last.classList.remove('hide');

            const showAll = function () {
                images.forEach(function (item) {
                    item.classList.add('no-transition');
                    item.classList.remove('hide');
                    item.offsetHeight;
                    item.classList.remove('no-transition');
                });
            };

            // Show all after transition is done
            window.setTimeout(showAll, 1000);
        }

    }, 2000);
}

