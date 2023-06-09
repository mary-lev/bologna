const types = ['person', 'place'];
const personsDetailsElement = document.getElementById('persons-details');
const placesDetailsElement = document.getElementById('places-details');

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
        listItem.className = 'dropdown-item';
        listItem.innerHTML = elements[i].innerHTML;
        listItem.dataset.referenceKey = key;

        listItem.addEventListener('click', function () {
            const queue = queues[this.dataset.referenceKey];
        
            if (queue && queue.length > 0) {
                const el = queue[0]; // only getting the first element
                el.style.backgroundColor = "yellow";
        
                try {
                    let navbarHeight = 0;
                    const currentStyleHref = document.getElementById('pagestyle').getAttribute('href');
                    console.log(currentStyleHref);
                    if (currentStyleHref.includes('university.css') | currentStyleHref.includes('styles.css')) {
                        navbarHeight = document.querySelector('.navbar').offsetHeight;
                    }
                    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                    const adjustedScrollPosition = elementPosition - navbarHeight;
        
                    window.scrollTo({ top: adjustedScrollPosition, behavior: 'smooth' });
        
                } catch (error) {
                    console.error("Failed to scroll element into view.", error);
                }
            }
        });
        

        detailsElements[type].appendChild(listItem);
    }
}
