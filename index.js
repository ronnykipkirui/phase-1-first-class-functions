function receivesAFunction (callBack){
    callBack();
    }
    // arrow function
    const returnsANamedFunction = () => receivesAFunction;
    
    
    function returnsAnAnonymousFunction(){
        return  function(){
            // code to be executed
        }
    }