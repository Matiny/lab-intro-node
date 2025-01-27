class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1]; 
  }
  max() {
    if (this.length > 0) {
      return Math.max(...this.items);
    }
    else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return Math.min(...this.items);
    }
    else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    return this.items.reduce((a,b) => a + b, 0);
  }
  average() {
    if (this.length > 0) {
      return this.sum() / this.length;
    }
    else {
      throw new Error("EmptySortedList");
    }
    
  }
};

module.exports = SortedList;
