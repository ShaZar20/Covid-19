import React from 'react';
import {FiDownload} from 'react-icons/fi';

const DownloadButton = () => (
    <div className="container-inCenter">
        <div className="container-approved">
            <FiDownload />
            <button className="button-Approved">
                הורדת האישור למכשיר
            </button>
        </div>
    </div>
);

export default DownloadButton;