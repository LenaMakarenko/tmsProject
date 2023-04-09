////Task 1
/// with promise chaining
const getPostById = function (id: number) {
   return fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then((response: Response) => {
    response.json().then((resultObj) => {
        console.log(resultObj);
    })
   })
}
getPostById(15)
.then(() => getPostById(23)) 
.then(() => getPostById(7))
.then(() => getPostById(3))
.catch((err) => {
    console.log (err.message)
})
/// with async/await
async function asyncGetPostById() {
    try {
        await getPostById(15)
        await getPostById(23)
        await getPostById(7)
        await getPostById(3)
    } catch (err: any) {
        console.log(err.message)
    }
}
asyncGetPostById()
///Task 2
function printTodos() {
fetch (`https://jsonplaceholder.typicode.com/todos`)
.then((response) => response.json())
.then((obj) => console.log (obj.map ((entry: any) => {
    const {id, title} = entry
return {id, title}
}))
)}
printTodos()