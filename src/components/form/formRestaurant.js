import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { UserContext } from '../Usercontext';

export default function FormRestaurant() {
    const { user } = useContext(UserContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [url, setUrl] = useState('');
    const [isBuffet, setBuffet] = useState(false);
    const [isShabu, setShabu] = useState(false);
    const [isJapaneseFood, setJapaneseFood] = useState(false);
    const [isFastFood, setFastFood] = useState(false);

    const changeNameHandler = e => {
        setName(e.target.value);
    }
    const changeAddressHandler = e => {
        setAddress(e.target.value);
    }
    const changeTelHandler = e => {
        setTelephone(e.target.value);
    }
    const changeURLHandler = e => {
        setUrl(e.target.value);
    }
    const onChangeBuffet = () => {
        setBuffet(!isBuffet);

    }
    const onChangeJapan = () => {
        setJapaneseFood(!isJapaneseFood);

    }
    const onChangeShabu = () => {
        setShabu(!isShabu);

    }
    const onChangeFastFood = () => {
        setFastFood(!isFastFood);

    }


    const submitHandle = e => {
        // const { history } = this.props;
        e.preventDefault();
        

        const restaurant = {
            name: name,
            address: address,
            telephone: telephone,
            url: url,
            user: user
        }

        console.log(restaurant);
        // axios.post(``, restaurant)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ loggedIn: true });
        //         history.push('/restaurant')
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
    return (
        <>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name Restaurant" onChange={changeNameHandler} value={name} />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={changeAddressHandler} value={address}></textarea>
                </div>
                <div className="form-group">
                    <label>Telephone Number</label>
                    <input type="text" className="form-control" placeholder="XX-XXX-XXXX" onChange={changeTelHandler} value={telephone} />
                </div>

                <div className="form-group">
                    <label>URL</label>
                    <input type="email" className="form-control" placeholder="Enter URL" onChange={changeURLHandler} value={url} />
                </div>
                <label>Catagories</label>
                <div className="form-check" >
                    <div>
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isBuffet}
                                onChange={onChangeBuffet}
                                className="form-check-input"
                                value={isBuffet}

                            />
                                    Buffet
                </label>
                    </div><div>
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isFastFood}
                                onChange={onChangeFastFood}
                                className="form-check-input"


                            />
                                    Fastfood
                </label>
                    </div><div>
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isJapaneseFood}
                                onChange={onChangeJapan}
                                className="form-check-input"

                            />
                                    Japanese food
                </label></div>
                    <div>
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isShabu}
                                onChange={onChangeShabu}
                                className="form-check-input"

                            />
                                    Shabu
                </label></div>


                </div>
                <br />

                <div className="form-group">
                    <div class="custom-file">
                        <label>Picture</label>
                        <input type="file" class="custom-file-input" id="customFile" />
                        <label class="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                </div>
            </form>

            <Button variant="primary" onClick={submitHandle}>
                Save Changes
              </Button>

        </>
    )
}

// export default class formRestaurant extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             address: '',
//             telephone: '',
//             url: '',
//             Buffet:false,
//             Shabu:false,
//             JapaneseFood:false,
//         }

//     }
//     changeNameHandler = event => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     changeAddressHandler = event => {
//         this.setState({
//             address: event.target.value
//         })
//     }
//     changeTelHandler = event => {
//         this.setState({
//             telephone: event.target.value
//         })
//     }
//     changeURLHandler = event => {
//         this.setState({
//             url: event.target.value
//         })
//     }
//     changeCataHandler = event => {
//         this.setState({
//             catagories: event.target.value
//         })
//     }
//     onChangeBuffet = () => {
//         this.setState({
//           Buffet: true
//         })
//       }
//       onChangeJapan = () => {
//         this.setState({
//             JapaneseFood: true

//         });
//       }
//       onChangeShabu= () => {
//         this.setState({
//             Shabu: true
//         });
//       }


//     submitHandle = event => {
//         // const { history } = this.props;
//         event.preventDefault();
// let checkArray = [];
//     for (var key in this.state) {
//       if (this.state[key] === true) {
//         checkArray.push(key);
//       }
//     }
//     let checkData = {
//         checkbox : checkArray.toString()
//       };
//       console.log(checkArray.toString());

//         const restaurant = {
//             name: this.state.name,
//             address: this.state.address,
//             telephone: this.state.telephone,
//             url: this.state.url,
//             catagories: checkData,
//         }

//         console.log(restaurant);
//         // axios.post(``, restaurant)
//         //     .then(res => {
//         //         console.log(res);
//         //         this.setState({ loggedIn: true });
//         //         history.push('/restaurant')
//         //     })
//         //     .catch(err => {
//         //         console.log(err);
//         //     })


//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" placeholder="Name Restaurant" onChange={this.changeNameHandler} />
//                     </div>

//                     <div class="form-group">
//                         <label for="exampleFormControlTextarea1">Address</label>
//                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.changeAddressHandler}></textarea>
//                     </div>
//                     <div className="form-group">
//                         <label>Telephone Number</label>
//                         <input type="text" className="form-control" placeholder="XX-XXX-XXXX" onChange={this.changeTelHandler} />
//                     </div>

//                     <div className="form-group">
//                         <label>URL</label>
//                         <input type="email" className="form-control" placeholder="Enter URL" onChange={this.changeURLHandler} />
//                     </div>
//                     <label>Catagories</label>
//                     <div className="form-check">
//                         <div>
//                             <label className="form-check-label">
//                                 <input type="checkbox"
//                                     checked={this.state.isBuffet}
//                                     onChange={this.onChangeBuffet}
//                                     className="form-check-input"
//                                 />
//                                 Buffet
//             </label>
//                         </div><div>
//                             <label className="form-check-label">
//                                 <input type="checkbox"
//                                     checked={this.state.isJapan}
//                                     onChange={this.onChangeJapan}
//                                     className="form-check-input"
//                                 />
//                                 Japanese food
//             </label></div>
//             <div>
//                             <label className="form-check-label">
//                                 <input type="checkbox"
//                                     checked={this.state.isShabu}
//                                     onChange={this.onChangeShabu}
//                                     className="form-check-input"
//                                 />
//                                 Shabu
//             </label></div>

//                     </div>
//                     <br/>

//                     <div className="form-group">
//                         <div class="custom-file">
//                             <label>Picture</label>
//                             <input type="file" class="custom-file-input" id="customFile" />
//                             <label class="custom-file-label" htmlFor="customFile">Choose file</label>
//                         </div>
//                     </div>
//                 </form>

//           <Button variant="primary" onClick={this.submitHandle}>
//             Save Changes
//           </Button>

//             </div>
//         )
//     }
// }
