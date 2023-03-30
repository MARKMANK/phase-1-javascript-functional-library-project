function isArray(collection){
    let alwaysAnArray = [];
    if(Array.isArray(collection)==true){
        alwaysAnArray=collection;
    } else {
        alwaysAnArray=Object.values(collection);
    }
    return alwaysAnArray;
}

function myEach(collection,callback){
    const alwaysArray = isArray(collection);
    for(let i = 0;i < alwaysArray.length;i++){
        callback(alwaysArray[i]);
    }
    return collection;
}

function myMap(collection,callback){
    const alwaysArray = isArray(collection);
    let newCollection = [];
    for(let i = 0;i < alwaysArray.length;i++){
        newCollection.push(callback(alwaysArray[i]));
    }
    return newCollection;
}
//const callback = (acc, val, collection) => (acc + (val * 3))
function myReduce(collection, callback, acc){
    const alwaysArray = isArray(collection);
    if(!acc){
        acc = alwaysArray[0]
        for(let i = 1; i < alwaysArray.length; i++){
            acc = callback(acc, alwaysArray[i], collection);
        }
    } else {
        for(let i = 0; i < alwaysArray.length; i++){
            acc = callback(acc, alwaysArray[i], collection);
        }
    }
   
   return acc;
}

function myFind(collection, callback){
    const alwaysArray = isArray(collection);
    for(let i = 0;i < alwaysArray.length;i++){
        if(callback(alwaysArray[i])){
            return alwaysArray[i];
        }
    }
}

function myFilter(collection, callback){
    const alwaysArray = isArray(collection);
    let truthArray = [];
    for(let i = 0;i < alwaysArray.length;i++){
        if(callback(alwaysArray[i])){
            truthArray.push(alwaysArray[i]);
        }
    }
    return truthArray;
}

function mySize(collection){
    const alwaysArray = isArray(collection);
    let arrayCount = 0;
    for(let i = 0;i < alwaysArray.length;i++){
        arrayCount = arrayCount + 1;
    }
    return arrayCount;
}

function myFirst(array, n=0){
    if (n === 0){
        return array[0];
    } else {
    return array.slice(0, n);
    }
}

function myLast(array,n=0){
    if (n === 0){
        return array.length;
    } else {
        return array.slice((-n),array.length);
    }
}

function myKeys(obj){
    return Object.keys(obj);
}

function myValues(obj){
    return Object.values(obj);
}