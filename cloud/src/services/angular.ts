import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { WSAEDQUOT } from 'constants';

export class Angular {

    constructor() {
    }
  
    public add(): express.Router {
       let router = express.Router();
      
      router.get('/data.json', (req, res, next) => {
        console.log("got request");
          res.json({
            path: 'data.json',
            message: 'GET data.json response message'
          });
      });
    
  
      // route: save ---------------------------------------------------------------
      router.post('/data.json', function (req, res) {
        console.log('angular: POST got call from client post ' + req);
        console.log('angular: POST data received was: ' + JSON.stringify(req.body, undefined, 2));
            
        // set the appropriate HTTP header
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
           
        res.json({
          "status": "ok",
          "message": "got data.json post request"
        });
      })
      
      return router;
      // --------------------------------------------------------------------------
    }
}

export default new Angular();
