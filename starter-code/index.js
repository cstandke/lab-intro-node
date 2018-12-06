class SortedList {
  constructor() {
    this.items=[];
    // this.length=()=>{return this.items.length};
    this.length=this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    /* this.items.sort(function(a,b){
      return a-b
    }); */
    this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return this.items[this.length-1];
  }
  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return this.items[0];
  }
  average() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return this.sum()/this.length;
  }
  sum() {
    /* return this.items.reduce(function(result,elem){
      return result+elem;
    },0); */
    return this.items.reduce((acc,elem)=>acc+elem,0);

  }
};

module.exports = SortedList;
