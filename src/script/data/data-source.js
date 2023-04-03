class DataSource {
    static searchPlayer(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }
}

export default DataSource;