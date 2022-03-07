# LCARS-HomeSystem

![Image text](/.img/Main.jpg)

# Introduction
This is a React based web frontend bringing openHAB and LCARS together. The goal is a LCARS Style frontend running in a docker environment and sending / receiving entity states through REST API.

# Architecture
The current architecture is not as modular as I wish it would be, but here are some of my Ideas:
- The whole system implements and uses the <a href="https://github.com/crstmkt/LCARS-SDK">LCARS-SDK</a> (originally created by <a href="https://github.com/Aricwithana">Aricwithana</a>, forked and modified by me. Trying to create react-styled-components out of it)
- The buttons in the bottom area left to the main content area should be the Main Menu to chose the active module (currently not implemented)
- The TopButtons should depend on the currently active module (working)
- The modules itself need to be implemented

### TopButtons
 To give some functionality, you have to change the on_Click() Method of the corresponding TopButton.
 
 # How to build and get this to work?
 1. Prepare your openHAB Instance. Create a Long Living Access Token for REST API
 2. You need a Docker Environment.
 3. Clone this Repository
 4. You need to change some codeparts to fit your openHAB Instance (At least src/API/API.js -> function getToken() and function getHost())
 5. Change more of the code: You have to edit the TopButtons on_Click() Methods to match your entities
 6. When you're done changing code: Build the Dockerimage and upload it to your Docker environmet
