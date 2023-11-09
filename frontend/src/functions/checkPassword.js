function isPasswordValid(password){
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    const response = regexPassword.test(password)
    return response 

 }

function isMailValid(email){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const response = regexEmail.test(email);
    return response
}

export { isPasswordValid, isMailValid };
