import React, { Component } from 'react'


export default function FormPromotion() {
    return (
        <>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Detail</label>
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
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label>Visible</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Valid time</label>
                    <input type="date" className="form-control" pattern="yyyy/mm/dd" required />
                </div>
                <div className="form-group">
                    <label>End time</label>
                    <input type="date" className="form-control" pattern="yyyy/mm/dd" required />
                </div>
                <div className="form-group">
                    <label>Picture</label>
                    <div class="custom-file">

                        <input type="file" class="custom-file-input" id="customFile" />
                        <label class="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div></div>
            </form>
        </>
    )
}

// export default class formPromotion extends Component {
//     render() {
//         return (
//             <div>
//                 <form>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" placeholder="Username" />
//                     </div>

//                     <div class="form-group">
//                         <label for="exampleFormControlTextarea1">Detail</label>
//                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                     <div className="form-group">
//                         <label>Telephone Number</label>
//                         <input type="text" className="form-control" placeholder="Last name" />
//                     </div>

//                     <div className="form-group">
//                         <label>URL</label>
//                         <input type="email" className="form-control" placeholder="Enter email" />
//                     </div>
//                     <div class="form-group">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" id="gridCheck" />
//                             <label>Visible</label>
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <label>Valid time</label>
//                         <input type="date" className="form-control" pattern="yyyy/mm/dd" required />
//                     </div>
//                     <div className="form-group">
//                         <label>End time</label>
//                         <input type="date" className="form-control" pattern="yyyy/mm/dd" required />
//                     </div>
//                     <div class="custom-file">
//                         <input type="file" class="custom-file-input" id="customFile" />
//                         <label class="custom-file-label" htmlFor="customFile">Choose file</label>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
