import { NumberCollection } from "./NumberCollection"
import { CharacterCollection } from "./CharacterCollection"
import { NumberSort } from "./NumberSort"
import { CharacterSort } from "./CharacterSort"
// const collection = new NumberCollection([10,2,0,33,-4,3])
// collection.sort()
// console.log(collection.data)

// const charactercollection = new CharacterCollection('kjhaslhajha')
// charactercollection.sort()
// console.log(charactercollection.data)

const numberSortResult = new NumberSort([5,8,1,99,0,88,2,66,5])
numberSortResult.sort()
console.log(numberSortResult.data)

const charSortResult = new CharacterSort('aLveeRA')
charSortResult.sort()
console.log(charSortResult.data)