function newForEach(array, callback){
    for (let i = 0; i < array.length; i++){
      callback(array[i], i, array)
    }
}

newForEach(list, myCallbackForEach)

function newMap(array, callback){
    let newArray = []

    for(let i = 0; i < array.length; i++){

      const result = callback(array[i], i, array)
      newArray.push(result)

    }
    return newArray
}

console.log(newMap(listNum, myCallbackMap))

function newFilter(array,callback){
  let result = []

  for (let element of array){

      if (callback(element)){
          result.push(element)
      }
  }
  return result
}

console.log(newFilter(listNum, myCallbackFilter))

function newFind(array, callback){
  let result
  
  for(let i = 0; i < array.length; i++){

      result = callback(array[i], array)

      if(result === true){
          return array[i]
      }
  }
}

console.log(newFind(listNum, myCallbackFind))

function newFindIndex(array,callback){
  
  for(let i = 0 ; i < array.length; i++){

    if(callback(array[i])){
      return i
    }
  }
}

console.log(newFindIndex(listNum, myCallbackFindIndex))

function newReduce(array, callback, initialValue){
  let acc = initialValue || 0

  for(let i = 0; i < array.length; i++){
    acc = callback(acc, array[i])
  } 
  
  return acc 
}

console.log(newReduce(listNum, myCallbackReduce))

function newSome(array, callback){
  let result

  for(let i = 0; i < array.length; i++){
    result = callback(array[i], i, array)

  }

  return result
}

console.log(newSome(listNum, myCallbackSome))

function newEvery(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback([array[i]]) === false) {
      return false
    }
  }
  return true
}

console.log(newEvery(listNum, myCallbackEvery))

function newFill(array, num, start = 0, end = array.length){

  for( ; start < end; start++){

    array[start] = num
  }

  return array
}


function newIncludes(array, num, start = 0){
  for( ; start < array.length; start++){
    if(array[start] === num){
      return true
    }
  }
  return false
}


function newIndexOf(array, element, fromIndex = 0){
  for (let i = fromIndex; i < array.length; i++){
    
      if (array[i] === element){
        return i
      }
  }
  return -1
}


function newConcat(){
  let array = [...arguments]
  let concat = []

  for(let i = 0; i < array.length; i++){
    concat.push(array[i])
  }

  return concat
}


function newJoin(array, separator){
  let result = ''

  for (let i = 0; i < array.length; i++){
      result += array[i]

      if(i !== array.length - 1){
          result += separator
      }
  }
  return result
}

// // function slice(){


// }


// function flat(){}
// function flatMap(){}