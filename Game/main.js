let start=confirm("Do you want to play a game?");
if (start==false) {
    alert("You didn't become a millinaire");
}else{
   let x=true,prize=0,randomRange=5,maxPrize=10,avPrize=7,minPrize=2;
   while (x==true) {
       let y=false;
     let count=3;
    let randomNumber=Math.floor(Math.random()*randomRange);
    //alert(randomNumber);
   let firstNum= prompt("Enter random number from 0 to "+randomRange+"\nAttempts left:"+count+"\nTotal prize:"+prize+"\nPossible current prize:"+(prize+maxPrize));
   let firstNum1=parseInt(firstNum);
    if (firstNum1==randomNumber) {
        prize+=maxPrize;
        y=true;
    }else{
    --count;
    let secondNum= prompt("Enter random number from 0 to "+randomRange+"\nAttempts left:"+count+"\nTotal prize:"+prize+"\nPossible current prize:"+(prize+avPrize));
    let secondNum1=parseInt(secondNum);
    if (secondNum1==randomNumber) {
        prize+=avPrize;
        y=true;
    }else{
    --count;
    let thirdNum= prompt("Enter random number from 0 to "+randomRange+"\nAttempts left:"+count+"\nTotal prize:"+prize+"\nPossible current prize:"+(prize+minPrize));
    let thirdNum1=parseInt(thirdNum);
    if (thirdNum1==randomNumber) {
        prize+=minPrize;
        y=true;
         }
       }
    }
      if (y==true) {
        alert("Thank you for game!\nYour prize is:"+prize);
        let goOn= confirm("Do you want to continue?");
         if (goOn==true) {
             x=true;
             randomRange*=2;
             maxPrize*=2;
             avPrize*=2;
             minPrize*=2;
         }
         else
         {
             alert("Goodbye!!!");
             x=false;
         }
      }
      else
      {
        let goOn= confirm("Do you want to try again?");
        if (goOn==true) {

            x=true;
            prize=0,randomRange=5,maxPrize=10,avPrize=7,minPrize=2;
        }else{
            alert("Goodbye!!!");
            x=false;}
      }
      
    
 }
}