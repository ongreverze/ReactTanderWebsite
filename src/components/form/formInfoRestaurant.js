import React from 'react'
import axios from 'axios'

export default function formInfoRestaurant() {
  axios.get('https://tander-webservice.an.r.appspot.com/restaurants/id/ไอดีร้าน')
    .then(res => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <div>
      
    </div>
  )
}

