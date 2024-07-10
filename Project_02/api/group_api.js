export const apiObject = {

    get : async function(){
        let url = (`http://localhost:369/users`);
        let ge_request = await fetch(url);
        let ge_response = await ge_request.json()
        return ge_response;
    },
    post : async function(data){
        let url = (`http://localhost:369/users`);
        let option = {
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        }
        let po_request = await fetch(url,option);
        let po_response = await po_request.json()
        return po_response;
    },
    patch : async function(id,data){
        let url = (`http://localhost:369/users/${id}`);
        let option = {
            method : "PATCH",
            headers : {"Content-type":"Application/json"},
            body : JSON.stringify(data)
        }
        let pa_request = await fetch(url,option);
        let pa_response = await pa_request.json()
        return pa_response;
    },
    delete : async function(id){
        let url = (`http://localhost:369/users/${id}`);
        let option = {
            method : "DELETE",
            headers : {"Content-type":"Application/json"},
        }
        let de_request = await fetch(url,option);
        let de_response = await de_request.json()
        return de_response;
    },
    isexist : async function(id){
        let url = (`http://localhost:369/users/?email=${email}`);
        let de_request = await fetch(url);
        let de_response = await de_request.json()
        if(de_response.length > 0){
            console.log(de_response);
            return true;
        }
        else{
            console.log(de_response);
            return false;
        }
    }

}
