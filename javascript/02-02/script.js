let computers=[ 'desk',"laptop", "tablet pc "]
// console.log( computers.join( " | "));
/* join is used to add the extra command?*/
//computers.push("smartphone"); for add last item
//computers.unshift("smartphone",5); for add first item
//computers.shift(); for remove first item

//computers.pop(); for remove last item
/*computers.forEach( function(item){
    item=`<li>${item}</li>`;
    console.log(item); 
});*/  // for cfeating a list tag  with affecting the main method.

let longlist = computers.find (function(item){
    if (item.length>=5){
        return item;
    }

});
console.log("longlist: ", longlist);
 console.log(computers)

  

  