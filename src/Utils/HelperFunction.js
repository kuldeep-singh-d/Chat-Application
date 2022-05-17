import { showMessage } from "react-native-flash-message";

const showError = (message)=> {
    showMessage({
        type:'danger',
        icon:'danger',
        message
    })
}

const showSuccess = () =>{
    showMessage({
        type: 'success',
        icon: 'success',
        message
    })
}

export {
    showError,
    showSuccess
}