import React from 'react'

const LatestAstronomy = ({data}) => {
    console.log(data, "first")
  return (
    <div className='astronomy'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    <div className='info'>
                        <p className='title'>{data?.title}</p>
                        <p className='explanation'>{data?.explanation}</p>
                        <p className='copy-right'>{data?.copyright}</p>
                    </div>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <div>
                        <img src={data?.url} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestAstronomy