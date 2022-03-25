import { ActionsUnion, ActionTypes } from "./actions";

export const initialState = {
  items: [],
  productId: 0
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };

    case ActionTypes.SetProductId:
      return {
        ...state,
        productId: action.payload
      };

    case ActionTypes.LoadProduct:
      return {
        products: state.items[0]
      };

    default:
      return state;
  }
}
