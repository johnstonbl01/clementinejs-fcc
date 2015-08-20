### FCC Boilerplate

#### About

The FCC version of Clementine.js is meant as a complementary boilerplate to the [Free Code Camp curriculum](http://www.freecodecamp.com). This version includes Twitter authentication using [Passport](http://passportjs.org/).

The following features are absent from this version of the boilerplate:

- Jade
- Mongoose
- Gulp
- Sass
- Bower
- Angular custom directive example

I believe that the MEAN stack is a great place for new developers to begin learning. Why? Using this stack, a novice can gain exposure to the entire stack without having to learn another programming langugae. Eventually, it will be useful to pick up additional languages (i.e. SQL), but in the beginning it's really appealing to learn the ropes using a single language.

The ubiquity of JavaScript adds to its appeal, and is also a reason for the popularity of the MEAN stack. Each of the platforms and frameworks included in the MEAN stack use JavaScript only. It's easy to see the appeal, and the ease of standing up a new project using this stack makes for an additional bonus.

If you are completely new to programming, and wish to understand how these pieces fit together, there is a [tutorial included in the documentation](http://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html) which will walk through how to build this small application step-by-step.

#### Documentation

Full documentation for all versions of the Clementine.js boilerplate [can be found here](http://johnstonbl01.github.io/clementinejs). 

#### Installation

Installation of the boilerplate has two prerequisites: Node.js / NPM and MongoDB. The instructions for these are detailed below, followed by installation instructions for Clementine.js.

##### Node.js & NPM

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
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"
```

##### MongoDB

MongoDB has great installation instructutions for MAC OSX, Windows and Linux. [See this page.](http://docs.mongodb.org/manual/installation/)

##### Clementine.js

TBD

##### Starting the App

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```bash
Node.js listening on port 3000...
```

Next, open your browser and enter `http://localhost:3000/`. Congrats, you're up and running!

## Contributing

TBD

## License

MIT License. [Click here for more information.](LICENSE.md)