import * as U from 'karet.util';

const state =
  U.atom( { image: { width: 640, height: 480 }
          } );

state.log('state');

export default state;
