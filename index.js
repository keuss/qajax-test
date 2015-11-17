import React from 'react';
import ReactDOM from 'react-dom';
import Q from 'q';
import { getData, getIp } from './api'

export default class TestQAJAX extends React.Component {
  render() {
    console.log('render', new Date());
    return (
      <div>
        { this.props.ip && this.props.otherData ?
          this.renderAllData(this.props.ip, this.props.otherData) :
          <span>ERREUR !!!</span>
        }
      </div>
    );
  }

  renderAllData(ip, data) {
    console.log('data', JSON.stringify(data));
    return (
      <ul>
        <li>IP : {ip.origin}</li>
        <li>Headers Host : {data.headers.Host}</li>
      </ul>
    );
  }

}

// TEST JSON
Q.all([
  getIp(),
  getData()
]).spread( (ip, data) => {
  ReactDOM.render(<TestQAJAX ip={ip} otherData={data} />, document.getElementById('container'));
}).catch(err => {
  console.log('err', err);
  ReactDOM.render(<TestQAJAX />, document.getElementById('container'));
});

console.log('Other stuff ...', new Date());
