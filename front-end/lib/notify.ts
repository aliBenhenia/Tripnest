import toast from 'react-hot-toast';

interface notifyProps{
    message : string,
    type : "error" | "success",
}

const  notify = ({message,type}:notifyProps)=>{
    if (type === "success")
        toast.success(message);
    else
        toast.error(message);
}

export default notify;