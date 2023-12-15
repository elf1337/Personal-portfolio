import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { AlignJustify } from 'lucide-react';
import Logo from "./Logo";
import Navbar from "./Navbar";

function Mobnav() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div>
          <div>
            <Logo/>
            <Navbar ContainerStyle={'flex flex-col gap-y-6 items-center justify-center mt-12'} LinkStyle={'text-xl'}/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Mobnav