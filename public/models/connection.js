class Connection{
  constructor(connectionID, name, topic, details, date, time, locationName, addressLine1, addressLine2, rsvp){
    this._connectionId = connectionID;
    this._connectionName = name;
    this._connectionTopic = topic;
    this._details = details;
    this._date = date;
    this._time = time;
    this._locationName = locationName;
    this._addressLine1 = addressLine1;
    this._addressLine2 = addressLine2;
  }

  //Get and set Connection ID
  getConnectionID(){
    return this._connectionId;
  }

  setConnectionID(connectionID){
    this._connectionId = connectionID;
  }

  //Get and set Connection Name
  getName(){
    return this._connectionName;
  }

  setName(name){
    this._connectionName = name;
  }

  //Get and set Connection Topic
  getConnectionTopic(){
    return this._connectionTopic;
  }

  setTopic(topic){
    this._connectionTopic = topic;
  }

  //Get and set Connection Details
  getDetails(){
    return this._details;
  }

  setDetails(details){
    this._details = details;
  }

  //Get and set Connection Date
  getDate(){
    return this._date;
  }

  setDate(date){
    this._date = date;
  }

  //Get and set Connection Time
  getTime(){
    return this._time;
  }

  setTime(time){
    this._time = time;
  }

  //Get and set Connection location name
  getLocationName(){
    return this._locationName;
  }

  setLocationName(locationName){
    this._locationName = locationName;
  }

  //Get and set location address line 1
  getAddressLine1(){
    return this._addressLine1;
  }

  setAddressLine1(addressLine1){
    this._addressLine1 = addressLine1;
  }

  //Get and set location address line 2
  getAddressLine2(){
    return this._addressLine2;
  }

  setAddressLine2(addressLine2){
    this._addressLine2 = addressLine2;
  }
}

module.exports = Connection;
