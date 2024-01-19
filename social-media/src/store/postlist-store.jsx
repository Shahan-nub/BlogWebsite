import { createContext, useReducer } from 'react'
export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    bringAllPosts: () => { },
    addAllPosts: () => { },
});

// const DEFAULT_POSTLIST = [{
//     id: 1,
//     title: 'goa trip',
//     body: 'bonking niggas 24/7 in goa lmao',
//     reactions: 30,
//     userID: 'niggakiller',
//     tags: ['#trip', '#vacation', '#fun'],
// },
// {
//     id: 2,
//     title: 'manali trip',
//     body: 'bonking niggas 24/7 in manali lol',
//     reactions: 753,
//     userID: 'niggabeater',
//     tags: ['#bonking', '#trips', '#ungabunga'],
// }
// ]

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.id)
    }
    else if (action.type === "INITIAL_POSTS"){
        newPostList=action.payload.posts;
    }
    if (action.type === "ADD_POST") {
        let randint = Math.floor(Math.random() * 1000)
        newPostList = [...currPostList, {
            userID: action.payload.userID,
            title: action.payload.title,
            body: action.payload.body,
            tags: action.payload.tags,
            reactions: randint
        }]
    }
    return newPostList
}

export const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, [])
    const addPost = (userID, title, blog, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                userID,
                title,
                body: blog,
                tags,
            }
        })
    }
    const deletePost = (id) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                id,
            }
        })
    }
    const bringAllPosts = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data)=>{
                addAllPosts(data.posts);
            }
            );
    }
    const addAllPosts = (posts) => {
        dispatchPostList({
            type:"INITIAL_POSTS",
            payload: {
                posts,
            }

        })
    }
    return (
        <PostList.Provider value={{
            postList,
            addPost,
            deletePost,
            bringAllPosts,
            addAllPosts
        }}>
            {children}
        </PostList.Provider>
    )
}