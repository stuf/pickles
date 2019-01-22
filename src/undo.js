import * as U from 'karet.util';
import * as H from 'kefir.partial.lenses.history';

import state, { initialState } from './state';

//

const history = U.atom(H.init({}, initialState));
const present = U.view(H.present, history);

const reactToState = U.thru(state, U.set(U.view(H.present, history)),);

state.onValue(v => present.set(v));

reactToState.log('undo');

export default reactToState;
