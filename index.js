import React from 'react';
import ReactDOM from 'react-dom';
import Q from 'q';
import { getIp } from './api'

export default class TestQAJAX extends React.Component {
  render() {
    console.log('render', new Date());
    return (
      <div>
        { this.props.ip ?
          this.renderAllData(this.props.ip) :
          <span>ERREUR !!!</span>
        }
      </div>
    );
  }

  renderAllData(ip) {
    return (
      <ul>
        <li>IP : {ip.origin}</li>
      </ul>
    );
  }

}

// TEST JSON
getIp().then( ip => {
  ReactDOM.render(<TestQAJAX ip={ip} />, document.getElementById('container'));
}).catch(err => {
  console.log('err', err);
  ReactDOM.render(<TestQAJAX />, document.getElementById('container'));
});

console.log('Other stuff ...', new Date());
