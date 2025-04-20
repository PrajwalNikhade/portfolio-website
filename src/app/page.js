import Image from "next/image";
import Main from "./components/Main";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
    <div className="bg-[#F9FAFF]">
      
      <Main />
      <Projects />
    </div>
    </>
  );
}
