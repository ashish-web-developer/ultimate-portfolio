import User from "@/types/user";
type Like = {
    id:number,
    user_id:number,
    comment_id:number,
    created_at:string,
    updated_at:string,
    like:number
}
type Comment = {
    id:number,
    created_at:string,
    body:string,
    user_id:number,
    blog_id:number,
    user:User,
    like:Array<Like>
}

type Blog = {
    blogs:any,
    created_at:string,
    email:string,
    "featured image":string,
    id:number,
    meta_description:string,
    slug:string,
    status:Number,
    title:string,
    updated_at:string,
    user:string,
    comments:Array<Comment>
}

export {
    Blog,
    Comment,
    Like
}