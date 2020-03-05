# Twitch-Poetry Maker (With Machine Learning!)
This is a work-in-progress machine learning project which uses real-time data from Twitch chat and creates new poetry during a "livestream" on the platform.
## A big problem :
Since this project requires **Node.js**, and as of **05/03/2020**, there is no Node support for ML5.js which means that this current program uses a public pastebin to allow for the P5.js sketch to access data from the Twitch API which means there is a delay from the user entering to poetry being generated on screen.

Tensorflow.js has Node.js support whilst ML5.js does not. This means until the ML5 library is updated to have Node support this is the solution that will be used.
