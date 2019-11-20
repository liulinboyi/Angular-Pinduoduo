import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Inject, Type, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface DialogPos {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface ChildConfig {
  inputs: object;
  outputs: object;
  position?: DialogPos;
}

@Injectable({
  providedIn: 'root'
})
export class DomService {

  private childCompoenntRef: ComponentRef<any>;
  constructor(
    // 组件工厂
    private resolver: ComponentFactoryResolver,
    // angular程序本身的引用
    private appRef: ApplicationRef,
    // 注入
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public appendComponentTo(
    parentId: string,
    child: Type<any>,
    childConfig: ChildConfig) {
     const childCompoenntRef = this.resolver.resolveComponentFactory(child).create(this.injector);
     this.attatchConfig(childConfig, childCompoenntRef);
     this.childCompoenntRef = childCompoenntRef;
     this.appRef.attachView(childCompoenntRef.hostView);
     const ChildDomEnelent = (childCompoenntRef.hostView as EmbeddedViewRef<any>)
     .rootNodes[0] as HTMLElement;
     this.document.getElementById(parentId).appendChild(ChildDomEnelent);
  }
  /**
   * removeComponent
   */
  public removeComponent() {
    this.appRef.detachView(this.childCompoenntRef.hostView);
  }
  /**
   * attatchConfig
   */
  public attatchConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const element = inputs[key];
        componentRef.instance[key] = element;
      }
    }
    for (const key in outputs) {
      if (outputs.hasOwnProperty(key)) {
        const element = outputs[key];
        componentRef.instance[key] = element;
      }
    }
  }
}
