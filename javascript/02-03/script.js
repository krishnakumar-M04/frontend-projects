//CREATE A ARRAY
 const mydesktop =[
    "laptop",
    "phone",
    "remote",
    "cup",
    " Apple ",
    "book",
    "headphone",
    "pendrive",
    "usbhub"
    
 ];
 console.log(mydesktop);
 
 //remove the last item and return to consooe
  //console.log(" the last item will be removed:" , mydesktop.pop());
  //console .log("the mew item are:",mydesktop);
  
  
  // move the last item to the first
   //let lastitem=mydesktop.pop();
   //console.log("the last item will be moved to first is :", lastitem);
   //mydesktop.unshift(lastitem);
   //console.log ( "the moved item is:",mydesktop);
  

   //sort items alphabetically
   //mydesktop.sort();
   //console.log("the array are arrange in alphabetically:",mydesktop);

   //for specific item
   //let item ="ipod";
   //const itemfound = mydesktop.find((something) =>something === item)|| "no such item is here";
   //console.log("item found:", itemfound);

   //remove the specific item from the array
    let remove_item="cup";
    mydesktop.splice(mydesktop.indexOf(remove_item), 1);
    console.log(`array item with name "${remove_item}" has been removed:`,mydesktop);


  