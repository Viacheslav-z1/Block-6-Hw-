window.addEventListener('DOMContentLoaded', ()=>{

  let firstArray = [1,2,3];
  let secondArray = ['ggg', null, 3];

Array.prototype.double = function () {
    let newArr = this.map(function (item) {
      if(typeof item === 'number'){
        return item *= item;
      } else if(typeof item === 'string'){
        return item += item;
      }
    })
    return newArr;
}

let newArr1 = firstArray.double();
let newArr2 = secondArray.double();
console.log(newArr1);
console.log(newArr2);
});


