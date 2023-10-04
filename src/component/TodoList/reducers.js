import { ADD_ITEM, TOGGLE_ITEM_COLOR } from './actions';

const initialState = {
  items: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length,
            text: action.text,
            color: 'red'
          }
        ]
      };

    case TOGGLE_ITEM_COLOR:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              color: item.color === 'red' ? 'green' : 'red'
            };
          }
          return item;
        })
      };

    default:
      return state;
  }
};

export default rootReducer;
