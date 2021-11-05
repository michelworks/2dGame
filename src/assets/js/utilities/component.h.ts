import { Entity } from './entity'
import { IWake, IUpdate } from './lifecycle.h'


export interface IComponent extends IWake, IUpdate {
  Entity: Entity | null
}
