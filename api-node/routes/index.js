const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../database");
const multer = require('multer');

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
                cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
                cb(null, new Date().toISOString().replace(/:/g, '_') + file.originalname);
        }
});

const upload = multer({
        storage: storage
});

// api functions

// creator's routes ----------------------------------------------

// login - backer
router.post('/login-backer', (req, res) => {

        let sql = "select * from user where type ='backer' and user_email = ? and password = ?";
        db.query(sql, [req.body.email, req.body.password], (err, result, fields) => {
                if (err) throw err;
                console.log(result);
                if (result.length > 0) {
                        res.send({ status: "1", user: result });
                }
                else {
                        res.send({ status: "0" });
                }
        });
});

// login creator
router.post('/login-creator', (req, res) => {

        let sql = "select * from user where type ='creator' and user_email = ? and password = ?";
        db.query(sql, [req.body.email, req.body.password], (err, result) => {
                if (err) throw err;
                console.log(result);
                if (result.length > 0) {
                        res.send({ status: "1", user: result });
                }
                else {
                        res.send({ status: "0" });
                }
        });
});

// reg
router.post('/register', (req, res) => {
        let sql = "INSERT INTO user SET ?";
        db.query(sql, req.body, (err, result) => {
                if (err) throw err;
                console.log(result);
                if (result.affectedRows > 0) {
                        res.send({ status: "1" });
                }
        });
});

// create campaign
router.post('/create-campaign', (req, res) => {
        let sql = "INSERT INTO campaign SET ?";
        db.query(sql, req.body, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result);
        });
});

// add faqs
router.post('/add-faq', (req, res) => {
        let sql = "INSERT INTO faq_campaign SET ?";
        db.query(sql, req.body, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result);
        });
});

// add rewards
router.post('/add-reward', (req, res) => {
        let sql = "INSERT INTO rewards SET ?";
        db.query(sql, req.body, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result);
        });
});

// add story
router.post('/add-story', upload.fields([{
        name: 'image_1', maxCount: 1
},
{
        name: 'image_2', maxCount: 1
},
{
        name: 'image_3', maxCount: 1
},
{
        name: 'image_4', maxCount: 1
}])
        , (req, res) => {
                let postArray = {
                        campaign_id: req.body.campaign_id,
                        image_1: req.files['image_1'][0].path,
                        image_2: req.files['image_2'][0].path,
                        image_3: req.files['image_3'][0].path,
                        image_4: req.files['image_4'][0].path,
                        desc_1: req.body.desc_1,
                        desc_2: req.body.desc_2,
                        desc_3: req.body.desc_3,
                        desc_4: req.body.desc_4
                }

                let sql = "INSERT INTO story SET ?";
                db.query(sql, postArray, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                        res.send(result);
                });
        });


// add comments
router.post('/add-comment', (req, res) => {
        let sql = "INSERT INTO comments SET ?";
        db.query(sql, req.body, (err, result) => {
                if (err) throw err;
                console.log(result);
                if (result.affectedRows > 0) {
                        res.send({ status: "1" });
                }
                else {
                        res.send({ status: "0" });
                }
        });
});

// add funds
router.post('/pledge', (req, res) => {
        let sql = "INSERT INTO funds SET ?";
        db.query(sql, req.body.funds, (err, result) => {
                if (err) throw err;
                console.log(result);
                if (result.affectedRows > 0) {
                        console.log("rewardsamt"+req.body.rewards_amount);
                        // increase number of backers and add total amount
                        sql="UPDATE campaign SET cam_no_backers = cam_no_backers + 1, total_amount = total_amount +"+req.body.rewards_amount+" WHERE campaign_id="+req.body.funds.campaign_id;
                        db.query(sql, (err, result)=>{
                                if(err) throw err;
                                console.log(result);
                                res.send({ status: "1" });
                        });
                        
                }
                else {
                        res.send({ status: "0" });
                }
        });
});


router.get('/get-creators-campaigns/:user_id', (req, res) => {
        let sql = "select * from campaign where user_id = ?";
        db.query(sql, req.params.user_id, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result);
        });
});

