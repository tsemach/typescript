import { injectable, inject } from "inversify";
import "reflect-metadata";

import { TxConnector } from "./tx-connector"
import { TYPES } from "./tx-injection-types";

@injectable()
export class TxConnectPoint {
    @inject(TYPES.TxConnector) private _tasks: TxConnector;
    @inject(TYPES.TxConnector) private _reply: TxConnector;
    @inject(TYPES.TxConnector) private _undos: TxConnector;
  
    constructor() {
    }
      
    reply() {
      return this._reply;
    }
  
    tasks() {
      return this._tasks;
    }
  
    undos() {
      return this._undos;
    }
  }
  