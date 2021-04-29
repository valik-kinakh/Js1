
exports.myDateTime = function () {
    
    return Date();
  };
 exports.greeting=function ()
 {
    let now=new Date().getHours();
        if (now ==23 || now ==00 || now ==01 || now ==02 || now ==03|| now ==04) {
            return "Good night, ";
        }else if (now ==05 || now ==06 || now ==07 || now ==08 || now ==09 || now ==10) {
            return "Good morning, ";
        }else if (now ==11 || now ==12 || now ==13 || now ==14 || now ==15 || now ==16) {
            return "Good day, ";
        }else{
            return "Good evening, ";
        }
 } 