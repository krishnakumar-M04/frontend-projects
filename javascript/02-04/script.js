 const desktop = {
   screen:{
      resolution:1080,
      displaytype:"led",
      touchEnabled:false
   },
   pointingdevice: "wireless mouse",
   ram: "32gb",
   storage:"1 tb",
   Wifi : false
}
 

const laptop = {
   screen:{
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

 
const mobile= {
   screen:{
      resolution:1080,
      displaytype:"amoled type",
      touchEnabled: true
   },
   pointingdevice: "touch screen",
   ram: "6gb",
   storage:"128 gb"
 }


 console.log("desktop:",desktop);
 console.log("laptop:", laptop);
 console .log("mobile:",mobile);


  