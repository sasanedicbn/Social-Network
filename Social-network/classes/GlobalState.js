export class GlobalState {
  Loaded;
  constructor() {
    this.Loaded = false;
  }
  setToLoaded() {
    this.Loaded = true;
  }
}
