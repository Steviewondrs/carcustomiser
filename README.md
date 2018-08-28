# Car Customiser

Progressive web app allowing you to customise a car.

Check out the app [here](https://steviewondrs.github.io/carcustomiser)

# Installation

1. clone or fork this repo
2. Install dependencies: ```$ npm install```
3. Build the app: ```$ npm run build```
4. Run the app: ```$ npm run dev```

# About

This little app was commissioned to test my front-end skills.

Making it was a great way to learn the concepts of building a progressive web-app.
These are a few things that I learned over the course of three days and used for the very first time:
* ServiceWorkers (pfff, this one was a real head-scratcher).
* ES7 features like 'Async-Await'
* Some nice Webpack tricks
* Drawing pictures using only HTML and CSS

# Notes

I implemented this app as a progressive web app. That means that you can install it on any of your devices
and use it offline!

Though it is a nice feature, I'm having inconsistent experiences with the ServiceWorkers: loading it on my mobile device results
in a mix of old or new caches.
