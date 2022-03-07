import $ from "jquery";

export function getToken() {
  return "oh.LCARSWebApp.b6KGJK4sb02wFlUVNobE39THda2aqOPp2jQgV8YwQudqOGY7xZ1YZ31pwzOMq4fNxj8vSQSdVSv26fXdCA";
}

export function getHost() {
  return "http://192.168.178.77:49155/rest/";
}

export function getItem(itemName) {
  $.ajax({
    url: getHost() + "items/" + itemName,
    type: "GET",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    success: function (data) {
      alert(data);
    },
  });
}
