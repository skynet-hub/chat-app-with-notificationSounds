import model, { Schema } from "mongoose";
import { type } from '../../node_modules/@types/whatwg-url/index.d';

const messageSchema = new Schema({
    senderId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    
    },
    message: {
        type: String,
        required: true
    },
    
}, {timestamps: true})

const Message = model("Message", messageSchema)

export default Message;