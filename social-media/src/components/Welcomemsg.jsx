
import { useContext } from 'react'
import styles from '../Socialmedia.module.css'
import { PostList as PostListData } from '../store/postlist-store'
const WelcomeMsg = () => {
    const {bringAllPosts} = useContext(PostListData);
    return (
        <center className={styles.WelcomeMsg}>
            <div className="alert alert-info mx-3 py-4 " role="alert">
                <h2>NO POSTS TO SHOW</h2>
            </div>
            <button onClick={bringAllPosts} type="button" className="btn btn-primary">Load Posts</button>
        </center>
    )
}

export default WelcomeMsg
