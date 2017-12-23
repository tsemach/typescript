import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export class Management {

    constructor() {
    }
  
    public add(): express.Router {
      // route: more --------------------------------------------------------------
       let more = express.Router();
      
      more.get('/', (req, res, next) => {
        console.log("got request");
          res.json({
            message: 'Hello tsemach /management!'
          });
      });
    
      more.get('/tsemach', (req, res, next) => {
        console.log("got request");
        res.json({
          message: 'Hello tsemach, tsemach/management!'
        });
      });
  
      return more;
   // --------------------------------------------------------------------------
    }
}

export default new Management();