let STATUS_TYPES = ['INSUFFICIENT_FUNDS', 'CLOSED', 'OPEN'];
let CURRENCY = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  'ONE HUNDRED': 100
};

function checkCashRegister(price, cash, cid) {
  let change_val = cash - price;
  let change = {};

  // Check if total in CID > change needed
  let sumCid = sum_cid(cid);
  // console.log(sumCid);
  if (sumCid < change_val) {
    return { status: STATUS_TYPES[0], change: [] };
  }

  // change computation Start with highest and work down
  let return_change = 0;

  let i = cid.length - 1;

  while (i >= 0) {
    // reduce change by current curreny value if curreny less the change and CID != 0
    let cur_currency = CURRENCY[cid[i][0]];
    if (change_val >= cur_currency && cid[i][1] > 0) {
      change_val = round_dollars(change_val - cur_currency);
      cid[i][1] -= cur_currency;
      // add to change list

      if (change.hasOwnProperty(cid[i][0])) {
        change[cid[i][0]] += cur_currency;
      } else {
        change[cid[i][0]] = cur_currency;
      }
    } else {
      // move to next lower currency check
      i--;
    }
  }
  console.log(`change_val: ${change_val}`);
  console.log(`change: ${change}`);
  console.log(change);
  console.log(`cid: ${cid}`);

  let change_list = [];

  // convert change object to list
  for (let i = 0; i < Object.keys(change).length; i++) {
    change_list.push([
      Object.keys(change)[i],
      round_dollars(change[Object.keys(change)[i]])
    ]);
  }
  console.log(change_list);

  // if return change < change needed return INSUFICENT funds
  if (change_val > 0) {
    return { status: STATUS_TYPES[0], change: [] };
  } // elsif cid empty return CLOSED, change
  else if (sum_cid(cid) <= 0) {
    return { status: STATUS_TYPES[1], change: change_list };
  } else {
    return { status: STATUS_TYPES[2], change: change_list };
  }
}

function sum_cid(cid) {
  let sumCid = cid.reduce((sum, cur) => {
    return (sum += cur[1]);
  }, 0);
  sumCid = Math.round(sumCid * 100) / 100;

  return sumCid;
}

function round_dollars(amt) {
  return Math.round(amt * 100) / 100;
}

let res = checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
]);

console.log(res);

let v = {
  status: 'CLOSED',
  change: [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]
};
