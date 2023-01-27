import Uppy, { UppyFile } from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import { useState } from 'react';
import { baseUrl } from '../../../../../api/http/default';
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


function UploadPhotos() {
    const [uppy] = useState(() => {
        return new Uppy({ id: 'uppy', debug: true, autoProceed: true, allowMultipleUploads: true })
            .use(XHRUpload, {
                endpoint: baseUrl + '/album/upload-photos',
                formData: true,
                method: 'post',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                fieldName: 'files',
            })
            .on('file-added', (file: UppyFile) => {
                uppy.setFileMeta(file.id, {
                    album: 'ABCD',
                })
            })
    });

    return (
        <>
            <Dashboard
                uppy={uppy}
                plugins={[]}
                metaFields={[
                    { id: 'name', name: 'Name', placeholder: 'file name' },
                    { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' },
                ]}
            />
        </>
    );
}

export default UploadPhotos;
