import { Game } from "@root/assets/js/entity/game";
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

class Entity1 extends Entity {}
class Entity2 extends Entity {}
class Entity3 extends Entity {}

describe('Testing Game', () =>{
  let game: Game
  const component1 = new Component1()
  const component2 = new Component2()
  const component3 = new Component3()

  const entity1 = new Entity1()
  const entity2 = new Entity2()
  const entity3 = new Entity3()

  beforeEach(() => {
    game = new Game();
    game.Entities.push(entity1, entity2, entity3)

    window.requestAnimationFrame = jest.fn().mockImplementationOnce((callback) => callback() )
  })

  it('should start update after waking up game', () => {
    const spyUpdate = jest.spyOn(game, 'Update')

    game.Awake();

    expect(spyUpdate).toHaveBeenCalledTimes(1)
  })

  it('should awake all components', () => {
    const spyUpdate1 = jest.spyOn(component1, 'Awake')
    const spyUpdate2 = jest.spyOn(component2, 'Awake')
    const spyUpdate3 = jest.spyOn(component3, 'Awake')

    expect(spyUpdate1).not.toBeCalled()
    expect(spyUpdate2).not.toBeCalled()
    expect(spyUpdate3).not.toBeCalled()

    game.AddComponent(component1)
    game.AddComponent(component2)
    game.AddComponent(component3)

    game.Awake()

    expect(spyUpdate1).toBeCalled()
    expect(spyUpdate2).toBeCalled()
    expect(spyUpdate3).toBeCalled()

  });

  it('should update all components', () => {
    const spyUpdate1 = jest.spyOn(component1, 'Update')
    const spyUpdate2 = jest.spyOn(component2, 'Update')
    const spyUpdate3 = jest.spyOn(component3, 'Update')

    expect(spyUpdate1).not.toBeCalled()
    expect(spyUpdate2).not.toBeCalled()
    expect(spyUpdate3).not.toBeCalled()

    game.AddComponent(component1)
    game.AddComponent(component2)
    game.AddComponent(component3)

    game.Update()

    expect(spyUpdate1).toBeCalled()
    expect(spyUpdate2).toBeCalled()
    expect(spyUpdate3).toBeCalled()

  });

  it('should awake all Childrens', () => {
    const spyUpdate1 = jest.spyOn(entity1, 'Awake')
    const spyUpdate2 = jest.spyOn(entity2, 'Awake')
    const spyUpdate3 = jest.spyOn(entity3, 'Awake')

    expect(spyUpdate1).not.toBeCalled()
    expect(spyUpdate2).not.toBeCalled()
    expect(spyUpdate3).not.toBeCalled()

    game.Awake()

    expect(spyUpdate1).toBeCalled()
    expect(spyUpdate2).toBeCalled()
    expect(spyUpdate3).toBeCalled()

  });

  it('should update all Childrens', () => {
    const spyUpdateChild1 = jest.spyOn(entity1, 'Update')
    const spyUpdateChild2 = jest.spyOn(entity2, 'Update')
    const spyUpdateChild3 = jest.spyOn(entity3, 'Update')

    expect(spyUpdateChild1).not.toBeCalled()
    expect(spyUpdateChild2).not.toBeCalled()
    expect(spyUpdateChild3).not.toBeCalled()


    game.Update()

    expect(spyUpdateChild1).toBeCalled()
    expect(spyUpdateChild2).toBeCalled()
    expect(spyUpdateChild3).toBeCalled()

  });

})
