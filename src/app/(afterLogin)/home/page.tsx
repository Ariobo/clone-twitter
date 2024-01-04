import style from "./home.module.css";
import Post from "../_component/post";
import PostForm from "./_component/postForm";
import Tab from "./_component/tab";
import TabProvider from "./_component/tabProvider";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </main>
  );
}
