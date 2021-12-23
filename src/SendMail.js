import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import {useForm} from "react-hook-form"
import { db } from "./firebase"
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        
    }
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          name="to"
          type="email"
          placeholder="To"
          //ref={register({ required: true })}
        />
          {/* {errors.to && <p className="sendMail__error">To is required!</p>}   */}
        <input name='subject' type="text" placeholder="Subject" /*ref={register({ required: true })}/> */
        />
        <input name='message' type="text" placeholder="message" className="sendMail__message" // ref={register({ required: true })} 
        />
        <div className="sendMail_options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
