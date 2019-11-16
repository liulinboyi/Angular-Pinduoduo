/**
 * Created by kkcra on 2019/2/28
 */
export interface ReuseComponentInterface<T> {
  /**
   * 路由会在离开你的时候，问你要不要存写什么数据
   * 你如果要存些数据，就返回给路由
   */
  store(): T;

  /**
   * 路由会在回到这里的时候调用这个函数
   * 并把你刚刚存下来的数据返回给你
   * @param value
   */
  retrieve(value: T);
}
