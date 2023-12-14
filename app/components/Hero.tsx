import Link from "next/link"
import DevImg from "./DevImg"
import { RiArrowDownSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12  xl:py-24 xl:pt-28 h-[84vh] bg-hero  bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-orange-500 text-sm uppercase font-semibold mb-4 text-primary tracking-[4px">
              Web Developer
            </div>
            <h1 className="text-6xl tracking-[-2px] font-bold mb-4">Hello, my name is Akhil S</h1>
            <p className="text-lg mb-8 font-light">
            Explore my portfolio to see
            how I blend creativity with code to build engaging digital experiences.
            </p>
            <div>
              <Link href="/contact"><button className="bg-orange-600 py-2 px-4 font-bold text-white shadow-lg rounded-full hover:bg-orange-700 ">Contact me</button> </Link>
            </div>
          </div>
          <div className="hidden md:block bg-shape bg-no-repeat w-[500px] h-[500px]">
            <DevImg ContainerStyle="bg-shapebold w-[510px] h-[462px] bg-no-repeat  absolute" ImgSrc="/dev-image.png" />
          </div>
        </div>
        <div className="absolute left-1/2  top-3/4 bottom-44 animate-bounce mt-10">
          <RiArrowDownSLine size={30}/>
        </div>
      </div>
    </section>
  )
}

export default Hero