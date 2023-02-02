import defaultClient from '../http/default';
import { IAlbumsResponse, IAlbumByIdResponse, ICreateAlbumResponse } from '../types/serverResponses';

class AlbumService {

    async getAlbums(): Promise<IAlbumsResponse> {
        const { data } = await defaultClient.get('/album/all');
        return data;
    }

    async getAlbum(id: string): Promise<IAlbumByIdResponse | { data: null}> {
        const { data } = await defaultClient.get(`/album/get-album/${id}`);

        return data;
    }

    async createAlbum(name: string, location: string, date: Date): Promise<ICreateAlbumResponse> {
        const datapicker = date.getDay() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        const { data } = await defaultClient.post('/album/create-album', {
            name,
            location,
            datapicker,
        }).then((response) => {
            return response;
        });
        return data;
    }

}

export default new AlbumService();
