import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import { memo, useMemo, useState } from 'react';
import { baseUrl } from '../../../../../api/http/default';
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import { useParams } from 'react-router-dom';

interface IUploadDashboardProps {
    showDashboard: boolean;
    phonesList: string[];
}

function UploadDashboard({ showDashboard, phonesList }: IUploadDashboardProps) {
    const albumId = useParams().id;

    const phonesListStr = useMemo(() => phonesList.join(','), [phonesList]);

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
            .on('file-added', () => {
                uppy.setMeta({
                    album: albumId,
                    clients: phonesListStr,
                })
            })
    });

    return (
        <>
            {
                showDashboard ?
                    <Dashboard
                        uppy={uppy}
                        height={400}
                        width={'100%'}
                        style={{
                            width: '100%',
                            maxWidth: '100%'
                        }}

                        plugins={[]}
                        metaFields={[
                            { id: 'name', name: 'Name', placeholder: 'file name' },
                            { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' },
                        ]}
                    />
                    :
                    <p>Add phones to upload photos</p>
            }
        </>
    );
}

export default memo(UploadDashboard);
