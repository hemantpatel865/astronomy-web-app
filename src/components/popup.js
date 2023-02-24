import React from 'react'
import '../assets/css/popup.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dummy from '../assets/images/dummy.jpeg'

const Popup = ({show, handleClose, data}) => {
  return (
   
    <Modal
    show={show}
    onHide={() => handleClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
        <div className='modal-wrapper'>
            <div className='info'>
                <p className='title'>{data?.title}</p>
                <p className='explanation comment'>{data?.explanation}</p>
                <p className='copy-right'>{data?.copyright}</p>
            </div>
            <div className='image'>
                {data?.media_type == "image" ?
                <img src={data?.media_type == "image" ? data?.url : dummy} className="img-fluid"/>:
                    <iframe 
                        src={data?.url}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="allowfullscreen"
                        >
                    </iframe>
                }
            </div>
        </div>
      </Modal.Body>
      <div style={{ textAlign: "center"}} className="pb-3">
        <Button onClick={() => handleClose()}>Close</Button>
      </div>
    </Modal>
    
  )
}

export default Popup