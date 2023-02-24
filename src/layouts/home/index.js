import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../redux/actions'
import Astronomies from '../../components/astronomies'
import LatestAstronomy from '../../components/LatestAstronomy'
import moment from 'moment'
import Loader from '../../components/loader'


const Home = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true)
  const [show, setShow] = useState(false)
  const ASTRONOMIES_LIST = useSelector((state) => state?.homepage?.astronomiesList)
  const DATE = useSelector((state) => state?.homepage?.date)
  
  

  const handleFetch = () => {
    setShow(true)
    const start_date = moment(DATE, "YYYY-MM-DD").add(1, "days").format("YYYY-MM-DD")
    const end_date = moment(start_date, "YYYY-MM-DD").add(7, "days").format("YYYY-MM-DD")
    dispatch(Actions.getAstronomiesList(handleLoader, start_date, end_date))
    dispatch(Actions.setDate(end_date))
  }

  const handleLoader = () => {
    setLoader(false)
    setShow(false)
  }

  useEffect(() => {
    dispatch(Actions.getAstronomiesList(handleLoader, "2022-10-01", "2022-10-09"))
    dispatch(Actions.setDate("2022-10-09"))
  }, [])

  return (
    <>
      <Navbar />
      {loader ? 
        <Loader padding="pt-5"/>: 
        <>
          <LatestAstronomy data={ASTRONOMIES_LIST[0]}/>
          <Astronomies data={ASTRONOMIES_LIST} handleFetch={handleFetch}/>
          <div className='text-center pb-4'>
          {show ? 
            <Loader padding="pb-3"/>: 
            <button className='btn btn-primary' onClick={() => handleFetch()}>Load more</button>}
          </div>
        </>
        }
    </>

  )
}

export default Home