import React, { useState } from "react";
import "./Dashboard.css";
import WasteCollection from "./WasteCollection";

export default function Dashboard() {
  const [wMode, setWMode] = useState(0);

  return (
    <div className="wrapper flex-h">
      <div id="wasteCollections" className="column flex-h">
        <div id="waste_left" class="column flex-v">
          <div
            id="elbowSIDvlwkmfqw3"
            class="elbow default horizontal top-left bg-color-2 hidden"
          >
            <div id="barSIDkoutybdzb" class="bar">
              <div id="blockSIDnny8oxvyi" class="block"></div>
            </div>
          </div>
          <div
            id="buttonSID0awbdgyqm"
            class="button bg-color-2 hidden"
            data-label="NEXT FIVE"
            onClick={() => setWMode(0)}
          ></div>
          <div
            id="buttonSID6xrzttj6e"
            class="button bg-color-2 hidden"
            data-label="NEXT 7 DAYS"
            onClick={() => setWMode(7)}
          ></div>
          <div
            id="buttonSIDuswe3b3gs"
            class="button bg-color-4 hidden"
            data-label="NEXT 30 DAYS"
            onClick={() => setWMode(30)}
          ></div>
          <div
            id="elbowSID32pi843jy"
            class="elbow default horizontal bottom-left bg-color-4 hidden"
          >
            <div id="barSIDcg0xlyhav" class="bar">
              <div id="blockSIDcb964zhi2" class="block"></div>
            </div>
          </div>
        </div>
        <div id="waste_right" class="column flex-v">
          <div id="rowSIDj08hprepg" class="row flex-h frame">
            <div id="titleSIDcxrawymgt" class="title small hidden">
              WASTE COLLECTIONS
            </div>
            <div
              id="capSIDoh1sqwfmi"
              class="cap round-right bg-color-4 small hidden"
            ></div>
          </div>
          <div id="wrapperSIDqeixguu3o" class="wrapper content hidden">
            <div id="nextWasteCollection" class="text text-color-1">
              <WasteCollection mode={wMode} />
            </div>
          </div>
          <div id="rowSID6972md01u" class="row frame flex-h">
            <div
              id="barSIDs3pob9a48"
              class="bar bg-color-3 flex-c-h hidden"
            ></div>
            <div
              id="capSIDry4mpzs86"
              class="cap round-right bg-color-3 small hidden"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
