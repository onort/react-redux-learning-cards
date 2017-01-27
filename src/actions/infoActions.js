import * as types from './types';

export function markCard(card, mark) {
  return { type: types.MARK_CARD, card, mark };
}

export function revealAnswer() {
  return { type: types.REVEAL_ANSWER };
}
