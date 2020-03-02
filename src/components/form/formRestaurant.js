import React, { Component } from 'react'
import {  Form } from 'react-bootstrap'

export default class formRestaurant extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Telephone Number</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>URL</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Catagories</label>

                        <Form>
                            {['checkbox'].map(type => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Buffet" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Japanese Food" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Dessert" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Shabu" type={type} id={`inline-${type}-2`} />
                                </div>
                            ))}
                        </Form>
                    </div>

                    <div className="form-group">
                        <div class="custom-file">
                            <label>Picture</label>
                            <input type="file" class="custom-file-input" id="customFile" />
                            <label class="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
