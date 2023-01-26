import defaultClient from '../http/default';

export default class AlbumService {

    async getAlbums() {
        const { data } = await defaultClient.get('/album/all');
        return data;
    }

    async getAlbum(id: string) {
        const { data } = await defaultClient.get(`/album/get-album/${id}`);
        return data;
    }

    async createAlbum(name: string, location: string, date: string) {
        const { data } = await defaultClient.post('/albums', {
            name,
            location,
            date,
        });
        return data;
    }

}
