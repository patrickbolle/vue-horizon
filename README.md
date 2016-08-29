# vuehorizon

> A Vue.js + Horizon JS tutorial

This application goes over the basics on how to connect [Vue JS](https://vuejs.org) with RethinkDB's [Horizon](https://horizon.io) project. This is really fast stack to work with and there isn't much documentation out there for connecting the two so I figured I'd build a tutorial to get people started.
I'll be going over the following:
- Installing Vue + Horizon
- Connecting Vue + Horizon with their scaffolding tools
- Building a full stack SPA for note-taking
  - Vue-router for client side routing
  - CRUD operations
  - (Maybe) Authentication and User Management
- Deployment to Digital Ocean

I will be posting the different sections of this tutorial on [my website](http://patrickbollenbach/blog).

Hope you can learn something from this!

## Build Setup

``` bash
# install dependencies
npm install

# start horizon server
hz serve --dev

# serve Vue project with hot reload at localhost:8080
npm run dev

# build for production with minification (haven't tested yet, should work though...)
npm run build

```
