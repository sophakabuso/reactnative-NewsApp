import axios from 'axios';

const API_KEY = '396abf32f7f043aab4ca5676ea4352ce';
const BASE_URL = 'https://newsapi.org/v2/';

const NewsAPI = {
  getTopHeadlines: async (category) => {
    try {
      const response = await axios.get(
        `${BASE_URL}top-headlines?category=${category}&apiKey=${API_KEY}&language=en`
      );
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  },
};

export default NewsAPI;
