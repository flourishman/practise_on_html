
      
       function checkYuGiOh(n)
    {
        // other things
        var i;
        var arr = [i];
        for(let i=1;i<=n;i++){
            if((i%2 == 0) && (i%3==0) && (i%5==0))
                console.log("YuGiOh");
            else if(i%2 == 0)
                console.log("Yu");
            else if(i%3 == 0)
                console.log("Gi");
            else if(i%5 == 0)
                console.log("Oh");
            else
                console.log(i);
         }
        
        // other things
        return arr;
        

    }
    //console.log(arr);
    console.log(checkYuGiOh(10));
   
    
    
