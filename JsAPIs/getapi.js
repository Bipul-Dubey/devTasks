const url = `https://jsonplaceholder.typicode.com/users`

async function fetchApiData(){
    try{
        let response =await fetch(url)
        if(response.status==200){
            let data = response.json()
        }
    }
    catch(error){
        console.log(error);
        return null
    }
}

fetchApiData()