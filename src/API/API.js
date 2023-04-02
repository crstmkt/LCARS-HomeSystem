// ########## ALLGEMEIN  #########
import $ from "jquery";

export function getToken() {
  return "oh.lcarswebapp.t6OpVRJwRmiYBC26TpVxyqYs6uDszhhVZLYUQvNNTTKzXel5ZkiFYgK8izQ3ts2spDfXlCboEWQ7w6qhKPg";
}

export function getHost() {
  return "http://openhabian/rest/";
}

export function getItem(itemName) {
  $.ajax({
    url: getHost() + "items/" + itemName,
    type: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    success: function (data) {
      console.log(data);
    },
  });
}

// ########## HEIZSTAB #########
export function fetchBoilerJson() {
  return fetch("http://192.168.20.202/data.jsn")
    .then((response) => response.json())
}

export function formatTemp(temp) {
  return (
    temp.toString().substring(0, 2) + "." + temp.toString().substring(2) + "C"
  );
}

export function convertStatus(statusNr) {
  switch (statusNr) {
    case 2:
      return "HEAT";
    case 3:
      return "STANDBY";
    case 4:
      return "BOOST HEAT";
    case 5:
      return "HEAT FINISHED";
    case 9:
      return "SETUP";
    case 201:
      return "ERROR OVERTEMP FUSE BLOWN";
    case 202:
      return "ERROR OVERTEMP MEASURED";
    case 203:
      return "ERROR OVERTEMP ELECTRONICS";
    case 204:
      return "ERROR HARDWARE FAULT";
    case 205:
      return "ERROR TEMP SENSOR";
    case 209:
      return "MAINBOARD ERROR";
  }
}
