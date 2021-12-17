import React, { useState } from "react";
import "./Dashboard.css";
import WasteCollection from "./../WasteCollection/WasteCollection";
import {
  LCARSBar,
  LCARSBlock,
  LCARSButton,
  LCARSCap,
  LCARSColorPalette,
  LCARSElbow,
} from "../../lcars-styled-components/lcars-styled-components";

export default function Dashboard() {
  const [wMode, setWMode] = useState(0);

  return (
    <div className="wrapper flex-h">
      <div id="columnLeft" className="column flex-h"></div>

      <div id="columnRight" className="column flex-v">
        <div id="aboveWasteCollection" className="column flex-h">
          <div id="abWasteLeft" className="column flex-v">
            <LCARSBlock
              color={LCARSColorPalette._29CENT_LightBlue}
            ></LCARSBlock>
            <LCARSBlock
              color={LCARSColorPalette._29CENT_LightBlue}
            ></LCARSBlock>
            <LCARSBlock
              color={LCARSColorPalette._29CENT_LightBlue}
              additionalClasses="step-two"
            ></LCARSBlock>
            <LCARSElbow
              color={LCARSColorPalette._29CENT_LightBlue}
              version={"bottom-left"}
              size={"medium"}
            ></LCARSElbow>
          </div>
          <div id="abWasteRight" className="column flex-v">
            <div id="wrapperSIDqeixguu3o" class="wrapper content">
              <div id="abWasteCollContent" class="text text-color-1"></div>
            </div>
            <div id="rowSID6972md01u" class="row frame flex-h">
              <LCARSBar
                color={LCARSColorPalette._29CENT_LightBlue}
                additionalClasses="flex-c-h"
              ></LCARSBar>
              <LCARSCap
                color={LCARSColorPalette._29CENT_LightBlue}
                size="small"
                version="round-right"
              ></LCARSCap>
              {/* <div
                id="capSIDry4mpzs86"
                class="cap round-right bg-color-3 small"
              ></div> */}
            </div>
          </div>
        </div>

        <div id="wasteCollections" className="column flex-h">
          <div id="waste_left" class="column flex-v">
            <LCARSElbow
              color={LCARSColorPalette._29CENT_LightBlue}
              size={"medium"}
            ></LCARSElbow>
            <LCARSButton
              color={LCARSColorPalette._29CENT_LightBlue}
              dataLabel="NEXT FIVE"
              onClick={() => setWMode(0)}
            ></LCARSButton>
            <LCARSButton
              color={LCARSColorPalette._29CENT_LightBlue}
              dataLabel="NEXT 7 DAYS"
              onClick={() => setWMode(7)}
            ></LCARSButton>
            <LCARSButton
              color={LCARSColorPalette._29CENT_LightBlue}
              dataLabel="NEXT 30 DAYS"
              onClick={() => setWMode(30)}
              additionalClasses="step-two"
            ></LCARSButton>
          </div>
          <div id="waste_right" class="column flex-v">
            <div id="rowSIDj08hprepg" class="row flex-h frame">
              <div id="titleSIDcxrawymgt" class="title small">
                WASTE COLLECTIONS
              </div>
              <LCARSCap
                color={LCARSColorPalette._29CENT_LightBlue}
                size="small"
              ></LCARSCap>
              {/* <div
                id="capSIDoh1sqwfmi"
                class="cap round-right bg-color-4 small"
              ></div> */}
            </div>
            <div id="wrapperSIDqeixguu3o" class="wrapper content">
              <div id="nextWasteCollection" class="text text-color-2">
                <WasteCollection mode={wMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
