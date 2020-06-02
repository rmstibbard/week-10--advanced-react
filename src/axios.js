// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer D8sfiwuS4oI5ToCNI5YDwkALeUMBdQzESaaGy9Ccksiyphu7TqfdxlKVm6XuvKQILPhPqZftxWGLSwfs",
    },
});