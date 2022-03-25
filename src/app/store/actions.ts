import { Action } from '@ngrx/store';

export interface Product {
  blend_name: string,
  variety: string,
  intensifier: string,
  notes: string,
  origin: string
}

export enum ActionTypes {
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  LoadProduct = '[Products] Load Product',
  SetProductId = 'Set Product'
}

export class SetProductId implements Action {
  readonly type = ActionTypes.SetProductId;
  constructor(public payload: { id: number }){}
}

export class GetProduct implements Action {
  readonly type = ActionTypes.LoadProduct;
  constructor(public payload: { id: number }){}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;

  constructor(public payload: { page: number; limit: number }) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export type ActionsUnion = LoadItems | GetItems | GetProduct | SetProductId;
