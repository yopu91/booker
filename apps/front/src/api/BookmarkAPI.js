export class BookmarkAPI {
  constructor(api) {
    this.api = api;
  }

  async get(id) {
    const respone = await this.api.get(`/bookmark/${id}`);
    return respone.data;
  }

  async getAll() {
    const repsone = await this.api.get('/bookmarks');
    return repsone.data;
  }
}
