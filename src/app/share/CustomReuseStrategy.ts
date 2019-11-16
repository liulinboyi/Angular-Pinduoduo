// import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

// export class CustomReuseStrategy implements RouteReuseStrategy {

//     public static handlers: { [key: string]: DetachedRouteHandle } = {};

//     /** 删除缓存路由快照的方法 */
//     public static deleteRouteSnapshot(path: string): void {
//         const name = path.replace(/\//g, '_');
//         if (CustomReuseStrategy.handlers[name]) {
//             delete CustomReuseStrategy.handlers[name];
//         }
//     }

//     /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
//     shouldDetach(route: ActivatedRouteSnapshot): boolean {
//         // console.debug('shouldDetach======>', route);
//         return true;
//     }

//     /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
//     store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
//         // console.debug('store======>', route, handle);
//         CustomReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
//     }

//     /** 若 path 在缓存中有的都认为允许还原路由 */
//     shouldAttach(route: ActivatedRouteSnapshot): boolean {
//         // console.debug('shouldAttach======>', route);
//         return !!CustomReuseStrategy.handlers[this.getRouteUrl(route)];
//     }

//     /** 从缓存中获取快照，若无则返回nul */
//     retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
//         // console.debug('retrieve======>', route);
//         if (!CustomReuseStrategy.handlers[this.getRouteUrl(route)]) {
//             return null;
//         }

//         return CustomReuseStrategy.handlers[this.getRouteUrl(route)];
//     }

//     /** 进入路由触发，判断是否同一路由 */
//     shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//         // console.debug('shouldReuseRoute======>', future, curr);
//         return future.routeConfig === curr.routeConfig &&
//             JSON.stringify(future.params) === JSON.stringify(curr.params);
//     }

//     /** 使用route的path作为快照的key */
//     getRouteUrl(route: ActivatedRouteSnapshot) {
//         // tslint:disable-next-line:no-string-literal
//         const path = route['_routerState'].url.replace(/\//g, '_');
//         return path;
//     }

// }




// import {
//   ActivatedRouteSnapshot,
//   RouteReuseStrategy,
//   DetachedRouteHandle
// } from '@angular/router';

// /** Interface for object which can store both:
//  * An ActivatedRouteSnapshot, which is useful for determining whether or not you should attach a route (see this.shouldAttach)
//  * A DetachedRouteHandle, which is offered up by this.retrieve, in the case that you do want to attach the stored route
//  */
// interface RouteStorageObject {
//   snapshot: ActivatedRouteSnapshot;
//   handle: DetachedRouteHandle;
// }

// export class CustomReuseStrategy implements RouteReuseStrategy {
//   /**
//    * Object which will store RouteStorageObjects indexed by keys
//    * The keys will all be a path (as in route.routeConfig.path)
//    * This allows us to see if we've got a route stored for the requested path
//    */
//   storedRoutes: { [key: string]: RouteStorageObject } = {};

//   /**
//    * Decides when the route should be stored
//    * If the route should be stored, I believe the boolean is indicating to a controller whether or not to fire this.store
//    * _When_ it is called though does not particularly matter, just know that this determines whether or not we store the route
//    * An idea of what to do here: check the route.routeConfig.path to see if it is a path you would like to store
//    * @param route
//    * This is, at least as I understand it, the route that the user is currently on, and we would like to know if we want to store it
//    * @returns boolean indicating that we want to (true) or do not want to (false) store that route
//    */
//   shouldDetach(route: ActivatedRouteSnapshot): boolean {
//     const detach = true;
//     console.log('detaching', route, 'return: ', detach);
//     return detach;
//   }

//   /**
//    * Constructs object of type `RouteStorageObject` to store, and then stores it for later attachment
//    * @param route This is stored for later comparison to requested routes, see `this.shouldAttach`
//    * @param handle Later to be retrieved by this.retrieve, and offered up to whatever controller is using this class
//    */
//   store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
//     const storedRoute: RouteStorageObject = {
//       snapshot: route,
//       handle
//     };

