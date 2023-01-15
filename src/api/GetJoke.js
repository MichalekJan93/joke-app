
export const GetJoke = async (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
}