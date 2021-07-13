import {action, computed, makeAutoObservable, observable} from "mobx";

export default class MenuStore {
  @observable _isMenuOpen = false;

  @computed get isMenuOpen() {
    if (typeof document !== 'undefined')
      document.body.style.overflow = this._isMenuOpen ? 'hidden' : 'auto';
    if (typeof window !== 'undefined')
      if (this._isMenuOpen) {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
    return this._isMenuOpen;
  }

  @action toggleMenu = () => this._isMenuOpen = !this.isMenuOpen;

  @action setOpenMenu = (v: boolean) => this._isMenuOpen = v;

  constructor() {
    makeAutoObservable(this)
  }
}