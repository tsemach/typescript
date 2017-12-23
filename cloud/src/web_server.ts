import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export class WebServer {

    constructor() {
    }
  
    public add(): express.Router {
      // route: more --------------------------------------------------------------
       let root = express.Router();
      
      root.get('/', (req, res, next) => {
        console.log("got request");
          res.json({
            message: 'Hello tsemach /web_api!'
          });
      });
    
      root.get('/tsemach', (req, res, next) => {
        console.log("got request");
        res.json({
          message: 'Hello tsemach, /web_api/tsemach!'
        });
      });
  
      return root;
   // --------------------------------------------------------------------------
    }
}

export default new WebServer();