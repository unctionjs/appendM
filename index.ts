export default function appendM<A, B> (value: A) {
  return function appendMValue (array: Array<B>): Array<A | B> {
    array.push(value);

    return array;
  };
}
