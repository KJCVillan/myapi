const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Alma app listening at http://127.0.0.1:${app.get('port')}`)
  console.log(app.get('name'));
})