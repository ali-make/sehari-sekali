import axios from "axios";

const url = "http://localhost:5011/posts";

export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