//     console.log(
//       'store:',
//       storedRoute,
//       'into: ',
//       this.storedRoutes,
//       'path => ' + route.routeConfig.path
//     );
//     // tslint:disable-next-line:max-line-length
//     // routes are stored by path -
// the key is the path name,
// and the handle is stored under it so that you can only ever have one object stored for a single path
//     this.storedRoutes[route.routeConfig.path] = storedRoute;
//   }

//   /**
//    * Determines whether or not there is a stored route and, if there is, whether or not it should be rendered in place of requested route
//    * @param route The route the user requested
//    * @returns boolean indicating whether or not to render the stored route
//    */
//   shouldAttach(route: ActivatedRouteSnapshot): boolean {
//     // this will be true if the route has been stored before
//     const canAttach: boolean =
//       !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path];
//     console.log('shouldAttach', canAttach);
//     // this decides whether the route already stored should be rendered in place of the requested route, and is the return value
//     // at this point we already know that the paths match because the storedResults key is the route.routeConfig.path
//     // so, if the route.params and route.queryParams also match, then we should reuse the component
//     if (canAttach) {
//       const willAttach = true;
//       console.log('param comparison:');
//       console.log(
//         this.compareObjects(
//           route.params,
//           this.storedRoutes[route.routeConfig.path].snapshot.params
//         )
//       );
//       console.log('query param comparison');
//       console.log(
//         this.compareObjects(
//           route.queryParams,
//           this.storedRoutes[route.routeConfig.path].snapshot.queryParams
//         )
//       );

//       const paramsMatch: boolean = this.compareObjects(
//         route.params,
//         this.storedRoutes[route.routeConfig.path].snapshot.params
//       );
//       const queryParamsMatch: boolean = this.compareObjects(
//         route.queryParams,
//         this.storedRoutes[route.routeConfig.path].snapshot.queryParams
//       );

//       console.log(
//         'deciding to attach...',
//         route,
//         'does it match?',
//         this.storedRoutes[route.routeConfig.path].snapshot,
//         'return: ',
//         paramsMatch && queryParamsMatch
//       );
//       return paramsMatch && queryParamsMatch;
//     } else {
//       return false;
//     }
//   }

//   /**
//    * Finds the locally stored instance of the requested route, if it exists, and returns it
//    * @param route New route the user has requested
//    * @returns DetachedRouteHandle object which can be used to render the component
//    */
//   retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
//     // return null if the path does not have a routerConfig OR if there is no stored route for that routerConfig
//     if (!route.routeConfig || !this.storedRoutes[route.routeConfig.path]) {
//       return null;
//     }

//     console.log(
//       'retrieving',
//       'return: ',
//       this.storedRoutes[route.routeConfig.path],
//       'path: => ' + route.routeConfig.path
//     );
//     /** returns handle when the route.routeConfig.path is already stored */
//     const requestedPath = route.routeConfig.path;
//     return this.storedRoutes[route.routeConfig.path].handle;
//   }

//   /**
//    * Determines whether or not the current route should be reused
//    * @param future The route the user is going to, as triggered by the router
//    * @param curr The route the user is currently on
//    * @returns boolean basically indicating true if the user intends to leave the current route
//    */
//   shouldReuseRoute(
//     future: ActivatedRouteSnapshot,
//     curr: ActivatedRouteSnapshot
//   ): boolean {
//     console.log(
//       'deciding to reuse',
//       'future',
//       future.routeConfig,
//       'current',
//       curr.routeConfig,
//       'return: ',
//       future.routeConfig === curr.routeConfig
//     );
//     return future.routeConfig === curr.routeConfig;
//   }

