const common_link = "https://jsonplaceholder.typicode.com/posts";


const btnWrapper = document.querySelector("#btn-wrapper");
const dataWrapper = document.querySelector("#dataWrapper");

const getBtn = document.querySelector(".get");
const postBtn = document.querySelector(".post");
const putBtn = document.querySelector(".put");
const deleteBtn = document.querySelector(".delete");

const url_link = "https://jsonplaceholder.typicode.com/posts";
//get-in console
getBtn.addEventListener("click", async function(e) {

    let data = await (await fetch(`${url_link}`)).json();
    console.log(data);

})

//post

postBtn.addEventListener("click", async function(e) {

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    })
    //put
putBtn.addEventListener("click", async function(e) {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
})

//delete 
deleteBtn.addEventListener("click", async function(e) {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
})