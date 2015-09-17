# Clementine.js FCC Boilerplate

**Note**: Clementine.js is currently being transitioned to a Yeoman generator and has not yet been published. The installation steps below will not work at this time.

## Overview

The [Free Code Camp](http://www.freecodecamp.com) version of Clementine.js is meant for use when completing projects as part of the FCC curriculum. This version includes Twitter authentication through Passport.

## Versions

- [Standard](https://github.com/johnstonbl01/clementinejs): A MEAN stack boilerplate -- this version has the most "bells and whistles."
- [Bare](https://github.com/johnstonbl01/clementinejs-bare): A stripped down version of the boilerplate for quick prototyping
- [Beginner](https://github.com/johnstonbl01/clementinejs-beginner): A simplified version of the boilerplate intended for developers new to JavaScript and the MEAN stack.

## Installation

Installation of the boilerplate has three prerequisites: Node.js / NPM, MongoDB and Yeoman. The instructions for these are detailed below, followed by installation instructions for Clementine.js.

### Node.js & NPM

_Note:_ The Node insallation installs both Node & NPM.

**MAC OSX & Windows**

Head to the [Node.js install page](https://nodejs.org/download/). Download the appropriate file follow the installation instructions.

**Linux**

_Option 1_ - Install via PPA
```
$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
```

_Option 2_ - Install via LinuxBrew

First, ensure [LinuxBrew](http://brew.sh/linuxbrew/) is installed. Then, enter the below into the Linux terminal:
```
$ brew install node
```

### MongoDB

MongoDB has great installation instructutions for MAC OSX, Windows and Linux. [See this page.](http://docs.mongodb.org/manual/installation/)

### Install Yeoman

Yeoman is simple to install:

```bash
$ npm install -g yo
```

Note that it should be installed globally.

### Install Clementine.js

Clementine.js is easy to setup in the project directory of your choice! In the terminal:

```bash
$ npm install -g generator-clementinejs
$ mkdir your-project
$ cd your-project
$ yo clementinejs:fcc
```

It's that easy!

### Setup Twitter Authentication

Please follow [this guide](/clementinejs/tutorials/tutorial-passport.html#twitter-app-setup) to register the application with Twitter and get API keys / secrets. This API information will also need to be added to the `app/config/auth.js` file.

### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:
```
MongoDB successfully connected on port 27017.
Node.js listening on port 3000...
```
Next, open your browser and enter `http://localhost:3000/`. Congrats, you're up and running!

## Contributing

This is an open-source project, and contributions are always welcome! To see ways to contribute, please review the [contribution guidelines](http://johnstonbl01.github.io/clementinejs/developers/contributing.html).

## Documentation

Complete documentation can be [found here](http://johnstonbl01.github.io/clementinejs).

### Tutorial

You can find a complete step-by-step tutorial on how to create this app from the ground up [here](http://johnstonbl01.github.io/clementinejs/tutorials/tutorial-passport.html).

## Features

| Features 				| Beginner 	| Standard 	| Bare 		| FCC 		|
|:---------				|:--------:	|:--------:	|:---------:|:---------:|
| Commented Code		| _Yes_ 	| _No_ 		| _No_		| _No_		|
| Example Controller 	| _Yes_ 	| _Yes_		| _Yes_		| _Yes_		|
| Example Directive 	| _No_ 		| _Yes_		| _No_		| _No_		|
| Jade					| _No_ 		| _Yes_ 	| _Yes_	 	| _No_		|
| Mongoose				| _No_		| _Yes_		| _Yes_		| _Yes_		|
| Gulp				 	| _No_		| _Yes_		| _Yes_		| _No_		|
| Sass					| _No_		| _Yes_		| _Yes_		| _No_		|
| Bower					| _Yes_		| _Yes_		| _Yes_		| _No_		|
| Authentication		| _No_		| _No_		| _No_		| _Yes_		|

## License

MIT License. [Click here for more information.](LICENSE.md)