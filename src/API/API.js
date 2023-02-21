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
