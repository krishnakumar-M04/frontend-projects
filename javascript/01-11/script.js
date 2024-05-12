let ob={
    name:"key",
    age:21,
    favt:"tea",
    fn:function(){
     return   `your name is${this.name} and age is${this.age}`
    }
}
console.log(ob.fn())