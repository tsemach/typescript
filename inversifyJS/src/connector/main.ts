
import { myContainer } from "./tx-inversify.config";
import { TYPES } from "./tx-injection-types";
import { TxConnectPoint } from './tx-connect-point'

const CP1 = myContainer.get<TxConnectPoint>(TYPES.TxConnectPoint);
const CP2 = myContainer.get<TxConnectPoint>(TYPES.TxConnectPoint);

CP1.tasks().connect('CP1', 'tasks:connect');
CP1.reply().connect('CP1', 'reply:connect');
CP1.undos().connect('CP1', 'undos:connect');

CP2.tasks().connect('CP2', 'tasks:connect');
CP2.reply().connect('CP2', 'reply:connect');
CP2.undos().connect('CP2', 'undos:connect');
