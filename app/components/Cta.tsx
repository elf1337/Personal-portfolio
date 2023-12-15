import Link from "next/link"

const Cta = () => {
  return (
    <section className="bg-[#fef9f5] py-24">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl  md:text-4xl font-bold max-w-[600px] text-center mb-4">
                  Prepared to turn your ideas into reality? I&apos;m here to help
                </h2>
                <div>
                    <Link href="/contact">
                        <button className="bg-orange-600 py-2 px-4 shadow-lg rounded-full font-bold text-white hover:bg-orange-700">Contact me</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta