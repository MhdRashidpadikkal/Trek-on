import { Hero } from '@/components/Home/Hero';
import { Poppins } from 'next/font/google';


const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  
  return (
   <div className={` ${poppinsFont.className} `}>
    <Hero />
   </div>
  );
}
