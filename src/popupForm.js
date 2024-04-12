import { React, forwardRef } from "react";
import Form from "./form";
const PopupForm=forwardRef(({typeRate,popupClose},ref)=>{
    return ( 
        <div className="popup"  ref={ref}  >
            <div className="popup__body">
                <div className="popup__content"   >
                    <div className="popup__title">Form</div>
                    <button className="close__popup" onClick={()=>popupClose()}></button>
                    <Form typeRate={typeRate}></Form>
                </div>
            </div>
    
        </div>
     );
    
})
export default PopupForm


