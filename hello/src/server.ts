import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// Application: 
// define two route objects, root and more endpoints.  
//  root => is link to '/' and '/tsemach'
//  more => is link to '/more', /more/tsemach'
class Application {

  // ref to Express instance
  public express: express.Application;

  // run configuration methods on the express instance.
  constructor() { 
    this.express = express();
    this.middleware();
    this.routes();
  }

  // configure express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // route: root --------------------------------------------------------------
    let root = express.Router();
    
    root.get('/', (req, res, next) => {
      console.log("got root request");
      res.json({
        message: 'route: /',
        paths: ['/tsemach', '/more', '/more/tsemach']
      });
    });
    root.get('/tsemach', (req, res, next) => {
      console.log("got request");
      res.json({
        message: 'Hello tsemach!'
      });
    });
    this.express.use('/', root);
    // --------------------------------------------------------------------------
    
    // route: more --------------------------------------------------------------
    let more = express.Router();
    
    more.get('/', (req, res, next) => {
      console.log("got request");
      res.json({
        message: 'Hello tsemach /more!'
      });
    });
    more.get('/tsemach', (req, res, next) => {
      console.log("got request");
      res.json({
        message: 'Hello tsemach, tsemach/more!'
      });
    });
    this.express.use('/more', more);
    // --------------------------------------------------------------------------
  }
}

let application = new Application();

const port: number = 3000;

application.express.listen(port, () => {
    // success callback
    console.log(`Listening at http://localhost:${port}/`);
});
