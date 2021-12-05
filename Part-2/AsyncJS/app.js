const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('books.com/api/page1')
    .then(() => {
        console.log('here is your fake api from page 1')
        return fakeRequestPromise('books.com/api/page2')
    })
    .then(() => {
        console.log('here is your fake api from page 2')
        return fakeRequestPromise('books.com/api/page3')
    })
    .then(() => {
        console.log('here is your fake api from page 3')
    })
    .catch((e) => {
        console.log('Your API fucked up!!')
        console.log(e)

    })



// fakeRequestCallback('books.com',
//     function(response) {
//         console.log('IT WORKED!!!!')
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function(response) {
//                 console.log('IT WORKED AGAIN!!!!')
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function(response) {
//                         console.log('IT WORKED AGAIN(3)!!!!')
//                         console.log(response)
//                     },
//                     function(err) {
//                         console.log('ERROR (3nd req)!!!')
//                         console.log(err)
//                     }
//                 )
//             },
//             function(err) {
//                 console.log('ERROR (2nd req)!!!')
//                 console.log(err)
//             }
//         )
//     },
//     function(err) {
//         console.log('ERROR!!!')
//         console.log(err)
//     })