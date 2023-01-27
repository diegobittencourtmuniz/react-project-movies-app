import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // _(items) returns a loadash object
  // with the help of take method we can select the number of elements we need from that array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
