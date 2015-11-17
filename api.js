import qajax from 'qajax';

export function getIp() {
  return qajax.getJSON('http://httpbin.org/ip');
}

export function getData() {
  return qajax.getJSON('http://httpbin.org/delay/3');
}
