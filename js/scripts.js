const types = ['person', 'place'];
const personsDetailsElement = document.getElementById('persons-details');
const placesDetailsElement = document.getElementById('places-details');
const currentStyleHref = document.getElementById('pagestyle').getAttribute('href');

const detailsElements = {
    'person': personsDetailsElement,
    'place': placesDetailsElement
};

const queues = {};


for (let type of types) {
    const elements = document.getElementsByClassName(type);
    for (let i = 0; i < elements.length; i++) {
        const id = elements[i].dataset[`${type}Id`];
        const key = `${type}-${id}`;

        if (!(key in queues)) {
            queues[key] = [];
        }

        queues[key].push(elements[i]);

        const listItem = document.createElement('span');
        // listItem.className = 'dropdown-item';
        listItem.className = 'dropdown-item dropdown-item-metadata';
        listItem.innerHTML = elements[i].innerHTML;
        listItem.dataset.referenceKey = key;

        listItem.addEventListener('click', function () {
            const queue = queues[this.dataset.referenceKey];

            if (queue && queue.length > 0) {
                const el = queue[0]; // only getting the first element
                el.style.backgroundColor = "yellow";

                try {
                    let navbarHeight = 0;

                    if (['university.css', 'styles.css', 'hippie.css'].some(css => currentStyleHref.includes(css))) {
                        navbarHeight = document.querySelector('.navbar').offsetHeight;
                    }
                    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                    var adjustedScrollPosition = elementPosition - navbarHeight;
                    
                    // default element to scroll is window
                    var elementToScroll = window;

                    // if we're in barbie style, setting custom element to scroll
                    // checking if the file of the style ends with 'barbie.css'
                    if (document.getElementById('pagestyle').href.endsWith("barbie.css")) {

                        // 1. if we're indeed in the barbie.css style,
                        //    then we want to scroll 'tv' block instead of the whole window
                        // 2. searching for 'tv' by classname 'col-lg-6'
                        // 3. document.getElementsByClassName function only knows how to return multiple elements
                        //    this is why we add [0] in the end (selecting the first from the collection)
                        elementToScroll = document.getElementsByClassName('col-lg-6')[0];
                        // it turns out that we overscroll a little bit if we use default scroll length
                        // so, we want to make the scroll length smaller
                        // for example, smaller by elementToScroll.getBoundingClientRect().top pixels
                        // elementToScroll.getBoundingClientRect().top is how far 'tv' is from the top
                        adjustedScrollPosition = elementPosition - navbarHeight - elementToScroll.getBoundingClientRect().top;
                        
                    }

                    elementToScroll.scrollTo({ top: adjustedScrollPosition, behavior: 'smooth' });

                } catch (error) {
                    console.error("Failed to scroll element into view.", error);
                }
            }
        });


        detailsElements[type].appendChild(listItem);
    }
}