import { ActionsUnion, ActionTypes } from './actions';

export const initialState = {
  items: []
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...state.items, ...action.payload]
      };

    default:
      return state;
  }
}
