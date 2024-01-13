import { Sorter } from "./Sorter"
export class NumberCollection extends Sorter
{
    constructor(public data: number[]){
        super()
    }
    
    get length(): number
    {
        return this.data.length
    }

    compare(leftIndex: number, rightindex: number): boolean
    {
        return this.data[leftIndex] > this.data[rightindex]
    }

    swap(leftIndex: number, rightindex: number):void
    {
        const temp = this.data[leftIndex]
        this.data[leftIndex]=this.data[rightindex]
        this.data[rightindex]=temp
    }
}