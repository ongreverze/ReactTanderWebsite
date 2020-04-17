import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { UserContext } from '../Usercontext';


export default function FormPromotion() {
    const { user } = useContext(UserContext);
    const { accessToken } = useContext(UserContext);
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [url, setUrl] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [isVisible, setisVisible] = useState(false);


    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeDetail = e => {
        setDetail(e.target.value)
    }
    const onChangeTel = e => {
        setTelephone(e.target.value)
    }
    const onChangeURL = e => {
        setUrl(e.target.value)
    }
    const onChangeStart = e => {
        var dateobj = e.target.value;
        setStart(dateobj);
    }
    const onChangeEnd = e => {
        var dateobj = e.target.value;
        setEnd(dateobj);
    }
    const onChangeVisible = () => {
        setisVisible(!isVisible);
    }
    const handleSubmit = e => {
        e.preventDefault();

        const promotion = {
            promotionName: name,
            description: detail,
            validTime: start + "T00:00:00.000Z",
            endTime: end + "T00:00:00.000Z",
            isVisible: isVisible,
            ownerUsername: user
        }
        console.log(promotion);
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        console.log(config);
        axios.post(`https://tander-webservice.herokuapp.com/promotions`, promotion, config
        ).then((res, err) => {
            if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)

            else {
                console.log(res);
                console.log(res.data);

                alert("Add success !")
            }
        })
    }
    return (
        <>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name Promotion" onChange={onChangeName} value={name} />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Detail</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={onChangeDetail} value={detail}></textarea>
                </div>
                <div className="form-group">
                    <label>Telephone Number</label>
                    <input type="text" className="form-control" placeholder="XX-XXX-XXXX" onChange={onChangeTel} value={telephone} />
                </div>

                <div className="form-group">
                    <label>URL</label>
                    <input type="email" className="form-control" placeholder="Enter URL" onChange={onChangeURL} value={url} />
                </div>
                <div className="form-check">
                    <div>
                        <label className="form-check-label">
                            <input type="checkbox"
                                checked={isVisible}
                                onChange={onChangeVisible}
                                className="form-check-input"
                            />
                                Visible
            </label>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label>Start time</label>
                    <input type="date" className="form-control" pattern="yyyy/mm/dd" required onChange={onChangeStart} value={start} />
                </div>
                <div className="form-group">
                    <label>End time</label>
                    <input type="date" className="form-control" pattern="yyyy/mm/dd" required onChange={onChangeEnd} value={end} />
                </div>
                <label>Picture</label>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
            </form>
            <br />
            <Button variant="primary" onClick={handleSubmit}>
                Save Changes
          </Button>
        </>
    )
}

// export default class formPromotion extends Component {
//         state = {
//             name  : '',
//             detail : '',
//             telephone: '',
//             url : '',
//             start : '',
//             end: '',
//             isVisible: false,
//             ownerUsername: 'weblogin'
//         };
//     onChangeName = event => {
//         this.setState({
//             name : event.target.value
//         })
//     }
//     onChangeDetail = event => {
//         this.setState({
//             detail : event.target.value
//         })
//     }
//     onChangeTel = event => {
//         this.setState({
//             telephone : event.target.value
//         })
//     }
//     onChangeURL = event => {
//         this.setState({
//             telephone : event.target.value
//         })
//     }
//     onChangeStart = event =>{
//         var dateobj = new Date(event.target.value);
//         this.setState({
//             start : dateobj.toISOString()
//         })
//     }
//     onChangeEnd = event =>{
//         var dateobj = new Date(event.target.value);
//         this.setState({
//             end : dateobj.toISOString()
//         })
//     }
//     onChangeVisible = () =>{
//         this.setState({
//             isVisible : !this.state.isVisible
//         });
//     }
//     handleSubmit = event => {
//         event.preventDefault();

//         const promotion = {
//             promotionname : this.state.name,
//             description : this.state.detail,
//             validtime: this.state.start,
//             endtime: this.state.end,
//             isVisible: this.state.isVisible,
//             ownerUsername : this.state.ownerUsername
//         }

//         console.log(promotion);
//         axios.post(`https://tander-webservice.herokuapp.com/promotions`, promotion)
//         .then((res, err) => {    
//             if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
//             else {
//                 console.log(res);
//                 console.log(res.data);
//                 alert("Add success !")
//             }
//         })

//         // axios.get('https://tander-webservice.herokuapp.com/restaurants').then( res => {
//         //     console.log(res)
//         // })
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" placeholder="Name Promotion" onChange={this.onChangeName} />
//                     </div>

//                     <div class="form-group">
//                         <label for="exampleFormControlTextarea1">Detail</label>
//                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.onChangeDetail}></textarea>
//                     </div>
//                     <div className="form-group">
//                         <label>Telephone Number</label>
//                         <input type="text" className="form-control" placeholder="XX-XXX-XXXX" onChange ={this.onChangeTel}/>
//                     </div>

//                     <div className="form-group">
//                         <label>URL</label>
//                         <input type="email" className="form-control" placeholder="Enter URL" onChange ={this.onChangeURL}/>
//                     </div>
//                     <div className="form-check">
//                         <div>
//                             <label className="form-check-label">
//                                 <input type="checkbox"
//                                     checked={this.state.isVisible}
//                                     onChange={this.onChangeVisible}
//                                     className="form-check-input"
//                                 />
//                                 Visible
//             </label>
//             </div>
//             </div>
//             <br/>
//                     <div className="form-group">
//                         <label>Start time</label>
//                         <input type="date" className="form-control" pattern="yyyy/mm/dd" required onChange = {this.onChangeStart}/>
//                     </div>
//                     <div className="form-group">
//                         <label>End time</label>
//                         <input type="date" className="form-control" pattern="yyyy/mm/dd" required onChange = {this.onChangeEnd}/>
//                     </div>
//                  <label>Picture</label>
//                     <div class="custom-file">
//                         <input type="file" class="custom-file-input" id="customFile" />
//                         <label class="custom-file-label" htmlFor="customFile">Choose file</label>
//                     </div>
//                 </form>
//                 <br/>
//                 <Button variant="primary" onClick={this.handleSubmit}>
//             Save Changes
//           </Button>
//             </div>
//         )
//     }