// router.get('/createdb/:id', (req, res) => {
//         res.send(req.params.id);
//         //     let sql = 'CREATE DATABASE nssdq2l1';
//         //     db.query(sql, (err, result) => {
//         //         if(err) throw err;
//         //         console.log(result);
//         //         res.send(req.params.id);
//         //         res.send('Database created...');
//         //     });
// });


// creator's routes ----------------------------------------------


router.get('/get-campaigns', (req, res) => {
        let sql = "SELECT * FROM campaign WHERE status!='failed'";
        db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result);
        });
});


router.get('/get-campaign-by-id/:id', (req, res) => {
        // we have to get all other info too, like faqs and rewards.
        // but we cannot have different db.query blocks for each of them.
        // because node.js works asynchronously (ready then go)
        // (not in order) and thus we're implementing nested query functions

        // get campaign
        let sql = "SELECT * FROM campaign WHERE status!='failed' AND campaign_id = " + req.params.id;
        db.query(sql, (err, results) => {
                if (err) throw err;
                console.log(results);
                let campaign = results;
                var date1 = new Date(results[0].cam_reg_date);
                var date2 = new Date();
                var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
                


                // to get due date
                // Date.prototype.addDays = function(days) {
                //         var date = new Date(this.valueOf());
                //         date.setDate(date.getDate() + days);
                //         return date;
                //     }
                //     var date = new Date();
                //     alert(date.addDays(5));


                // get comments 
                

                sql = "SELECT c.*, u.user_name FROM comments c INNER JOIN user u ON c.user_id = u.user_id WHERE c.campaign_id="+req.params.id+ " ORDER BY c.timestamp DESC";
                db.query(sql, (err, results) => {
                        if (err) throw err;
                        console.log(results);
                        let comments = results;
        
                        

                        // get faq 
                        sql = "SELECT * FROM faq_campaign WHERE campaign_id = " + req.params.id;
                        db.query(sql, (err, results) => {
                                if (err) throw err;
                                console.log(results);
                                let faqs = results;




                                // get story
                                sql = "SELECT * FROM story WHERE campaign_id = " + req.params.id;
                                db.query(sql, (err, results) => {
                                        if (err) throw err;
                                        console.log(results);
                                        let story = results;



                                        // get rewards
                                        sql = "SELECT * FROM rewards WHERE campaign_id = " + req.params.id;
                                        db.query(sql, (err, results) => {
                                                if (err) throw err;
                                                console.log(results);
                                                let rewards = results;




                                                // console.log(campaign, comments, days_to_go);
                                                res.send({
                                                        "campaign": campaign, "comments": comments, "faqs": faqs, "story": story,
                                                        "days_to_go": diffDays, "rewards" : rewards
                                                });
                                        });


                                });


                        });


                });

        });


});

router.get('/get-campaign-by-category/:cat', (req, res) => {
        let sql = "SELECT * FROM campaign WHERE status!='failed' AND WHERE cam_category = " + req.params.cat;
        db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send('campaign by category fetched...');
        });
});

router.get('/get-trending-campaigns/', (req, res) => {
        let sql = "SELECT * FROM campaign WHERE status!='failed' ORDER BY cam_no_backers DESC";
        db.query(sql, (err, results) => {
                if (err) throw err;
                console.log(results);
                res.send('Highest backers fetched...');
        });
});

router.get('/get-newest-campaigns', (req, res) => {
        let sql = "SELECT * FROM campaign WHERE status!='failed' ORDER BY cam_reg_date DESC";
        db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send('latest campaigns fetched...');
                res.send(result);
                res.send(result);
        });
});
// popular by cat
router.get('/get-trending-campaigns-by-category/:cat', (req, res) => {
        let sql = "SELECT * FROM campaign WHERE status!='failed' AND cam_category = ? ORDER BY cam_no_backers DESC";
        db.query(sql, req.params.cat, (err, results) => {
                if (err) throw err;
                console.log(results);
                res.send(results);
        });
});
// newest by cat
router.get('/get-newest-campaigns-by-category/:cat', (req, res) => {
        let sql = "SELECT * FROM campaign WHERE status!='failed' AND cam_category = ? ORDER BY cam_reg_date DESC";
        db.query(sql, req.params.cat, (err, results) => {
                if (err) throw err;
                console.log(results);

                res.send(results);
        });
});


