import $ from "jquery";
import LCARS from "../core/lcars-sdk";

const _bar = {
  //Required.  Create DOM element and base class
  create: function (oDef) {
    var element;
    if (oDef.href !== undefined) {
      element = $('<a id="' + oDef.data.id + '" class="bar"></a>');
    } else {
      element = $('<div id="' + oDef.data.id + '" class="bar"></div>');
    }
    return element;
  },
  //Overide global settings
  setting: {},
  //Required. Set Value by Setting Name
  set: function (setting, value) {
    if (setting !== "id" && setting !== "type") {
      if (typeof this.setting[setting] === "function") {
        return this.setting[setting](this, value);
      } else if (typeof LCARS.setting[setting] === "function") {
        return LCARS.setting[setting](this, value);
      } else {
        this.data[setting] = value;
        return true;
      }
    }
  },

  get: function (setting) {
    return this.data[setting];
  },
};

export default _bar;
