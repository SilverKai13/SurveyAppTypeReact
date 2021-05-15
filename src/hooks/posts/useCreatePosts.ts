import { gql, useMutation } from "@apollo/client";

interface UserInput {
    variables: {
        input: {
            name: string;
            email: string;
            age: string;
            address: string;
        }
    }
}

const CREATE_USER = gql`
    mutation CreateUser($input: UserInput!){
        createUser(options: $input) 
        
    }
`

export const useCreatePost = (): ((
    userInput: UserInput,
)=>any)=> {
    console.log("checking",CREATE_USER)
    const [createUser] = useMutation(CREATE_USER);
    return createUser;
}