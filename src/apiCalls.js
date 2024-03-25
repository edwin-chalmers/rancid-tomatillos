function fetchData(endpoint) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v23/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint}`)
        }
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => {
        console.log(`Error fetching ${endpoint}:`, error);
        throw error; 
    });
}

function fetchSingleMovie(endpoint) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Oopsie poopsie')
        }
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch(error => {
        throw error;
    })
}

export { fetchData, fetchSingleMovie } 