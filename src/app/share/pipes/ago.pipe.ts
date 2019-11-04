import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAgo'
})
export class AgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      // 日期不能直接相减，可以加上+转换为时间戳
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 30) {
        return '刚刚';
      }
      const intervals = {
        年: 3600 * 24 * 365,
        月: 3600 * 24 * 30,
        周: 3600 * 24 * 7,
        天: 3600 * 24,
        小时: 3600,
        分钟: 60,
        秒: 1
      };
      let conter = 0;
      for (const unitName in intervals) {
        if (intervals.hasOwnProperty(unitName)) {
          const unitValue = intervals[unitName];
          conter = Math.floor(seconds / unitValue);
          if (conter > 0) {
            return `${conter} ${unitName}前`;
          }
        }
      }

    }
    return value;
  }

}
