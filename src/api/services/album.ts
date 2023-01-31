import defaultClient from '../http/default';
import { AlbumsResponse, CreateAlbumResponse } from '../types/serverResponses';

class AlbumService {

    async getAlbums(): Promise<AlbumsResponse> {
        const { data } = await defaultClient.get('/album/all');
        return data;
    }

    async getAlbum(id: string): Promise<AlbumsResponse> {
        const { data } = await defaultClient.get(`/album/get-album/${id}`);

        return data;
    }

    async createAlbum(name: string, location: string, date: Date): Promise<CreateAlbumResponse> {
        const datapicker = date.getDay() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        console.log(datapicker);
        const { data } = await defaultClient.post('/album/create-album', {
            name,
            location,
            datapicker,
        }).then((response) => {
            console.log(response);
            return response;
        });
        return data;
    }

}

export default new AlbumService();
