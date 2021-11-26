import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{ background: props.win ? "red" : "" }}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        win={
          (this.props.winner || []).find((index) => index === i) != undefined
        }
      />
    );
  }

  render() {
    let boardMap = [];
    for (let i = 0; i < 3; i++) {
      let innerMap = [];
      for (let j = 0; j < 3; j++) {
        innerMap.push(this.renderSquare(i * 3 + j));
      }
      boardMap.push(
        <div className="board-row" key={i}>
          {innerMap}
        </div>
      );
    }
    return <div>{boardMap}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          point: 0,
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      reverse: false,
      winnerIndex: null,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner) {
      this.setState({ winnerIndex: winner });
      return;
    }
    if (this.state.stepNumber == 9) {
      alert("Peace");
    }
    if (squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares, point: i }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  jumpTo(step) {
    this.setState({ xIsNext: step % 2 == 0, stepNumber: step });
  }
  render() {
    let history = this.state.history.slice();
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    if (this.state.reverse) {
      history = history.reverse();
    }
    const moves = history.map((step, move) => {
      let desc;
      if (this.state.reverse) {
        desc =
          history.length - move - 1
            ? "Go to move #" + (history.length - move)
            : "Go to start";
      } else {
        desc = move ? "Go to move #" + move : "Go to start";
      }
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
            style={{ fontWeight: move == this.state.stepNumber ? 600 : 100 }}
          >
            {desc}
          </button>
          <span>
            row:{Math.floor(step.point / 3) + 1} col:{(step.point % 3) + 1}
          </span>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + current.squares[winner[0]];
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winner={winner}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <button
            onClick={() => this.setState({ reverse: !this.state.reverse })}
          >
            reverse
          </button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}
