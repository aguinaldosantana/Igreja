"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _expresshandlebars = require('express-handlebars'); var _expresshandlebars2 = _interopRequireDefault(_expresshandlebars);
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _admin = require('./routes/admin'); var _admin2 = _interopRequireDefault(_admin);

class App {
    

     constructor () {
      this.app = _express2.default.call(void 0, )
      this.settings()
      this.middlewares()
      this.templates()
      this.routes()
    }

     settings () {
      this.app.set('port', 8080)
      this.app.use(_express2.default.static(_path2.default.join(__dirname, '/../static/')))
    }

     middlewares () {
      this.app.use(_morgan2.default.call(void 0, 'dev'))
      this.app.use(_express2.default.json())
    }

     templates () {
      this.app.engine('hbs', _expresshandlebars2.default.call(void 0, {
        defaultLayout: 'main',
        extname: 'hbs'
      }))
      this.app.set('view engine', 'hbs')
    }

     routes () {
      this.app.use('/', _routes2.default)
      this.app.use('/admin', _admin2.default)
    }

     start () {
      this.app.listen(this.app.get('port'), () => {
        console.log('>>> Server is running at', this.app.get('port'))
      })
    }
}

exports. default = App
