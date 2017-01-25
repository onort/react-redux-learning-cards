import * as types from './types';

export function markCard(card) {
  return { type: types.MARK_CARD, card };
}
