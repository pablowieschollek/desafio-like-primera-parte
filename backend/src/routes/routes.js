const { Router } = require('express');
const getPost = require('../controladores/getPost');
const postPosts = require('../controladores/postpost');


path = require('path');


const routes = new Router();

routes.get('/posts', getPost) 

routes.post('/posts', postPosts);




module.exports = routes;