//   /**
//    * This nasty bugger finds out whether the objects are _traditionally_ equal to
//    * each other, like you might assume someone else would have put this function in vanilla JS already
//    * One thing to note is that it uses coercive comparison (==) on properties which both objects have, not strict comparison (===)
//    * @param base The base object which you would like to compare another object to
//    * @param compare The object to compare to base
//    * @returns boolean indicating whether or not the objects have all the same properties and those properties are ==
//    */
//   private compareObjects(base: any, compare: any): boolean {
//     // loop through all properties in base object
//     for (const baseProperty in base) {
//       // determine if comparrison object has that property, if not: return false
//       if (compare.hasOwnProperty(baseProperty)) {
//         switch (typeof base[baseProperty]) {
//           // if one is object and other is not: return false
//           // if they are both objects, recursively call this comparison function
//           case 'object':
//             if (
//               typeof compare[baseProperty] !== 'object' ||
//               !this.compareObjects(base[baseProperty], compare[baseProperty])
//             ) {
//               return false;
//             }
//             break;
//           // if one is function and other is not: return false
//           // if both are functions, compare function.toString() results
//           case 'function':
//             if (
//               typeof compare[baseProperty] !== 'function' ||
//               base[baseProperty].toString() !== compare[baseProperty].toString()
//             ) {
//               return false;
//             }
//             break;
//           // otherwise, see if they are equal using coercive comparison
//           default:
//             if (base[baseProperty] !== compare[baseProperty]) {
//               return false;
//             }
//         }
//       } else {
//         return false;
//       }
//     }

//     // returns true only after false HAS NOT BEEN returned through all loops
//     return true;
//   }
// }




/**
 * Created by kkcra on 2019/2/27
 */
import {ActivatedRoute, ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {ComponentRef} from '@angular/core';
import {ReuseComponentInterface} from './reuse-component.interface';

const debug = true;

export class CustomReuseStrategy implements RouteReuseStrategy {
  _cacheRouters: {
    [key: string]: {
      snapshot: ActivatedRouteSnapshot,
      handle: Handle<any>,
      store: any
    }
  } = {};

  /**
   * 是不是应该在离开的时候存一下路由状态
   * detach 分离
   * 在分离的时候，是不是应该存一下旧路由？
   * @param route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 对路由 data 里 reuse 字段为 true 的路由进行存储
    const result = route && route.routeConfig && route.routeConfig.data && (route.routeConfig.data.reuse === true);
    if (debug) {
      console.log(route.url + ' should detach: ' + !!result);
    }
    return !!result;
  }

  /**
   * 我把路由和路由处理对象告诉你，你存一下
   * @param route
   * @param handle
   */
  store(route: ActivatedRouteSnapshot, handle: Handle<any>): void {
    let store = null;
    try {
      const handle2 = handle as Handle<ReuseComponentInterface<any>>;
      store = handle2.componentRef.instance.store();
      console.log(store);

    } catch (e) {
      // empty
    }
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同RouterModule.forRoot中的配置
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle,
      store
    };
    console.log(this._cacheRouters);

  }

  /**
   * 在进入的时候，是不是应该用还原的方式显示组件
   * attach 附加
   * 在加载的时候，是不是应该取一下新路由
   * @param route
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // 在缓存中有的都认为允许还原路由
    const result = !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path] && (
      // 对路由 data 里 reuse 字段为 true 的路由进行存储
      route && route.routeConfig && route.routeConfig.data && (route.routeConfig.data.reuse === true)
    );
    if (debug) {
      console.log(route.url + ' should attach: ' + !!result);
    }
    return !!result;
  }

  /**
   * 我把我要去的地方告诉你，你把之前存的路由处理对象还给我
   * @param route
   */
  retrieve(route: ActivatedRouteSnapshot): Handle<any> {
    // 从缓存中获取快照，若无则返回null
    if (!route.routeConfig || !this._cacheRouters[route.routeConfig.path]) { return null; }
    const cache: {
      snapshot: ActivatedRouteSnapshot,
      handle: Handle<any>,
      store: any
    } = this._cacheRouters[route.routeConfig.path];
    try {
      const handle2 = cache.handle as Handle<ReuseComponentInterface<any>>;
      handle2.componentRef.instance.retrieve(cache.store);
    } catch (e) {
      // empty
    }
    return cache.handle;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // 同一路由时复用路由
    return future.routeConfig === curr.routeConfig;
  }
}

interface Handle<T> extends DetachedRouteHandle {
  componentRef: ComponentRef<T>;
  contexts: Map<any, any>;
  route: TreeNode<ActivatedRoute>;
}

declare class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];

  constructor(value: T, children: TreeNode<T>[]);

  toString(): string;
}

