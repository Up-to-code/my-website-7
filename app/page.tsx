 import AboutMe from "@/components/common/AboutMe";
import CallMe from "@/components/common/CallMe";
import Certificates from "@/components/common/Certificates";
import Hero from "@/components/common/Hero";
import Projects from "@/components/common/Projects";
  
export default function Page() {

  return (
    <>
      <Hero />
      <Projects />
      {/* <Certificates /> */}
      <AboutMe />
      <CallMe />
    </>
  );
}
