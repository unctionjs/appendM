export default function appendM (value) {
  return function appendMValue (list) {
    list.push(value);

    return list;
  };
}
