# todo-list

Thank you for the opportunity to work on this assignment. It was pleasure and fun to learn Vue/Vuex. Nice framework to work with.
Also thank you for the push in order for me to learn to do basic unit testing.
I hope you like it.

You can check out a demo of the app here: https://todos-vue-designscaster.herokuapp.com

*Edit:* Server has changed a bit in order to setup easier deployment to Heroku. It now serves both static /dist folder as well as provides the API routes. Both apps can be still deployed and developed independently.

## Project setup
```
npm install
```
####
- Please install latest postgress and pgadmin in order to run the DB.
####
- Backup file for the db table is included in main directory - todos.backup
####
- Create an empty table 'todos' and use todos.backup in order to restore the db inside pg admin. DB owner can be postgress.

### Compiles and hot-reloads for development
```
npm run serve
```

### Runs node/express server
```
node server/server
```

### Compiles and minifies for production
```
npm run build
```

### Starts node server and serves the build from dist
```
npm run start
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
