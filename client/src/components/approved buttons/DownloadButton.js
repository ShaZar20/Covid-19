import React from 'react';
import {FiDownload} from 'react-icons/fi';
import html2canvas from 'html2canvas'
import {  WhatsappShareButton } from 'react-share'

function saveAs(uri,filename){
    var link = document.createElement('a')
    if(typeof link.download === 'string'){

        link.href = uri
        link.download = filename

        document.body.appendChild(link);

        link.click()

        document.body.removeChild(link)
    }else{
        window.open(uri)
    }
}

const DownloadButton = () => (
    <div className="container-inCenter">
        <div onClick={()=>{
            
            html2canvas(document.getElementById("shareable")).then(function(canvas) {
                    saveAs(canvas.toDataURL(), 'file-name.png');
                });
        }} className="container-approved">
            <FiDownload />
            <button className="button-Approved">
                הורדת האישור למכשיר
            </button>
        </div>
    </div>
);

export default DownloadButton;