export const isObjEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const paintMatrix = rows => {
  return;
  console.log('----');
  for (let i = 0; i < rows.length; i++) {
    let result = '';
    let row = rows[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] && row[j] >= 10) {
        result += row[j] + ' ';
      } else if (row[j]) {
        result += row[j] + '  ';
      } else {
        result += '.' + '  ';
      }
    }
    console.log(result);
  }
};
