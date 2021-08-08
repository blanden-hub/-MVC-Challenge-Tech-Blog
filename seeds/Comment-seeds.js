const { Comment }= require('../models');

const commentData = [
{
    userId: 1, 
    postId: 1, 
    body: "Awesome News!"
},
{
    userId: 2, 
    postId: 2, 
    body: "This is so cool!"
},
{
    userId: 6, 
    postId: 4, 
    body: "Very insightful."
},
{
    userId: 4, 
    postId: 2, 
    body: "nice work!!"
},
{
    userId: 2, 
    postId: 1, 
    body: "my IQ just went up."
},
{
    userId: 3, 
    postId: 5, 
    body: "Good read"
},
{
    userId: 5, 
    postId: 3, 
    body: "Great!!"
},
{
    userId: 2, 
    postId: 1, 
    body: "nice!!"
},

]
const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;