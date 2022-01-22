class User {
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    setUsername(userName){
        this.userName = userName;
    }

    getUsername(){
        return this.userName;
    }

    setEmail(email){
        this.email = email;
    }

    getEmail(){
        return this.email;
    }

    setPassword(password){
        this.password = password;
    }

    getPassword(){
        return this.password;
    }
}