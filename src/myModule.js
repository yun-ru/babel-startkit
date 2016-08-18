const myModule = function(){

    function sayhi() {
        console.log("hihihi")
    }
   return {
       sayhi: sayhi
   }
}();

export default myModule;