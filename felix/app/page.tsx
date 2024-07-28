import Image from "next/image";
import Header from "./components/header"
import Navigation from "./components/navigation"
import Post from "./components/post"
export default function Home() {
  return (
    <>
    <Header/>
    <Navigation/>
    <Post/>
    </>
  );
}
