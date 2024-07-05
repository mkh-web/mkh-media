import Post from "./Post";


export default function Feed() {
    return (
        <div className=" flex flex-col gap-4 text-sm">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
        </div>
    );
}