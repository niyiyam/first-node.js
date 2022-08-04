async function sleep(sec){
    let promise = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(sec+'초!');
        }, sec * 1000);
    });
    var result = await promise;
    console.log(result)
};
sleep(3)