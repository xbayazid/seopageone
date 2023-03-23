import React, { useState } from 'react';
import Modal from 'react-modal';
import { useQuery } from 'react-query';

Modal.setAppElement('#root');

const FilerUploader = ({ setModalIsOpen, modalIsOpen, id }) => {
  const [selectedFile, setSelectedFile] = useState(null);


  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleUpload() {
    const files = {
      selectedFile, id
    }
    fetch('https://seopageone-server-bayaziddeveloper-gmailcom.vercel.app/files', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(files)
    })
      .then(res => res.json())
      .then(result => {


        setModalIsOpen(false);
      })
  }

  function handleCancel() {
    setSelectedFile(null);
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className=''>
        <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <div className='w-2/3 mx-auto'>
            <h2 className='upload-text'>Upload a File</h2>
            <input className='modal-input' type="file" onChange={handleFileChange} />
            <div>
              <button className='modal-button' onClick={handleUpload}>Upload</button>
              <button className='modal-button' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FilerUploader;