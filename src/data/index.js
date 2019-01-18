class Message {
  constructor(payload) {
    this.payload = payload;
  }
}

export default Message;

//

export class NoOp extends Message {}

export class OnPixelCoordinates extends Message {}

export class OnClickPoint extends Message {}
