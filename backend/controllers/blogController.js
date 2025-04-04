const {client} = require('../config/db.js');

const blogpost = async(req,res) =>{
    const {name, blog, id} = req.body;

    try{
         const db = client.db("blogDB");
         const blogs = db.collection("blogs");
         await blogs.insertOne({name,blog,id});
         res.status(200).json({message: "Blog has been inserted succesfully"}

         )
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
};


const getAllBlogs = async(req,res) =>{
    try {
        const db = client.db("blogDB");
        const blogs = db.collection("blogs");
        const allBlogs = await blogs.find().toArray();
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getBlogsById = async(req,res) => {
    try {
        const db = client.db("blogDB");
        const blogs = db.collection("blogs");
        const { id } = req.params;
        const blog = await blogs.findOne({ id: id });

        if(!blog) {
            return res.status(404).json({message: "Blog not found"});
        }

        res.status(200).json({blog});
    }
    catch(e){
        res.status(400).json({message: e.message});
    }
};

const updateBlogById = async (req, res) => {
    try {
        const db = client.db("blogDB");
        const blogs = db.collection("blogs");
        const { id } = req.params; 
        const { blog } = req.body;

        const result = await blogs.updateOne({ id }, { $set: { blog } });

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Blog not found or no changes made" });
        }

        res.status(200).json({ message: "Blog updated successfully" });
        

    } catch (error) {
        console.error("Update Error:", error.message);
        res.status(400).json({ message: error.message });
    }
};

const deleteBlogById = async (req, res) => {
    try {
        const db = client.db("blogDB");
        const blogs = db.collection("blogs");
        const { id } = req.params; 

        console.log("Received ID:", id);

        const result = await blogs.deleteOne({ id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });

    } catch (error) {
        console.error("Delete Error:", error.message);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {blogpost, getAllBlogs,getBlogsById,updateBlogById,deleteBlogById};