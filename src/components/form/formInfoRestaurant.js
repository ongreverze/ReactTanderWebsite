import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap';
import { UserContext } from '../Usercontext';


export default function FormInfoRestaurant({ restid }) {
  const { accessToken } = useContext(UserContext);
  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    startprice: '',
  });
  console.log(restid);
  const getDataRestaurant = () => {
    const token = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
    axios.get(`https://tander-webservice.an.r.appspot.com/restaurants/id/${restid}`, token)
      .then(res => {
        console.log(res)
        setRestaurant({
          name: res.data.name,
          address: res.data.address,
          startprice: res.data.startPrice,
        })


      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getDataRestaurant()
  }, [])

  return (
    <div>
      <label>{console.log(restaurant)}</label>
      <label>Name: {restaurant.name}</label><br />
      <label>Address : {restaurant.address}</label><br />
      <label>Start Price : {restaurant.startprice}</label><br />
    </div>
  )
}

