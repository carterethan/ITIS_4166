var Connection = require('../models/connection');

//Create Connection objects
var carShow1 = new Connection();
var carShow2 = new Connection();
var carShow3 = new Connection();
var roadSeries1 = new Connection();
var roadSeries2 = new Connection();
var roadSeries3 = new Connection();

//Populate the properties of Car Show 1 with data
carShow1.setConnectionID(0);
carShow1.setName("Cars and Coffee Charlotte");
carShow1.setTopic("Car Show");
carShow1.setDetails("Join us at Amélie's in NoDa for an early morning gathering where you can show off your car and enjoy some quality coffee.");
carShow1.setDate("Saturday, Februay 29, 2020");
carShow1.setTime("8 AM");
carShow1.setLocationName("Amélie's French Bakery & Café");
carShow1.setAddressLine1("2424 N Davidson St #102");
carShow1.setAddressLine2("Charlotte, NC 28205");

//Populate the properties of Car Show 2 with data
carShow2.setConnectionID(1);
carShow2.setName("Regional Show and Swap Meet");
carShow2.setTopic("Car Show");
carShow2.setDetails("Join us for our annual car show and swap meet.");
carShow2.setDate("Saturday, March 28, 2020");
carShow2.setTime("12 PM - 7 PM");
carShow2.setLocationName("Charlotte Motor Speedway");
carShow2.setAddressLine1("5555 Concord Pkwy S");
carShow2.setAddressLine2("Concord, NC 28027");

//Populate the properties of Car Show 3 with data
carShow3.setConnectionID(2);
carShow3.setName("National Chapter Show");
carShow3.setTopic("Car Show");
carShow3.setDetails("Join us for the biggest show of the year held by the national chapter of the Miata Club.");
carShow3.setDate("Wednesday, June 17, 2020");
carShow3.setTime("12 PM - 7 PM");
carShow3.setLocationName("Mazda Raceway Laguna Seca");
carShow3.setAddressLine1("1021 Monterey Salinas Hwy");
carShow3.setAddressLine2("Salinas, CA 93908");

//Populate the properties of Road Series 1 with data
roadSeries1.setConnectionID(3);
roadSeries1.setName("Miatas at the Gap");
roadSeries1.setTopic("Road Series");
roadSeries1.setDetails("Join us for a Miata Club road rally through the mountains.");
roadSeries1.setDate("Thursday, August 6, 2020");
roadSeries1.setTime("7 PM");
roadSeries1.setLocationName("Fontana Village Resort");
roadSeries1.setAddressLine1("300 Woods Rd");
roadSeries1.setAddressLine2("Fontana Dam, NC 28733");

//Populate the properties of Road Series 2 with data
roadSeries2.setConnectionID(4);
roadSeries2.setName("Blue Ridge Mountain Pass");
roadSeries2.setTopic("Road Series");
roadSeries2.setDetails("Join us for a Miata Club road rally through the Blue Ridge Mountains of NC.");
roadSeries2.setDate("Saturday, July 11, 2020");
roadSeries2.setTime("12 PM");
roadSeries2.setLocationName("Julian Price Memorial Park");
roadSeries2.setAddressLine1("Milepost 297 Blue Ridge Parkway");
roadSeries2.setAddressLine2("Blowing Rock, NC 28605");

//Populate the properties of Road Series 3 with data
roadSeries3.setConnectionID(5);
roadSeries3.setName("Tail of the Dragon");
roadSeries3.setTopic("Road Series");
roadSeries3.setDetails("Join us for a Miata Club road rally on the Tail of the Dragon, which features 318 curves over 11 miles.");
roadSeries3.setDate("Sunday, July 26, 2020");
roadSeries3.setTime("12 PM");
roadSeries3.setLocationName("Fontana Village Resort");
roadSeries3.setAddressLine1("300 Woods Rd");
roadSeries3.setAddressLine2("Fontana Dam, NC 28733");

//Create an array to hold the connections
var connections = [];

//Push the Connection objects into the array in order
connections.push(carShow1);
connections.push(carShow2);
connections.push(carShow3);
connections.push(roadSeries1);
connections.push(roadSeries2);
connections.push(roadSeries3);

//Function to display ALL of the connections. To be used on the 'connections' view.
function getConnections(){
    return connections;
}

//Function to display a single connection based on the id parameter.
function getConnection(id){
  return connections[id];
}

module.exports.getConnections = getConnections;
module.exports.getConnection = getConnection;
