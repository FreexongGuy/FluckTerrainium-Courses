function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance){
        // scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // hefvjkfgdsehjkffgfhklhjsfdsfgdhkdjjjjjjjkgjfdjjjjj
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

const button = document.querySelector('.btn');

// Add event listener to the button
button.addEventListener('click', function() {
    // Redirect to the given URL
    window.location.href = 'https://forms.gle/vf8J4UiUkgipBUUg7';
});