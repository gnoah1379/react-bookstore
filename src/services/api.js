const API_KEY = "d3d17dfca9c230d6b2dab143ec713e31";
const BASE_URL = "https://api.themoviedb.org/3";

export const getAllBooks = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

export const searchBooks = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}