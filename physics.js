

function getAcceleration(ob){
    if (ob.f!==undefined && ob.m!==undefined) {
        return ob.f/ob.m
    }else if (ob.Δv!==undefined && ob.Δt!==undefined ){
        return (ob.Δv/ob.Δt)
    }else if (ob.d!==undefined && ob.t!==undefined) {
       return( (2*ob.d)/(ob.t**2))
    }else{
        return "impossible"
    }
};

