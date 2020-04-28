import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../Usercontext';


export default function FormInfoPromotion({ promoId }) {
  const { accessToken } = useContext(UserContext);
  const [promotion, setPromotion] = useState({
    promotionName: '',
    description: '',
    validTime: '',
    endTime: '',
  });
  const [image,setImage] = useState();
  const token = {
    headers: { Authorization: `Bearer ${accessToken}` }
  };
  console.log(promoId);
  const getDataPromotion = () => {
    axios.get(`https://tander-webservice.an.r.appspot.com/promotions/id/${promoId}`, token)
      .then(res => {
        console.log(res)
        setPromotion({
          promotionName: res.data.promotionName,
          description: res.data.description,
          validTime: res.data.validTime.substring(0, 10),
          endTime: res.data.endTime.substring(0, 10)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const getImagePromotion = () => {
    axios.get(`https://tander-webservice.an.r.appspot.com/images/promotions/${promoId}`, token)
      .then(res => {
        console.log(res)
        setImage(res)
        console.log(image)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  useEffect(() => {
    getDataPromotion()
  }, [])
  useEffect(() => {
    getImagePromotion()
  }, [])
  

  return (
    <div>
      <label>{console.log(promotion)}</label>
      <label>Promotion Name : {promotion.promotionName}</label><br />
      <label>Description : {promotion.description}</label><br />
      <label>ValidTime (YYYY/MM/DD) : {promotion.validTime}</label><br />
      <label>EndTime (YYYY/MM/DD) : {promotion.endTime}</label><br />
      <img src ={image} />
    </div>
  )
}

