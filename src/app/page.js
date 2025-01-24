
import Hero from "@/component/Hero";
import Category from "@/component/Category";
import Featured from "@/component/Featured";
import Testimonials from "@/component/Testimonials";

export default function Home() {
  return (
   <>
   <div className="home">
    <Hero/>
    <Category/>
    <Featured/>
    <Testimonials/>
   </div>
   </>
  );
}
