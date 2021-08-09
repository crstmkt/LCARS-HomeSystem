import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import $ from "jquery";
//API
import { getHost, getToken } from "./API/API";
import {
  createLongLivedTokenAuth,
  getAuth,
  getUser,
  callService,
  createConnection,
  subscribeEntities,
  ERR_HASS_HOST_REQUIRED,
} from "./API/dist/index.js";

function TestAPI() {
  useEffect(() => {
    (async () => {
      let auth;
      try {
        auth = createLongLivedTokenAuth(getHost(), getToken());
      } catch (err) {
        if (err === ERR_HASS_HOST_REQUIRED) {
          const hassUrl = getHost();
          prompt("What host to connect to?", "http://localhost:8123");
          if (!hassUrl) return;
          auth = await getAuth({ hassUrl });
        } else {
          alert(`Unknown error: ${err}`);
          return;
        }
      }
      const connection = await createConnection({ auth });
      subscribeEntities(connection, (entities) =>
        renderEntities(connection, entities)
      );

      // To play from the console
      window.auth = auth;
      window.connection = connection;
      getUser(connection).then((user) => {
        console.log("Logged in as", user);
        window.user = user;
      });
    })();

    function renderEntities(connection, entities) {
      const root = document.querySelector("tbody");
      while (root.lastChild) root.removeChild(root.lastChild);

      Object.keys(entities)
        .sort()
        .forEach((entId) => {
          const tr = document.createElement("tr");

          const tdName = document.createElement("td");
          tdName.innerHTML = entId;
          tr.appendChild(tdName);

          const tdState = document.createElement("td");
          const text = document.createTextNode(entities[entId].state);
          tdState.appendChild(text);

          if (
            ["switch", "light", "input_boolean"].includes(
              entId.split(".", 1)[0]
            )
          ) {
            const button = document.createElement("button");
            button.innerHTML = "toggle";
            button.onclick = () =>
              callService(connection, "homeassistant", "toggle", {
                entity_id: entId,
              });
            tdState.appendChild(button);
          }
          tr.appendChild(tdState);

          root.appendChild(tr);
        });
    }
  });
  return <div>RENDERED</div>;
}

export default TestAPI;
