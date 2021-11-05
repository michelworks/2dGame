export default class Engine {
  constructor(time_step) {
    this.animation_frame_request = undefined
    this.time = undefined;
    this.time_step = time_step;
    this.updated = false;
    this.update = undefined;
    this.render = undefined;

  }

  _run(time_step) {
    this.animation_frame_request = window.requestAnimationFrame(this._handleRun.bind(this));

    this.accumelated_time += time_step - this.time;
    this.time = time_step;

    if (this.accumelated_time >= this.time_step * 3) {
      this.accumelated_time = this.time_step;
    }

    while (this.accumelated_time >= this.time_step) {
      this.accumelated_time -= this.time_step;
      this.update(time_step);
      this.updated = true;
    }

    if (this.updated) {
      this.updated = false;
      this.render(time_step);
    }
  }

  _handleRun(time_step) {
    this._run(time_step);
  }

  setUpdate(update) {
    this.update = update;
  }

  setRender(render) {
    this.render = render;
  }

  start() {
    this.accumelated_time = this.time_step;
    this.time = window.performance.now();
    this.animation_frame_request = window.requestAnimationFrame(this._handleRun.bind(this));
  }

  stop() {
    window.cancelAnimationFrame(this.animation_frame_request);
  }
}
