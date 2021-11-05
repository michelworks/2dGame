import { IComponent } from './component.h'

type constr<T> = { new(...args: unknown[]): T}

export abstract class Entity {
  protected _components: IComponent[] = []

  public get Components(): IComponent[] {
    return this._components
  }

  public AddComponent(component: IComponent): void {
    this._components.push(component)
    component.Entity = this
  }

  public GetComponent<Component extends IComponent>(constr: constr<Component>): Component {
    for(const component of this._components) {
      if (component instanceof constr) {
        return component as Component
      }
    }

    throw new Error(`Component ${constr.name} not found on Entity ${this.constructor.name}`)
  }

  public RemoveComponent<Component extends IComponent>(constr: constr<Component>): void {
    const components: IComponent[] = []
    let itemRemove: IComponent | null = null
    for(const component of this._components) {
      if (component instanceof constr) {
        itemRemove = component
      } else {
        components.push(component)
      }
    }

    if (itemRemove) {
      itemRemove.Entity = null
      this._components = components
    }
  }

  public HasComponent<Component extends IComponent>(constr: constr<Component>): boolean {
    for(const component of this._components) {
      if (component instanceof constr ) {
        return true
      }
    }

    return false
  }

  public Awake(): void {
    for(const component of this._components) {
      component.Awake()
    }
  }

  public Update(deltaTime: number): void {
    for(const component of this._components) {
      component.Update(deltaTime)
    }
  }
}
