import * as U from 'karet.util';
import * as L from 'partial.lenses';

export const imageIn = U.view('image');

export const Image = {
  posIn: U.view('pos'),
  widthIn: U.view('width'),
  heightIn: U.view('height'),
};

export const widthIn = U.view('width');
export const heightIn = U.view('height');

export const editorStateIn = U.view('editor');

export const currentCanvasSizeIn = U.view(['editor', L.props('width', 'height')]);
export const currentCursorPositionIn = U.view(['editor', 'current', 'position']);
export const currentColorIn = U.view(['editor', 'current', 'color']);
export const currentBlobIn = U.view(['editor', 'current', 'blob']);
