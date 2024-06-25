// // Debounce function
// function debounce(func, delay) {
//     let timeoutId;
//     return function(...args) {
//         if (timeoutId) clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }


// Throttle function
function throttle(func, interval) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Function to simulate an API search request
function performSearch(query) {
    console.log(`Searching for: ${query}`);
    // Simulating an API call with a timeout
    setTimeout(() => {
        const results = [`Result 1 for ${query}`, `Result 2 for ${query}`, `Result 3 for ${query}`];
        displayResults(results);
    }, 500);
}


// Function to display search results
function displayResults(results) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = results.map(result => `<p>${result}</p>`).join('');
}

// // Debounced version of performSearch
// const debouncedSearch = debounce((query) => {
//     performSearch(query);
// }, 500);

// Throttled version of performSearch
const throttledSearch = throttle((query) => {
    performSearch(query);
}, 1000);


// Event listener for the search input
document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value;
    //debouncedSearch(query);
    throttledSearch(query);
});