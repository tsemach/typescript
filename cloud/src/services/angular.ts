import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export class Angular {

    constructor() {
    }
  
    public add(): express.Router {
      // route: more --------------------------------------------------------------
       let router = express.Router();
      
      router.get('/', (req, res, next) => {
        console.log("got request");
          res.json({
            message: 'Hello tsemach /management!'
          });
      });
    
  
      router.post('/save', function (req, res) {
        console.log('angular: POST got call from client post ' + req)                
        console.log('angular: POST data received was: ' + JSON.stringify(req.body));
            
        // set the appropriate HTTP header
        res.setHeader('Content-Type', 'application/json');
           
        res.json({
          "status": "ok"
        });
      })
      
      return router;
   // --------------------------------------------------------------------------
    }
}

export default new Angular();