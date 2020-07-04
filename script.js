/**
 * Author: Max Van Houcke
 * Main script for Gust Design
 */


/**
 * Main function
 */
document.addEventListener("DOMContentLoaded", function(event) {
    initializeFade();
    const tippySettings = {
        theme: 'light-border',
        trigger: 'click',
        placement: 'top'
    };

    tippySettings.content = `<p class="text-center">
            <strong>Max Van Houcke</strong>
            <br>Software ontwikkelaar en zoon van Vicky
        </p>`;

    tippy('#max', tippySettings);

    tippySettings.content = `<p class="text-center">
            <strong>Randy</strong>
            <br>Upholstery Assistant
        </p>`;
    tippy('#randy', tippySettings);

    tippySettings.content = `<p class="text-center">
            <strong>Vicky Vinck</strong>
            <br>Interieurstyliste
        </p>`;
    tippy('#vicky', tippySettings);

    tippySettings.content = `<p class="text-center">
            <strong>Bram Verheyen</strong>
            <br>Product ontwikkelaar en zoon van Bea
        </p>`;
    tippy('#bram', tippySettings);

    tippySettings.content = `<p class="text-center">
            <strong>Bea Joppen</strong>
            <br>Upholstery Specialiste
        </p>`;
    tippySettings.hideOnClick = 'toggle';
    const tippyBea = tippy('#bea', tippySettings)[0];
    tippyBea.show();
});


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

