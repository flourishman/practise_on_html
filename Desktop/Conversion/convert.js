// Function to convert Fahrenheit to Celsius.
function FtoC(Fahr)
    {
        const Ftemp = Fahr;
        const FtoC = 5/9 * (Ftemp - 32);
        const result = Ftemp +' \u00B0F'+ ' = ' + FtoC.toFixed(4) + ' \u00B0C';
        
        if(!isNaN(Ftemp)) {
            console.log(result);
        } 
        else  {
            console.log("It is not a number but an array/object"); 
        }
    }
    console.log(FtoC(35));
    FtoC([1,2,3]);
    FtoC({"temp": 0});
    