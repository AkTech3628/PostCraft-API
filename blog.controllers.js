const Blog=require('../models/blog.model')
 

const createblog=async(req,res)=>{
    const{title,content}=req.body



    const blog=await Blog.create({
        title,
        content,
        author:req.userId// find login user/blog user owner

    })

    res.json({message:"blog created"})

}


const getallBlogs = async (req, res) => {
    const blogs = await Blog.find().populate('author', 'username')
    res.json(blogs)
}

module.exports = { createblog, getallBlogs }