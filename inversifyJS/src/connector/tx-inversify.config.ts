import { Container } from "inversify";

import { TYPES } from "./tx-injection-types";
import { TxConnector } from "./tx-connector";
import { TxConnectPoint } from "./tx-connect-point";
import { TxConnectorRabbit } from './tx-connector-rabbit';

const myContainer = new Container();
myContainer.bind<TxConnectPoint>(TYPES.TxConnectPoint).to(TxConnectPoint);
myContainer.bind<TxConnector>(TYPES.TxConnector).to(TxConnectorRabbit);

export { myContainer };
