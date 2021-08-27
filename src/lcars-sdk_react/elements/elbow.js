import $ from "jquery";
import LCARS from "../core/lcars-sdk";

const _elbow = {
  //Required.  Create DOM element and base class
  create: function (oDef) {
    var element;
    if (oDef.href !== undefined) {
      element = $('<a id="' + oDef.data.id + '" class="elbow"></a>');
    } else {
      element = $('<div id="' + oDef.data.id + '" class="elbow"></div>');
    }

    var elbowBar = new LCARS.element.bar({});
    var innerRadius = new LCARS.element.block({});
    $(elbowBar.dom).append(innerRadius.dom);
    $(element).append(elbowBar.dom);

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

export default _elbow;
