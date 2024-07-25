function calculateNumber(type, a, b) {
  const anum = Math.round(a);
  const bnum = Math.round(b);
  let k = 0;
  switch (type) {
  case 'SUM':
k = anum + bnum;
break;
  case 'SUBTRACT':
k = anum - bnum;
break;
  case 'DIVIDE':
    if (bnum === 0) {
          k = "Error";
    } else {
          k = anum / bnum;
    }
    break;
  }
  return k;
}

module.exports = calculateNumber;
