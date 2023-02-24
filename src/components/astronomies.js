import React, { useState } from 'react'
import Popup from './popup'

const Astronomies = ({data}) => {
    const [modal, setModal] = useState(false)
    const [state, setState] = useState(null)
    
    const handleClick = (data) => {
        setModal(true)
        setState(data)
    }
    
  return (
    <div className='container-fluid'>
        <div className="astronomies_wrapper">
            {data && data?.length > 0 ?
                data?.slice(1)?.map(item => {
                    return (
                        <div className='astronomy_boz' key={item?.title} onClick={() => handleClick(item)}>
                                {item?.media_type == "image" ?
                                    <img src={item?.url} />: 
                                    <iframe 
                                    src={item?.url}
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen="allowfullscreen"
                                    >
                                    </iframe>
                                }
                                <div className="info">
                                    <h2 className='title'>{item?.title}</h2>
                                    <p className='desc'>{item?.date}</p>
                                </div>
                        </div>
                    )
                }) :
                <p >No records</p>       
            }
        </div>
        <Popup handleClose={() => setModal(false)} show={modal} data={state}/>
    </div>
  )
}

export default Astronomies