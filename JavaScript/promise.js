// function promiseEg(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (value) resolve("The promise is resolved");
//             else reject("The promise is rejected");

//         },3000);
//     })
// }
// promiseEg(false).then((res)=>{
//     console.log(res);
// })
// .catch((res) =>{
//     console.log(res);
// })


// Location Finder
// 1. Promise(LocFound,LocNotFound)
// 2. Chennai ,2000

function locationFinder(loc,time){
    var location = new Promise((LocFound,LocNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                LocFound(loc);
            }else{
                LocNotFound(loc+" Location not found");
            }
        },time);
    });
    return location;
}
isLocationFound = (loc,time) =>{
    location = "Chennai";
    t=1000;
    if(loc == location && t<=time){
        return true;
    }else{
        return false;
    }
};
locationFinder("Chennai",2000).then((res)=>{
    console.log(res);
}).catch((notFound)=>{
    console.log(notFound);

})