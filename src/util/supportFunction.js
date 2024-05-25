// Ham ktra 1 obj co rong hay ko
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

function insertDataStr(input) {
  let keys = ``;
  let values = ``;
  for (const key in input) {
    console.log(`${key}: ${input[key]}`);
    if (Object.hasOwnProperty.call(input, key)) {
      let value = input[key];
      if (isNaN(Number(value)) || value[0] == '0') value = `N'${value}'`; //Neu gia tri la chuoi thi them nhay don
      if (keys == ``) {
        keys += key;
        values += value;
      } else {
        keys += ',' + key;
        values += ',' + value;
      }
    }
  }

  return { key: keys, value: values };
}

function updateDataStr(input) {
  let setStr = ``;
  let idStr = ``;
  for (const key in input) {
    console.log(`${key}: ${input[key]}`);
    if (Object.hasOwnProperty.call(input, key)) {
      let value = input[key];
      if (isNaN(Number(value)) || value[0] == '0') value = `N'${value}'`; //Neu gia tri la chuoi thi them nhay don

      if (key.toLowerCase().includes('id')) {
        if (idStr == ``) idStr += `${key} = ${value}`;
        else idStr += `and ${key} = ${value}`;
      } else {
        if (setStr == ``) setStr += `${key} = ${value}`;
        else setStr += `,${key} = ${value}`;
      }
    }
  }

  return { set: setStr, id: idStr };
}

function deleteDataStr(input) {
  let condition = '';

  for (const key in input) {
    if (Object.hasOwnProperty.call(input, key)) {
      let value = input[key];
      if (condition == '') condition += `${key} = ${value}`;
      else condition += `and ${key} = ${value}`;
    }
  }

  return condition;
}

module.exports = { insertDataStr, updateDataStr, deleteDataStr };
