class ServiceResponse{
    constructor(){

    }
    get status (){
        return this._status;
    }
    set status(inStatus){
        this._status = inStatus;
    }

    get statusCode (){
        return this._statusCode;
    }
    set statusCode(inStatusCode){
        this._statusCode = inStatusCode;
    }

    get message (){
        return this._message;
    }
    set message(inMessage){
        this._message = inMessage;
    }

    get data (){
        return this._data;
    }
    set data(inData){
        this._data = inData;
    }
}

module.exports = ServiceResponse