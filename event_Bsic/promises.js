let recordone = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');

})
let recordtwo = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');

})
let recordthree = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');

})

Promise.race([
    recordone,
    recordtwo,
    recordthree
]).then((messageww) => {
    console.log(messageww)
})


// one more example of using promise function is as follows 

let p = new Promise((resolve, reject) => {

    let a = 1 + 2
    if (a == 2) {
        resolve('success')
    } else {
        reject('goes for a failure')
    }

})


p.then((message) => {
    console.log('this is in the then and succeed ' + message)
}).catch((message) => {
    console.log('this is iin the catch ' + message);
})



async function getallusers() {
    const response = await fetch('')
    const data = response.json()
    console.log(data)
}



fetch('https://api.github.com/users/DHRUV-GUPTA51')
    .then((res) => {
        console.log(res.json());
        return res.json();
    }).then((data) => {
            console.log(data);
        }

    )