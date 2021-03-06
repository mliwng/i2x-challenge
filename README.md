# i2x Challenge ![build badge](https://travis-ci.org/pedropb/i2x-challenge.svg?branch=master) ![coverage badge](https://coveralls.io/repos/github/pedropb/i2x-challenge/badge.svg?branch=master)

This is a simple React application that has 2 views: a Login and a ListView including some audio elements and metadata.

[Link to live demo](https://i2x-front-end-dev.herokuapp.com/login)

![Demo](http://i.imgur.com/BaXQIlI.gif)

## Installation

### Development

1. Clone the repo: `git clone https://github.com/pedropb/i2x-challenge`
2. Install dependencies: `npm install`
3. Run: `npm start`
4. Browse to [http://localhost:3000](http://localhost:3000)

### Heroku

Based on [these instructions](https://blog.heroku.com/deploying-react-with-zero-configuration):
1. Clone the repo: `git clone https://github.com/pedropb/i2x-challenge`
2. Create heroku app, using custom script: `heroku create -b https://github.com/mars/create-react-app-buildpack.git`
3. Push to heroku: `git push heroku master`
4. Open: `heroku open`

### Deployment Instructions

Based on [these instructions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)
1. Clone the repo: `git clone https://github.com/pedropb/i2x-challenge`
2. Build: `npm run build` - this will create a build folder with all the static content of the app
3. Install `serve` a Static Server: `npm install -g serve`
    - Alternatively: setup a node or express server ([server.js](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#other-solutions))
4. Run server: `serve -s build` - this will initiate a static server on port 5000, serving `build` folder content.


