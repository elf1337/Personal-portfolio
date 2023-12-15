import { Contact2Icon } from 'lucide-react'
import { ContactForm } from './ContactForm'

const Contact = () => {
  return (
    <section className=''>
      <div className="container mx-auto">
      <div className='grid grid-cols-2 h-[480px] py-12 mb-6 pt-12'>
        <div className='flex flex-col justify-center'>
         <div className='text-xl font-bold mb-4 text-orange-500'> Say Hello</div>
          <h3 className='text-6xl tracking-[-2px] font-bold max-w-md mb-8'>Let&apos;s Work Together</h3>
          <p className='text-sm md:text-lg mb-8 font-light md:max-w-md'>
          Cultivating Collaboration: Your Vision, Our Expertise Together, We Build Success.
          </p>
        </div>
        <div className='hidden md:block bg-illustration w-full bg-no-repeat bg-contain bg-right'>
        </div>
      </div>
      <ContactForm/>  
      </div>
    </section>
  )
}

export default Contact