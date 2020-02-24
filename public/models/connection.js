class Connection{
  constructor(connectionID, name, topic, details, date, time, locationName, addressLine1, addressLine2){
    this.connectionID = connectionID;
    this.name = name;
    this.topic = topic;
    this.details = details;
    this.date = date;
    this.time = time;
    this.locationName = locationName;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
  }

  //Get and set Connection ID
  getConnectionID(){
    return this.connectionID;
  }

  setConnectionID(connectionID){
    this.connectionID = connectionID;
  }

  //Get and set Connection Name
  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  //Get and set Connection Topic
  getTopic(){
    return this.topic;
  }

  setTopic(topic){
    this.topic = topic;
  }

  //Get and set Connection Details
  getDetails(){
    return this.details;
  }

  setDetails(details){
    this.details = details;
  }

  //Get and set Connection Date
  getDate(){
    return this.date;
  }

  setDate(date){
    this.date = date;
  }

  //Get and set Connection Time
  getTime(){
    return this.time;
  }

  setTime(time){
    this.time = time;
  }

  //Get and set Connection location name
  getLocationName(){
    return this.locationName;
  }

  setLocationName(locationName){
    this.locationName = locationName;
  }

  //Get and set location address line 1
  getAddressLine1(){
    return this.addressLine1;
  }

  setAddressLine1(addressLine1){
    this.addressLine1 = addressLine1;
  }

  //Get and set location address line 2
  getAddressLine2(){
    return this.addressLine2;
  }

  setAddressLine2(addressLine2){
    this.addressLine2 = addressLine2;
  }

}

module.exports = Connection;
