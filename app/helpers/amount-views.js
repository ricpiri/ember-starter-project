import { helper } from '@ember/component/helper';

export function amountViews([views]) {
  if (views < 1000) {
    return views;
  }
  return `${(views / 1000).toFixed()}k`;
}

export default helper(amountViews);
