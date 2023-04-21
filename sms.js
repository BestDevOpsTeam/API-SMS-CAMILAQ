const axios = require('axios');
const endoint = 'https://api.juancarlosparragalan.com/prodsms/api/v1/smsmessage'
async function sendSMS(phoneNumber, name) {
    const response = {}
    if(!phoneNumber){
        let = {
            "status": "error",
            "message": "El número de celular es requerido"
        }
        return response;
    }else{
        const bodyrequest = {
            phoneNumber: phoneNumber,
        }
        let = await axios.post(endoint, bodyrequest);
        return response.data;
    }
}
module.exports = sendSMS