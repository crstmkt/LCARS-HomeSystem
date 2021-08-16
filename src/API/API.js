import {
  createLongLivedTokenAuth,
  getAuth,
  getUser,
  callService,
  createConnection,
  subscribeEntities,
  ERR_HASS_HOST_REQUIRED,
} from "./dist/index.js";

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

export function getToken() {
  return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYmVjYTgwYTYzMDU0MjM3ODJkYmE1YmQyYmRhMjBjNyIsImlhdCI6MTYwMjc1ODU3MCwiZXhwIjoxOTE4MTE4NTcwfQ.tTO4QCcQsNrHTv0Li7dh5gM33PDDrn28bxZfRzIO1Y0";
}

export function getHost() {
  return "http://lcars-homesystem:8123";
}

export var entitiesCollection;

function renderEntities(connection, entities) {
  entitiesCollection = entities;
  //console.log(entitiesCollection);
}
