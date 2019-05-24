import express from 'express'
import exphbs from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'
import indexRoutes from './routes'
import adminRoutes from './routes/admin'

class App {
    public app: express.Application

    public constructor () {
      this.app = express()
      this.settings()
      this.middlewares()
      this.templates()
      this.routes()
    }

    private settings (): void {
      this.app.set('port', 8080)
      this.app.use(express.static(path.join(__dirname, '/../static/')))
    }

    private middlewares (): void {
      this.app.use(morgan('dev'))
      this.app.use(express.json())
    }

    private templates (): void {
      this.app.engine('hbs', exphbs({
        defaultLayout: 'main',
        extname: 'hbs'
      }))
      this.app.set('view engine', 'hbs')
    }

    private routes (): void {
      this.app.use('/', indexRoutes)
      this.app.use('/admin', adminRoutes)
    }

    public start (): void {
      this.app.listen(this.app.get('port'), () => {
        console.log('>>> Server is running at', this.app.get('port'))
      })
    }
}

export default App
