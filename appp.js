(function initializeSlider() {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    let countItem = items.length;
    let itemActive = 0;

 // button event
    next.onclick = function () {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
            itemActive = 0;
        }
        showSlider();
    };

    // Previous button event
    prev.onclick = function () {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
            itemActive = countItem - 1;
        }
        showSlider();
    };

    // Auto-run slider
    let refreshInterval = setInterval(() => {
        next.click();
    }, 5000);

    function showSlider() {
        // Remove old active class
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        if (itemActiveOld) itemActiveOld.classList.remove('active');
        if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

        // Add active class to new items
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
        setPositionThumbnail();

        // Reset auto slider interval
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 5000);
    }

    function setPositionThumbnail() {
        let thumbnailActive = document.querySelector('.thumbnail .item.active');
        if (thumbnailActive) {
            let rect = thumbnailActive.getBoundingClientRect();
            if (rect.left < 0 || rect.right > window.innerWidth) {
                thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
            }
        }
    }

    // Click on thumbnails to change slider
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });
})();

// Slide Functionality
(function initializeSlide() {
    let nexts = document.querySelector('.nexts');
    let prevs = document.querySelector('.prevs');

    nexts.addEventListener('click', function () {
        let itemss = document.querySelectorAll('.slide .items');
        if (itemss.length) {
            document.querySelector('.slide').appendChild(itemss[0]); // Move first item to the end
        }
    });

    prevs.addEventListener('click', function () {
        let itemss = document.querySelectorAll('.slide .items');
        if (itemss.length) {
            document.querySelector('.slide').prepend(itemss[itemss.length - 1]); // Move last item to the start
        }
    });
})();
