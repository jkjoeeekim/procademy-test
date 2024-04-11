import Image from "next/image";
import Link from 'next/link';
import NaviBar from "./components/NaviBar";

export default function Home() {
  return (
    <main>
      {/* <Link href='/contact'>Contact Us</Link> */}
      <NaviBar></NaviBar>
    </main>
  );
}
