const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const getQuoteButton = document.getElementById('getQuoteButton');
const categorySelect = document.getElementById('category-select');


getQuoteButton.addEventListener('click', () => {
    fetchQuote();
});

function fetchQuote() {
    const apiKey = 'IKUr8rqd/m/bDQ1cZ2EaAQ==wHThbpwmnkNVlwPI';
    const category = categorySelect.value;; 

    fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
        headers: {
            'X-Api-Key': apiKey,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {;
            quoteText.textContent = `"${data[0].quote}"`;
            quoteAuthor.textContent = `- ${data[0].author}`;
            
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
            quoteText.textContent = `"Dreams breathe life into men and can cage them in suffering. Men live and die by their dreams, but long after they're abandoned, they still smolder deep in men's hearts."`;
            quoteAuthor.textContent = '- Griffith';
        });
}

fetchQuote();