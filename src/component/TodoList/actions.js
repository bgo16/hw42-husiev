export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM_COLOR = 'TOGGLE_ITEM_COLOR';

export const addItem = (text) => ({
  type: ADD_ITEM,
  text
});

export const toggleItemColor = (id) => ({
  type: TOGGLE_ITEM_COLOR,
  id
});
