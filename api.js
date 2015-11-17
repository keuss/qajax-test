import qajax from 'qajax';

export function getIp() {
  return qajax.getJSON('http://httpbin.org/ip');
}
