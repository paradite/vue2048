import cloneDeep from 'lodash.clonedeep';
import { paintMatrix } from './util';

export const keys = {
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown'
};

const ALL_MOVES = [
  keys.ArrowLeft,
  keys.ArrowRight,
  keys.ArrowUp,
  keys.ArrowDown
];

// const WIN_NUMBER = 2048;
const WIN_NUMBER = 128;
const AUTO_INTERVAL = 50;

export class Game {
  constructor() {
    this.resetRows();
    this.moved = {};
    this.moveCount = 0;
    this.scores = [];
    this.isAuto = false;
    this.autoInterval = null;
    this.winNumber = WIN_NUMBER;
  }
  resetRows = () => {
    this.rows = new Array(4);
    for (let i = 0; i < this.rows.length; i++) {
      this.rows[i] = new Array(4);
    }
    this.addRandomNumbers();
  };
  restart = () => {
    this.moveCount = 0;
    this.resetRows();
  };
  isValidKey = key => {
    return (
      key === keys.ArrowUp ||
      key === keys.ArrowDown ||
      key === keys.ArrowLeft ||
      key === keys.ArrowRight
    );
  };
  checkWin = () => {
    this.runForEachCell((i, j, cell) => {
      if (cell === this.winNumber) {
        this.scores.push(this.moveCount);
        this.restart();
      }
    });
  };
  checkLose = () => {
    let total = this.rows.length * this.rows[0].length;
    let count = 0;
    this.runForEachCell((i, j, cell) => {
      if (cell) {
        count++;
      }
    });
    if (total === count) {
      this.scores.push(0);
      this.restart();
    }
  };
  runForEachCell = (fn, rows = this.rows) => {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        fn(i, j, cell);
      }
    }
  };
  addRandomNumbers = () => {
    for (let i = 0; i < 2; i++) {
      let row = this.getRandomPosition();
      let col = this.getRandomPosition();
      let tries = 3;
      while (this.rows[row][col] && tries) {
        row = this.getRandomPosition();
        col = this.getRandomPosition();
        tries--;
      }
      if (this.rows[row][col]) return;
      const n = this.getRandomNumber();
      this.rows[row][col] = n;
    }
  };
  getRandomPosition = () => {
    const r = Math.random();
    if (r < 0.25) {
      return 0;
    } else if (r < 0.5) {
      return 1;
    } else if (r < 0.75) {
      return 2;
    } else {
      return 3;
    }
  };
  getRandomNumber = () => {
    return 2;
  };
  getMoveDestination = (row, col, number, key, updated) => {
    switch (key) {
      case keys.ArrowUp:
        if (row === 0) return [row, col];
        for (let i = row - 1; i >= 0; i--) {
          if (updated[`${i}-${col}`]) {
            if (this.rows[i][col]) {
              return [i + 1, col];
            } else {
              continue;
            }
          }
          if (this.rows[i][col]) {
            if (this.rows[i][col] !== number) {
              return [i + 1, col];
            } else {
              return [i, col];
            }
          } else {
            continue;
          }
        }
        return [row, col];

      case keys.ArrowDown:
        if (row === this.rows.length - 1) return [row, col];
        for (let i = row + 1; i <= this.rows.length - 1; i++) {
          if (updated[`${i}-${col}`]) {
            if (this.rows[i][col]) {
              return [i - 1, col];
            } else {
              continue;
            }
          }
          if (this.rows[i][col]) {
            if (this.rows[i][col] !== number) {
              return [i - 1, col];
            } else {
              return [i, col];
            }
          } else {
            continue;
          }
        }
        return [row, col];

      case keys.ArrowLeft:
        if (col === 0) return [row, col];
        for (let i = col - 1; i >= 0; i--) {
          if (updated[`${row}-${i}`]) {
            if (this.rows[row][i]) {
              return [row, i + 1];
            } else {
              continue;
            }
          }
          if (this.rows[row][i]) {
            if (this.rows[row][i] !== number) {
              return [row, i + 1];
            } else {
              return [row, i];
            }
          } else {
            continue;
          }
        }
        return [row, col];

      case keys.ArrowRight:
        if (col === this.rows[0].length - 1) return [row, col];
        for (let i = col + 1; i <= this.rows[0].length - 1; i++) {
          if (updated[`${row}-${i}`]) {
            if (this.rows[row][i]) {
              return [row, i - 1];
            } else {
              continue;
            }
          }
          if (this.rows[row][i]) {
            if (this.rows[row][i] !== number) {
              return [row, i - 1];
            } else {
              return [row, i];
            }
          } else {
            continue;
          }
        }
        return [row, col];

      default:
        break;
    }
  };
  getNewRows = (key, updated = {}) => {
    const newRows = cloneDeep(this.rows);
    for (let i = 0; i < newRows.length; i++) {
      const row = newRows[i];
      for (let j = 0; j < row.length; j++) {
        if (updated[`${i}-${j}`]) continue;
        const element = row[j];
        if (element) {
          const destination = this.getMoveDestination(
            i,
            j,
            element,
            key,
            updated
          );
          if (destination) {
            const [r, c] = destination;
            if (r === i && c === j) continue;
            updated[`${r}-${c}`] = true;
            // we need to move
            row[j] = undefined;
            if (newRows[r][c]) {
              if (element !== newRows[r][c]) {
                console.error(
                  `element ${element} from ${i},${j} moved to ${r},${c} with ${newRows[r][c]}`
                );
              }
              newRows[r][c] = element + newRows[r][c];
            } else {
              newRows[r][c] = element;
            }
          }
        }
      }
    }
    return newRows;
  };
  handleEvent = (key, updated = {}, first = true) => {
    if (!this.isValidKey(key)) return;
    if (first) this.moveCount++;

    const newRows = this.getNewRows(key, updated);
    this.rows = newRows;
    // we are done moving
    this.squeeze(key);
    // paintMatrix(this.rows);
    this.rows = newRows;
    this.checkWin();
    this.checkLose();
    // add new numbers
    this.addRandomNumbers();
    paintMatrix(this.rows);
    this.rows = cloneDeep(this.rows);
  };
  squeeze = key => {
    let moved = false;
    for (let i = 0; i < this.rows.length; i++) {
      const row = this.rows[i];
      for (let j = 0; j < row.length; j++) {
        const element = row[j];
        if (element) {
          const destination = this.getSqueezeDestination(i, j, key);
          if (destination) {
            const [r, c] = destination;
            if (r === i && c === j) continue;
            // we need to move
            moved = true;
            row[j] = undefined;
            if (this.rows[r][c]) {
              console.error('something wrong r c', r, c);
              console.error('this.rows[r][c]', this.rows[r][c]);
            } else {
              this.rows[r][c] = element;
            }
          }
        }
      }
    }

    if (moved) {
      // some numbers moved, we need to update board
      // TODO: remove this hack
      this.rows = cloneDeep(this.rows);
      // squeeze again
      this.squeeze(key);
    }
  };
  getSqueezeDestination = (row, col, key) => {
    switch (key) {
      case keys.ArrowUp:
        if (row === 0) return [row, col];
        for (let i = row - 1; i >= 0; i--) {
          if (this.rows[i][col]) {
            return [i + 1, col];
          } else {
            continue;
          }
        }
        return [0, col];

      case keys.ArrowDown:
        if (row === this.rows.length - 1) return [row, col];
        for (let i = row + 1; i <= this.rows.length - 1; i++) {
          if (this.rows[i][col]) {
            return [i - 1, col];
          } else {
            continue;
          }
        }
        return [this.rows.length - 1, col];

      case keys.ArrowLeft:
        if (col === 0) return [row, col];
        for (let i = col - 1; i >= 0; i--) {
          if (this.rows[row][i]) {
            return [row, i + 1];
          } else {
            continue;
          }
        }
        return [row, 0];

      case keys.ArrowRight:
        if (col === this.rows[0].length - 1) return [row, col];
        for (let i = col + 1; i <= this.rows[0].length - 1; i++) {
          if (this.rows[row][i]) {
            return [row, i - 1];
          } else {
            continue;
          }
        }
        return [row, this.rows[0].length - 1];

      default:
        break;
    }
  };
  handleAuto = () => {
    this.isAuto = !this.isAuto;
    if (this.autoInterval) {
      clearInterval(this.autoInterval);
    }
    if (this.isAuto) {
      this.autoSolve();
      this.autoInterval = setInterval(() => {
        this.autoSolve();
      }, AUTO_INTERVAL);
    }
  };
  autoSolve = () => {
    // const move = this.getAutoMoveRandom();
    const move = this.getAutoMoveMinFilled();
    this.handleEvent(move);
  };
  getFilledCount = rows => {
    let count = 0;
    this.runForEachCell((i, j, cell) => {
      if (cell) {
        count++;
      }
    }, rows);
    return count;
  };
  getAutoMoveMinFilled = () => {
    let min = this.rows.length * this.rows[0].length;
    let selected = this.getAutoMoveRandom();
    let candidates = [];
    for (let i = 0; i < ALL_MOVES.length; i++) {
      const move = ALL_MOVES[i];
      const newRows = this.getNewRows(move);
      const filledCount = this.getFilledCount(newRows);
      console.log('getAutoMoveMinFilled -> filledCount', filledCount);
      if (filledCount < min) {
        min = filledCount;
        candidates = [move];
      } else if (filledCount === min) {
        candidates.push(move);
      }
    }
    console.log('getAutoMoveMinFilled -> candidates count', candidates, min);
    const random = Math.floor(Math.random() * candidates.length);
    selected = candidates[random];
    console.log('getAutoMoveMinFilled -> selected', selected);
    return selected;
  };
  getAutoMoveRandom = () => {
    const r = Math.random();
    if (r < 0.25) {
      return keys.ArrowDown;
    } else if (r < 0.5) {
      return keys.ArrowUp;
    } else if (r < 0.75) {
      return keys.ArrowLeft;
    } else {
      return keys.ArrowRight;
    }
  };
}
