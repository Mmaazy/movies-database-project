export async function Login(username, password){
    
    const apiEndPoint= `http://localhost:5000/api/login&username=${username}&password=${password}`;
    console.log("In Api", username, password)
    const result = await fetch(apiEndPoint,{
        method: 'POST'
    });
    return result
}