import React, { Component } from 'react'




export default function Menubar() {
    return (
        <>
            <div class="nav column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/restaurant" role="tab" aria-controls="v-pills-restaurant" aria-selected="true">Restaurant</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/promotion" role="tab" aria-controls="v-pills-promotion" aria-selected="false">Promotion</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">User Profile</a>
                    <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/help" role="tab" aria-controls="v-pills-faq" aria-selected="false">HELP</a>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" />
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" />
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" />
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" />
                </div>
        </>
    )
}

// export default class menubar extends Component {
//     render() {
//         return (
//             <div>
//                 <div class="nav column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//                     <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/restaurant" role="tab" aria-controls="v-pills-restaurant" aria-selected="true">Restaurant</a>
//                     <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/promotion" role="tab" aria-controls="v-pills-promotion" aria-selected="false">Promotion</a>
//                     <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">User Profile</a>
//                     <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/help" role="tab" aria-controls="v-pills-faq" aria-selected="false">HELP</a>
//                 </div>
//                 <div class="tab-content" id="v-pills-tabContent">
//                     <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" />
//                     <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" />
//                     <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" />
//                     <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" />
//                 </div>
//             </div>
//         );
//     }
// }
