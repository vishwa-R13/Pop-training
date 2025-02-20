// async function asAw() {
//     setTimeout(function(){
//         console.log("Hello");    
//     },0)
// }
// // console.log(asAw());
// asAw().then((res)=>{
//     console.log(res);
// })

// async function name(params) {
    
// }

// Instagram console demo for post,like,comment,share

Likecode=async()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost("Liked post successfully");
        },1000);
    })
}
Commentcode=async()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("Commented post successfully");
        },1000);
    })
}
Sharecode=async()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("Shared post successfully");
        },1000);
    })
}

async function postCode(){
    var post = new Promise((createpost)=>{
        createpost("posted successfully");
    })
    const [pos,like,comment,share] = await Promise.all([post,Likecode(),Commentcode(),Sharecode()])
    console.log(await pos);
    console.log(await like);
    console.log(await comment);
    console.log(await share);
}
postCode()