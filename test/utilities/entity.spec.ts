import { Entity }  from "@root/assets/js/utilities/entity";
import { IComponent } from "@root/assets/js/utilities/component.h";

class EntitySpec extends Entity {}
class Component1 implements IComponent {
  public Entity: EntitySpec
  public Awake(): void {}
  public Update(deltaTime: number): void {}
}

class Component2 implements IComponent {
  public Entity: EntitySpec
  public Awake(): void {}
  public Update(deltaTime: number): void {}
}

class Component3 implements IComponent {
  public Entity: EntitySpec
  public Awake(): void {}
  public Update(deltaTime: number): void {}
}

describe('Testing Entity', () =>  {
  let entity: EntitySpec
  const component1 = new Component1()
  const component2 = new Component2()
  const component3 = new Component3()

  beforeEach(() => {
    entity = new EntitySpec();
  })

  it ('should add components', () => {
    expect(entity.Components.length).toBe(0)
    entity.AddComponent(component1)
    entity.AddComponent(component2)
    entity.AddComponent(component3)

    expect(entity.Components.length).toBe(3)
    expect(entity.GetComponent(Component1)).toBe(component1)
    expect(entity.GetComponent(Component2)).toBe(component2)
    expect(entity.GetComponent(Component3)).toBe(component3)

  })

  it ('should remove components', () => {

    entity.AddComponent(component1)
    entity.AddComponent(component2)
    entity.AddComponent(component3)
    expect(entity.Components.length).toBe(3)
    entity.RemoveComponent(Component2)
    expect(entity.Components.length).toBe(2)
  })

  it ('check components', () => {
    entity.AddComponent(component1)
    entity.AddComponent(component2)
    entity.AddComponent(component3)
    expect(entity.HasComponent(Component2)).toBeTruthy()
    entity.RemoveComponent(Component2)
    expect(entity.HasComponent(Component2)).toBeFalsy();
  })

  it('should throw error component not found', ()=> {
    expect(entity.HasComponent(Component2)).toBeFalsy()
    expect(() => entity.GetComponent(Component2)).toThrow()
  })
})
