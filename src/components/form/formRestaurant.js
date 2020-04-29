import React, { useContext, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { UserContext } from '../Usercontext';
import MapComponent from '../mapcomponent';
import axios from 'axios'
export default function FormRestaurant() {
  const [latlng, setLatlng] = useState({
    lat: 0,
    lng: 0
  });
  const [categories, setCategories] = useState([]);
  const { accessToken } = useContext(UserContext);
  const token = {
    headers: { Authorization: `Bearer ${accessToken}` }
  };
  const toggle = (event,option) => {
    if (true) categories.push(option);
  };
  const RestaurantSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    startPrice: yup.string().required(),
    url: yup.string(),
  });
  return (
    <>
      <Formik
        validationSchema={RestaurantSchema}
        onSubmit={values => {
          values = {
            ...values, position: {
              lat: latlng.lat,
              lon: latlng.lng
            },
            categories: categories.filter((val, id, categories) => categories.indexOf(val) == id)
          }
          axios.post(`https://tander-webservice.an.r.appspot.com/restaurants`, values, token)
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
              <h5>Categories</h5>
              <br />
              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>FastFood</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="FastFood"
                    value={values.FastFood}
                    onChange={ (event)=> toggle(event.target.checked,'fastfood')}
                    checked={values.FastFood}

                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Hotpot</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Hotpot"
                    value={values.Hotpot}
                    onChange={(event) => 
                      toggle(event.target.checked,'hotpot')
                    
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
                    onChange={(event) =>toggle(event.target.checked,'japanese')}
                    checked={values.Japanese}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Pizza</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Pizza"
                    value={values.Pizza}
                    onChange={(event) => toggle(event.target.checked,'pizza')}
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
                    onChange={(event) => toggle(event.target.checked,'snacks')}
                    checked={values.Snacks}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Thai</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="thai"
                    value={values.thai}
                    onChange={(event) => toggle(event.target.checked,'thai')}
                    checked={values.thai}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>SteakHouse</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="SteakHouse"
                    value={values.SteakHouse}
                    onChange={(event) => toggle(event.target.checked,'steakhouse')}
                    checked={values.SteakHouse}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Chinese</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Chinese"
                    value={values.Chinese}
                    onChange={(event) => toggle(event.target.checked,'chinese')}
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
                    onChange={(event) => toggle(event.target.checked,'italian')}
                    checked={values.Italian}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Restaurant</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Restaurant"
                    value={values.Restaurant}
                    onChange={(event) =>toggle(event.target.checked,'restaurant')}
                    checked={values.Restaurant}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Sushi</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Sushi"
                    value={values.Sushi}
                    onChange={(event) =>toggle(event.target.checked,'sushi')}
                    checked={values.Sushi}
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                  <Form.Label>Barbecue</Form.Label>
                  <Form.Control
                    type="checkbox"
                    name="Barbecue"
                    value={values.Barbecue}
                    onChange={(event) =>toggle(event.target.checked,'barbecue')}
                    checked={values.Barbecue}
                  />
                </Form.Group>
                <pre>{JSON.stringify(latlng)}</pre>
              </Form.Row>
              <MapComponent setLatlng={setLatlng} />
              <Button type="submit">Submit</Button>
            </Form>
          )
        }
      </Formik>
    </>
  )
}

