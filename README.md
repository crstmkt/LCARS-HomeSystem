# LCARS-HomeSystem

![Image text](/.img/M.jpg)

# Introduction
This is a React based web frontend bringing HomeAssistant and LCARS together. The goal is a LCARS Style frontend running in a docker environment and sending / receiving entity states through WebSocketAPI.

# Architecture
The current architecture is not as modular as I wish it would be, but here are some of my Ideas:
- The whole system implements and uses the <a href="https://github.com/crstmkt/LCARS-SDK">LCARS-SDK</a> (originally created by <a href="https://github.com/Aricwithana">Aricwithana</a>, forked and modified by me) (Works with the "Hardcoded" Interface, ToDo: Implement more dynamic JS approach (currently in AppReact component))
- The logs (got from Homeassistants REST API /logs because the WebSocketAPI does not have an Endpoint for Logs) should be displayed in the upper area left to the Title, SystemTime and TopButtons (not working due to CORS restrictions on HASS OS)
- The buttons in the bottom area left to the main content area should be the Main Menu to chose the active module (currently not implemented)
- The TopButtons should depend on the currently active module (working)
- The modules itself need to be implemented

### TopButtons
 To give some functionality, you have to change the on_Click() Method of the corresponding TopButton.
 
 # How to build and get this to work?
 1. Prepare your HomeAssistant Instance. You have to activate the <a href="https://developers.home-assistant.io/docs/api/websocket/#:~:text=Home%20Assistant%20contains%20a%20WebSocket%20API.%20This%20API,JavaScript%20library%20which%20we%20use%20in%20our%20frontend.">WebSocket API</a>.
 2. You need a Docker Environment. Either you use the Portainer Addon of HomeAssistant itself or choose any other Docker Environment you like
 3. Clone this Repository
 4. You need to change some codeparts to fit your HA Instance (At least src/API/API.js -> function getToken() and function getHost())
 5. Change more of the code: You have to edit the TopButtons on_Click() Methods to match your entities
 6. When you're done changing code: Build the Dockerimage and upload it to your Docker environmet
