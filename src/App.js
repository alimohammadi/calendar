import React, { Component } from 'react';
import Calendar from './Components/Calendar';
class App extends Component {
  render() {
    return (
      <div className="container calendar-box">
        <div className="row">
          <div className="col text-center">
            <Calendar />
            {/* <Calendar year="1385" month="6" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
