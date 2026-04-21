const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done after 4 seconds");
    }, 4000);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failed after 2 seconds");
    }, 2000);
});


myPromise1.then((message) => {
    console.log(`Success: ${message}`);
}).catch((error) => {
    console.error(`Error: ${error}`);
});

myPromise2.then((message) => {
    console.log(`Success: ${message}`);
}).catch((error) => {
    console.error(`Error: ${error}`);
});

console.log("This runs immediately, before the promise is resolved.");
