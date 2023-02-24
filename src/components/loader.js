import React from 'react'

const Loader = ({padding}) => {
  return (
    <div className={`text-center ${padding}`}> 
        <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        Loading...
        </button>
    </div>
  )
}

export default Loader