import qajax from 'qajax';

export function testJSON() {
  return qajax.getJSON('http://date.jsontest.com/');
}
