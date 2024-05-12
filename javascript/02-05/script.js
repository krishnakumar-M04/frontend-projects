
 

const laptop = {
   screens:{
      resolution:1080,
      displaytype:"lcd",
      touchEnabled:false
   },
   pointingdevice: "wireless mouse",
   ram: "16gb",
   storage:"512 gb",
   Wifi  : true, 
   toggleWifi : function(wifi_status){
      this.Wifi = wifi_status;
   },
   wifiBands   : function(wb_2_5g,wb_5g){
      this.speed_wb_2_5g = wb_2_5g;
      this.speed_wb_5g = wb_5g;
   }
 }


console.log(laptop);
console.log(laptop.storage);
console.log(laptop.screens.resolution);
 var query ="ram";
 console.log(laptop[query]);
 



  