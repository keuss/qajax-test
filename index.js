import React from 'react';
import ReactDOM from 'react-dom';
import { testJSON } from './api'

export default class TestQAJAX extends React.Component {
  render() {
    return (
      <div>
        { this.props.param ?
          this.renderTime(this.props.param.time, this.props.param.date) :
          <span>ERREUR !!!</span>
        }
      </div>
    );
  }

  renderTime(time, date) {
    return (
      <ul>
        <li>Time : { time }</li>
        <li>Date : { date }</li>
      </ul>
    );
  }

}

// TEST JSON
testJSON().then(json => {
  ReactDOM.render(<TestQAJAX param={json} />, document.getElementById('container'));
}).catch(err => {
  console.log('err', err);
  ReactDOM.render(<TestQAJAX />, document.getElementById('container'));
});
