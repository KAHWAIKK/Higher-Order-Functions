//Higher Order Functions are functions that take another fn as an arguement or returns another fn is a higher order function

//Example
/*  function x(){
    console.log('Kahwai')
};
x();
function y(x){
    x();
}
 */
//y is a higher order function while x is the callback function

//Higher Order function that does at least one of the following

//1. Takes one or more functions as an arguemet or parameter
//2.Returns a function as the result


import { posts } from "./posts.js"


/*FOR EACH */
posts.forEach((post)=>{
    console.log(post);//logs each of the post in the post array
})


/* Filter */
//filter hiogher order function helps select specific data from results
const filteredPost = posts.filter((post)=>{
    return post.userId === 8;
})

console.log(filteredPost);//console return an object that has post of user id === 1


/* MAP */
//map allows you to transform data
const mappedPost = filteredPost.map((post)=>{
    return post.id * 10;
});

console.log(mappedPost);//console returns post with id multiplied by 10

/* REDUCE */
//reduce function computes a single value from the data
const reducedPostValue = mappedPost.reduce((sum,post)=>{
    return sum + post;
})

console.log(reducedPostValue);//console gives us the final value