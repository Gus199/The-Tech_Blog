const router = require('express').Router();
const session = require('express-session');
const sequelize = require('../config/connection');
const { User, Post, Comment} = require('../models');


router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username', 'twitter', 'github']
              }
            },
            {
              model: User,
              attributes: ['username', 'twitter', 'github']
            }
          ]
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/post/:id', async (req, res)=>{
    try {
      const postData = await Post.findByPk({
        where: {
          id: req.params.id
        },
        attributes: [
          'id',
          'title',
          'created_at',
          'post_content'
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username', 'twitter', 'github']
            }
          },
          {
            model: User,
            attributes: ['username', 'twitter', 'github']
          },
        ],
      });
      const post = postData.get({ plain: true });

      res.render('single-post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
    
  })
  module.exports =router