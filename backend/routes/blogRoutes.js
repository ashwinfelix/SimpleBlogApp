const express = require("express");
const {blogpost, getAllBlogs, getBlogsById, updateBlogById, deleteBlogById} = require("../controllers/blogController");

const router = express.Router();

router.post('/create-blog',blogpost);
router.get('/get-all-blogs',getAllBlogs);
router.get('/get-blog/:id',getBlogsById);
router.put('/update-blog/:id',updateBlogById);
router.delete("/delete-blog/:id", deleteBlogById);



module.exports = router;