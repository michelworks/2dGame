import { Entity } from '../utilities/entity'

export class Game extends Entity {
  protected _lastTimestamp: number
  public Entities: Entity[] =[]

  public Awake(): void {
    super.Awake()

    this._lastTimestamp = Date.now()

    for(const entity of this.Entities) {
      entity.Awake()
    }
    window.requestAnimationFrame(() => {
      this._lastTimestamp = Date.now()

      this.Update()

    })
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000
     super.Update(deltaTime)

     for(const entity of this.Entities) {
       entity.Update(deltaTime)
     }
  }
}
