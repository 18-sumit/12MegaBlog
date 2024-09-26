import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {   // This defines a class named AuthService that will handle authentication-related functionality.
    client = new Client();  // Creates a new Client instance to interact with the Appwrite server.
    account;               //  Declares a property named account to store the Account instance

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
// to register the user 

    async createAccount({email , password , name}){
        try {
            const userAccount = await this.account.create( ID.unique() , email , password , name);
            if (userAccount) {
                //call another method Login 
                return this.login({email , password})

            }
            else{
                return userAccount ;
            }
        } catch (error) {
            throw error ; 
        }
    }


    async login({email , password}) {
        try {
            return await this.account.createEmailSession(email , password);
        } catch (error) {
            throw error ;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            // throw error ;
            console.log("Appwrite Service :: getCurrentUser :: error" , error);
        }

        return null ;
    }

    async logout(){
        await this.account.deleteSessions()

        try {
            
        } catch (error) {
            throw error;
        }
    }

}


const authService = new AuthService()

export default authService