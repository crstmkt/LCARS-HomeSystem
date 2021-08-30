import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="wrapper flex-h">
      <div id="waste_left" class="column flex-v">
        <div
          id="elbowSIDvlwkmfqw3"
          class="elbow default horizontal top-left bg-color-2"
        >
          <div id="barSIDkoutybdzb" class="bar">
            <div id="blockSIDnny8oxvyi" class="block"></div>
          </div>
        </div>
        <div
          id="buttonSID0awbdgyqm"
          class="button bg-color-2"
          onclick="play(0001)"
          data-label="NEXT FIVE"
        ></div>
        <div
          id="buttonSID6xrzttj6e"
          class="button bg-color-2"
          onclick="play(0001)"
          data-label="NEXT 7 DAYS"
        ></div>
        <div
          id="buttonSIDuswe3b3gs"
          class="button bg-color-4"
          onclick="play(0001)"
          data-label="NEXT 30 DAYS"
        ></div>
        <div
          id="elbowSID32pi843jy"
          class="elbow default horizontal bottom-left bg-color-4"
        >
          <div id="barSIDcg0xlyhav" class="bar">
            <div id="blockSIDcb964zhi2" class="block"></div>
          </div>
        </div>
      </div>
      <div id="waste_right" class="column flex-v">
        <div id="rowSIDj08hprepg" class="row flex-h frame">
          <div id="titleSIDcxrawymgt" class="title small">
            WASTE COLLECTIONS
          </div>
          <div
            id="capSIDoh1sqwfmi"
            class="cap round-right bg-color-4 small"
          ></div>
        </div>
        <div id="wrapperSIDqeixguu3o" class="wrapper content">
          <div id="nextWasteCollection" class="text text-color-1">
            <p>07.09.2021 : WERTSTOFFSAMMLUNG</p>
            <p>08.09.2021 : BIOSAMMLUNG</p>
            <p>20.09.2021 : PAPIERSAMMLUNG</p>
            <p>21.09.2021 : WERTSTOFFSAMMLUNG</p>
            <p>22.09.2021 : BIOSAMMLUNG</p>
          </div>
        </div>
        <div id="rowSID6972md01u" class="row frame flex-h">
          <div id="barSIDs3pob9a48" class="bar bg-color-3 flex-c-h"></div>
          <div
            id="capSIDry4mpzs86"
            class="cap round-right bg-color-3 small"
          ></div>
        </div>
      </div>
    </div>
  );
}
