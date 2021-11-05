export default class Levels {
  private _level = 0
  private _maps: number[][] = []

  constructor(maps: number[][]) {
    this._maps = maps
  }

  public setLevel(level: number): void
  {
    this._level = level
  }

  public getLevel(): number
  {
    return this._level
  }

  public getMap(): number[]
  {
    return this._maps[this.getLevel()]
  }

  public update(): void {
    // code for updating levels
  }

  public render():void {
    // code for rendering levels
  }
}
