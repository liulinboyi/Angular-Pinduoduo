import { Injectable, Inject, Type } from '@angular/core';
import { DomService, ChildConfig } from './dom.service';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly dialogElementId = 'dialog-container';
  private readonly overlayElementId = 'overlay';
  // 流 这个流可以保存最新的元素。
  private data$: BehaviorSubject<object | null> = new BehaviorSubject<object | null>(null);
  constructor(
    private domService: DomService,
    @Inject(DOCUMENT) private document: Document
    ) { }
    saveDate(val: object) {
      this.data$.next(val);
    }
    getDate() {
      return this.data$.asObservable();
    }
    open(component: Type<any>, childConfig: ChildConfig) {
      this.domService.appendComponentTo(
        this.dialogElementId,
        component,
        childConfig);
      if (childConfig.position) {
        const element = this.document.getElementById(this.dialogElementId);
        element.style.top = childConfig.position.top;
        element.style.left = childConfig.position.left;
        element.style.width = childConfig.position.width;
        element.style.height = childConfig.position.height;
        }
      this.toogleAll();
      // 每次打开对话框，清空数据
      this.data$.next(null);
    }
    private toogleAll() {
      this.toggleVisibility(this.document.getElementById(this.dialogElementId));
      this.toggleVisibility(this.document.getElementById(this.overlayElementId));

    }
    private toggleVisibility(element) {
      if (element.classList.contains('show')) {
        element.classList.remove('show');
        element.classList.add('hidden');
        return;
      }
      if (element.classList.contains('hidden')) {
        element.classList.remove('show');
        element.classList.add('show');
        return;
      }
    }
    close() {
      this.domService.removeComponent();
      this.toogleAll();
    }
}
