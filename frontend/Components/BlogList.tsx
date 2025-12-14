import { blog_data } from "@/public/Assets/assets"
import BlogItem from "./BlogItem"
import { useState } from "react"
import { useEffect } from "react"

interface Post {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    content: string;
}

const BlogList = () => {
    const [menu, setMenu] = useState("All");
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts") // replace with your backend URL
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error(err));
    }, []);

    const filteredPosts = posts.filter(post => menu === "All" ? true : post.category === menu);

    return (
        
        <div>
            <div className="flex justify-center gap-6 my-10">
                {["All", "Technology", "Startup", "Lifestyle"].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setMenu(cat)}
                    className={menu === cat ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer" : "cursor-pointer"}
                >
                    {cat}
                </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-around gap-10 gap-y-10 mb-16 xl:mx-24">
                {filteredPosts.map((post) => (
                <BlogItem
                    key={post._id}
                    _id={post._id}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    content={post.content}
                />
                ))}
            </div>
        </div>
    );
};

export default BlogList;