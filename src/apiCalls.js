

function fetchData(endpoint) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        else {return response.json()}
    })
    .catch(error => {
        console.log(`Error fetching ${endpoint}:`, error);
        throw error; 
    });
}

export { fetchData } 