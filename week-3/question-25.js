function numberGuessingGame() {
    //generate a random number between 1 and 100
    let randomNum = Math.floor(Math.random()*100);
    //get the user input
    let num = parseInt(prompt('Enter a number:'));
    checker()
    //check if the user guess is correct or not
    function checker(){
        if(num > randomNum){
            num = parseInt(prompt('Too High!\nEnter another number: '));
            checker();
        }else if(num < randomNum){
            num = parseInt(prompt('Too Low!\nEnter another number: '));
            checker();
        }
        else {
            console.log('Correct');
        }
    }
  
}
module.exports = numberGuessingGame;
