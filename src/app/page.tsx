import Image from "next/image";
import Link from 'next/link';
import NaviBar from "./components/NaviBar";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
      <NaviBar></NaviBar>
      <HomePage></HomePage>
    </main>
  );
}
