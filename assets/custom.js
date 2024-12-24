document.addEventListener("DOMContentLoaded", function() {
    const article = document.querySelector('article.page');

    const h2Tags = article.querySelectorAll('h2');

    h2Tags.forEach(h2 => {
        let element = h2.nextElementSibling;
        const blockquotes = [];
        while (element && element.tagName !== 'H2') {
            if (element.tagName === 'H3') {
                let h3 = element;
                element = element.nextElementSibling;
                h3.remove(); // Remove the h3 element
            } else if (element.tagName === 'BLOCKQUOTE') {
                element.classList.add('testimonial');
                blockquotes.push(element);
                element = element.nextElementSibling;
            } else {
                element = element.nextElementSibling;
            }
        }

        // Randomly hide all but three blockquotes
        while (blockquotes.length > 3) {
            const randomIndex = Math.floor(Math.random() * blockquotes.length);
            blockquotes[randomIndex].style.display = 'none';
            blockquotes.splice(randomIndex, 1);
        }
    });
});