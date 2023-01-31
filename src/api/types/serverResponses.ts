export type IAlbum = {
    "albumId": string,
    "name": string,
    "location": string,
    "createdAt": string,
    "userId": string
}

export type IPhoto = {
    "photoId": string,
    "unlockedPhotoUrl": string,
    "unlockedThumbnailUrl": string,
    "lockedPhotoUrl": string,
    "lockedThumbnailUrl": string,
    "createdAt": string,
    "albumId": string,
    "clients": string, // to be split by comma
}

export type IAlbumWithPhotos = IAlbum & {
    "photos": IPhoto[]
}

export type IAlbumByIdResponse = {
    data: IAlbumWithPhotos
}

export type IAlbumsResponse = {
    data: IAlbum[],
}

export type ICreateAlbumResponse = {
    "message": string,
    "album": IAlbum,
}
