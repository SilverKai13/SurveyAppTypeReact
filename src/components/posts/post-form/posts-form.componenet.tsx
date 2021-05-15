
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../../hooks/posts/useCreatePosts';


import './posts-form.component.css';

interface FormData {
    name: string;
    email: string;
    age: string;
    address: string;
}

const PostsForm: React.FC = () => {

    const {register, handleSubmit}  = useForm<FormData>();
    // const register = useRef(null);
    const createUser = useCreatePost();


    const onSubmit = handleSubmit(({name,email,age,address}) => {
        createUser({ variables: { input: { name,email,age,address }}});
    });

    return (
        <div className="posts-form">
            <h1 id='title'>Survey Form</h1>
            <p id='description'><i>Thank you for filling out the quick survey</i></p>

            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='name' id="label-name">Name</label>
                    <input type="text" {...register("name")} placeholder="Enter Name"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email' id="label-email">Email</label>
                    <input type="text" {...register("email")} placeholder="Enter Email"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='age' id="label-age">Age</label>
                    <input type="text" {...register("age")} placeholder="Enter Age"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='address' id="label-address">Address</label>
                    <input type="text" {...register("address")} placeholder="Enter Address"/>
                </div>
                <input type='submit' />
            </form>

        </div>
    );
}

export default PostsForm;


///* <input {...register("address")} placeholder="Enter address" /> */