import React, { useContext, useRef } from 'react'
import styles from "../Socialmedia.module.css"
import { PostList as PostListData } from '../store/postlist-store'
import { MdDelete } from "react-icons/md";
import WelcomeMsg from './Welcomemsg';

export const Createpost = () => {
    const { addPost } = useContext(PostListData)
    const userIDEl = useRef();
    const TitleEl = useRef();
    const BlogEl = useRef();
    const tagsEl = useRef();
    const handleOnAddPost = (event) => {
        event.preventDefault();
        const userID = userIDEl.current.value;
        const title = TitleEl.current.value;
        const blog = BlogEl.current.value;
        const tags = (tagsEl.current.value).split(" ");
        console.log(userID, title, blog, tags)
        addPost(userID, title, blog, tags);
        userIDEl.current.value = "";
        TitleEl.current.value = "";
        BlogEl.current.value = "";
        tagsEl.current.value = "";
    }
    return (
        <div className={styles.createpost}>
            <form className={styles.createpostform} onSubmit={handleOnAddPost}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User id</label>
                    <input type="text" ref={userIDEl} className={`form-control ${styles.inputbox}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" ref={TitleEl} className={`form-control ${styles.inputbox}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Blog</label>
                    <textarea ref={BlogEl} className={`form-control ${styles.inputbox}`} id={styles.textarea} ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">tags</label>
                    <input ref={tagsEl} type="text" placeholder="please enter tags in spaces" className={`form-control ${styles.inputbox}`} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export const PostList = () => {
    const { postList } = useContext(PostListData);
    
    return (
        <div className={styles.postlist}>
            {(postList.length === 0 && <WelcomeMsg></WelcomeMsg>)}

            {postList.map((post) => {
                const { id, title, body, tags, reactions } = post
                return <Post id={id} key={id} title={title} body={body} tags={tags} reactions={reactions}></Post>
            })}
        </div>
    )
}
const Post = ({ id, title, body, tags, reactions }) => {
    const { deletePost } = useContext(PostListData);

    return (

        <div className={`card ${styles.posts}`} style={{ width: "19rem" }}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pe-auto" onClick={() => deletePost(id)}>
                        <MdDelete></MdDelete>
                    </span>
                </h5>
                <p className="card-text">{body}</p>
                {tags.map((tag) => {
                    return <span key={tag} className="badge text-bg-primary mx-1">{tag}</span>
                })}
            </div>
            <div className="alert alert-info mx-3" role="alert">
                This post has been Liked by {reactions}
            </div>
        </div>

    )
}