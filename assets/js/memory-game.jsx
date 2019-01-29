import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Memory />, root);
}

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.boardState = [];
  }

  initializeBoard() {
    this.state = {
      board: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"],
      secondGuess: False
    }
    
  }
  
  test(_ev) {
    console.log(_ev.target.value);
    _ev.target.innerHTML = _ev.target.value;
  }
  
  
  render() {
    let tile =
      <button className="gameButton" onClickCapture={this.test.bind(this)}>&nbsp;</button>;
    
    let tileRow =
      <div className="gameRow">
        {tile} {tile} {tile} {tile} {"\n"}
      </div>;
    
    let menuRow =
      <div className="gameMenu">
        <button className="gameRestart" onClickCapture={this.test.bind(this)}>Restart</button>
        <p>
          Click Count: 000
        </p>
      </div>;
    
    let gameBr = <hr className="gameBr"/>;
    
    return <div className="gameBoard">
      {tileRow}
      {gameBr}
      {tileRow}
      {gameBr}
      {tileRow}
      {gameBr}
      {tileRow}
      {gameBr}
      {menuRow}
    </div>;
  }
}