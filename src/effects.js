import * as U from 'karet.util';

const bus = U.bus();

const prop = U.toProperty(bus);

export default prop;

prop.log('bus prop');

//

export const dispatch = U.liftRec(x => bus.push(x));
export const dispatchError = U.liftRec(err => bus.error(err));
export const end = () => bus.end();
