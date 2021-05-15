import { useQuery,gql } from "@apollo/client";
import { Post } from '../../common/interfaces/post.interface';

const GET_POSTS = gql`
    query GetPosts{
            users {
                id
                name
                email
                age
                address
            }
    }

`

export const useGetPosts = (): Post[] | undefined => {
    const { data } = useQuery(GET_POSTS);
    


    console.log(data);
    
    return data?.users;
}