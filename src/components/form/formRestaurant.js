import React, { useContext, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { UserContext } from '../Usercontext';
import MapComponent from '../mapcomponent';
import axios from 'axios'
export default function FormRestaurant() {
  const { user } = useContext(UserContext);
  const [latlng, setLatlng] = useState({
    lat: 0,
    lng: 0
  });
  const { accessToken } = useContext(UserContext);
  const token = {
    headers: { Authorization: `Bearer ${accessToken}` }
};
  const RestaurantSchema = yup.object().shape({
    name: yup.string().required('Required'),
    address: yup.string(),
    startPrice: yup.string(),
    url: yup.string(),
  });
  return (
    <>
      <Formik
        validationSchema={RestaurantSchema}
        onSubmit={values => {
          values = { ...values, catagories: values.catagories.filter(e => e), position:{
            lat: latlng.lat,
            lon: latlng.lng
          } }
          axios.post(`https://tander-webservice.an.r.appspot.com/restaurants`, values , token)
              .then((res, err) => {
                  if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
                  else {
                      console.log(res);
                      console.log(res.data);
                      alert("Add restaurant success !")
                  }
              })
          console.log(values);
        }}
        initialValues={{
          catagories: [],
          isPartner: true,
          position: {
            lat: 0,
            lon: 0
          }
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          isValid,
          errors,
          setFieldValue,

        }) => (
            <Form noValidate onSubmit={handleSubmit} >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik01">
                  <Form.Label>Restaurant Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your restaurant name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik02">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={values.address}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                  <Form.Label>StartPrice</Form.Label>
                  <Form.Control
                    type="text"
                    name="startPrice"
                    placeholder="Enter your start price"
                    value={values.startPrice}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <h5>Catagories</h5>
              <br />
              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>FastFood</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="FastFood"
                    value={values.FastFood}
                    onChange={(event) => {
                      const value = event.target.checked ? 'fastfood' : null
                      setFieldValue('catagories.0', value)
                    }
                    }
                    checked={values.FastFood}

                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Hotpot</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Hotpot"
                    value={values.Hotpot}
                    onChange={(event) => {
                      const value = event.target.checked ? 'hotpot' : null
                      setFieldValue('catagories.1', value)
                    }
                    }
                    checked={values.Hotpot}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Japanese</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Japanese"
                    value={values.Japanese}
                    onChange={(event) => {
                      const value = event.target.checked ? 'japanese' : null
                      setFieldValue('catagories.2', value)
                    }
                    }
                    checked={values.Japanese}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Pizza</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Pizza"
                    value={values.Pizza}
                    onChange={(event) => {
                      const value = event.target.checked ? 'pizza' : null
                      setFieldValue('catagories.3', value)
                    }}
                    checked={values.Pizza}
                  />
                </Form.Group>

              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Snack</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Snacks"
                    value={values.Snacks}
                    onChange={(event) => {
                      const value = event.target.checked ? 'snacks' : null
                      setFieldValue('catagories.4', value)
                    }
                    }
                    checked={values.Snacks}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Thai</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="thai"
                    value={values.thai}
                    onChange={(event) => {
                      const value = event.target.checked ? 'thai' : null
                      setFieldValue('catagories.5', value)
                    }}
                    checked={values.thai}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>SteakHouse</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="SteakHouse"
                    value={values.SteakHouse}
                    onChange={(event) => {
                      const value = event.target.checked ? 'steakhouse' : null
                      setFieldValue('catagories.6', value)
                    }}
                    checked={values.SteakHouse}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Chinese</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Chinese"
                    value={values.Chinese}
                    onChange={(event) => {
                      const value = event.target.checked ? 'chinese' : null
                      setFieldValue('catagories.7', value)
                    }}
                    checked={values.Chinese}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Italian</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Italian"
                    value={values.Italian}
                    onChange={(event) => {
                      const value = event.target.checked ? 'italian' : null
                      setFieldValue('catagories.8', value)
                    }}
                    checked={values.Italian}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Restaurant</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Restaurant"
                    value={values.Restaurant}
                    onChange={(event) => {
                      const value = event.target.checked ? 'restaurant' : null
                      setFieldValue('catagories.9', value)
                    }}
                    checked={values.Restaurant}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Sushi</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Sushi"
                    value={values.Sushi}
                    onChange={(event) => {
                      const value = event.target.checked ? 'sushi' : null
                      setFieldValue('catagories.10', value)
                    }}
                    checked={values.Sushi}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Barbecue</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Barbecue"
                    value={values.Barbecue}
                    onChange={(event) => {
                      const value = event.target.checked ? 'barbecue' : null
                      setFieldValue('catagories.11', value)
                    }}
                    checked={values.Barbecue}
                  />
                </Form.Group>
                <pre>{JSON.stringify(latlng)}</pre>
              </Form.Row>
              <MapComponent setLatlng={setLatlng}/>
              <Button type="submit">Submit</Button>
            </Form>
          )
        }

      </Formik>
    </>
  )
}