router.get('/get-comments/:campaign_id', (req, res) => {
        let sql = 'SELECT * FROM comments where campaign_id = ? ORDER BY timestamp DESC';
        db.query(sql, campaign_id, (err, results) => {
                if (err) throw err;
                console.log(results);
                res.send('comments fetched...');
        });
});

router.get('/get-rewards/:campaign_id', (req, res) => {
        let sql = 'SELECT * FROM rewards where campaign_id = ?';
        ldb.query(sql, campaign_id, (err, results) => {
                if (err) throw err;
                console.log(results);
                res.send('rewards fetched...');
        });
});



// harsh's apis

//to get name and email on profile
router.get('/:id',function(req,res){
        db.query('select user_name,user_email,profile_img from user where user_id=?',[req.params.id],function(error,result){
           if (error) throw error;
           res.send(result)
           
           //console.log(result);
        });
    });
    //to get about info
    router.get('/:id/about',function(req,res){
      db.query('select user_name,user_email,user_phone,website,bio,location from user where user_id=?',[req.params.id],function(error,result){
        if (error) throw error;
        res.send(result)
    });
    });
    
    //update about info of user
    router.put('/:id/about',function(req,res){
      db.query('update user set user_name=?,user_email=?,user_phone=?,website=?,bio=?,location=? where user_id=?',
      [req.body.user_name, req.body.user_email, req.body.user_phone, req.body.website, req.body.bio,req.body.location, req.params.id],
      function(error,result,fields){
        if (error) throw error;
        res.end(JSON.stringify(result));
      })
    });
    
    //get backed projects of user
    router.get('/:id/backed',function(req,res){
      let sql ="select campaign.cam_title,campaign.cam_subject,funds.funds_id from funds INNER JOIN campaign ON funds.campaign_id = campaign.campaign_id where funds.backer_id =?";
      db.query(sql,[req.params.id],function(error,result,fields){
        if (error) throw error;
        res.send(result);
      });
    });
    
    //get details of campaign
    router.get('/:id/backed/details/:fundsid',function(req,res){
      let sql ="select c.cam_title,c.cam_subject,c.cam_desc,f.amount,f.funds_date,r.rewards_desc from funds f INNER JOIN campaign c ON f.campaign_id = c.campaign_id INNER JOIN rewards r ON f.rewards_id=r.rewards_id  where f.funds_id=?";
       db.query(sql,[req.params.fundsid],function(error,result){
         if(error) throw error;
         res.send(result);
       });
    });
    
    //get myprojects from profile
    router.get('/:id/myprojects',function(req,res){
      let sql="select c.campaign_id,c.cam_title,c.cam_subject from campaign c where c.user_id=?";
      db.query(sql,[req.params.id],function(error,result){
        if(error) throw error;
        res.send(result);
      });
    });

// // login
// router.post('/register', (req, res) => {
//         let sql = 'insert into users(user_name, user_email, user_phone, password, type) values(?,?,?,?,?)';
//         user_name = req.body.user_name;
//         user_email = req.body.user_email;
//         password = req.body.password;
//         user_phone = req.body.user_phone;
//         type = req.body.type;
//         res.send(req.body);
//         db.query(sql, [ user_name, user_email, user_phone, password, type ], (err, result) => {
//                 if(err) throw err;
//                 console.log(result);
//                 res.send(result);
//         });
// });

// Create DB
// router.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });

// // Create table
// router.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Posts table created...');
//     });
// });

// // Insert post 1
// router.get('/addpost1', (req, res) => {
//     let post = {title:'Post One', body:'This is post number one'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post 1 added...');
//     });
// });

// // Insert post 2
// router.get('/addpost2', (req, res) => {
//     let post = {title:'Post Two', body:'This is post number two'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = db.query(sql, post, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post 2 added...');
//     });
// });

// // Select posts
// router.get('/getposts', (req, res) => {
//     let sql = 'SELECT * FROM posts';
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send('Posts fetched...');
//     });
// });

// // Select single post
// router.get('/getpost/:id', (req, res) => {
//     let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post fetched...');
//     });
// });

// // Update post
// router.get('/updatepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post updated...');
//     });
// });

// // Delete post
// router.get('/deletepost/:id', (req, res) => {
//     let newTitle = 'Updated Title';
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Post deleted...');
//     });
// });

module.exports = router;