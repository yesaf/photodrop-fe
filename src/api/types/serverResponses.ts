export type Album = {
    "albumId": string,
    "name": string,
    "location": string,
    "createdAt": string,
    "userId": string
}

export type AlbumsResponse = {
    data: Album[],
}

export type CreateAlbumResponse = {
    "message": string,
    "album": Album,
}
