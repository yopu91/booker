import apiConfig from './apiConfig';
import { BookmarkAPI } from './BookmarkAPI';

const api = {
  BookmarkAPI: new BookmarkAPI(apiConfig)
};

export default api;
