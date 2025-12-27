import { Link as LinkScroll } from 'react-scroll'
import Button from './Button';
import { Menu} from 'lucide-react';
import Form from '../Form';
import { useState } from 'react';
import clsx from 'clsx';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsopen] = useState(false);

  const NavLink = ({ title }) => (
    <LinkScroll to={title} onClick={()=>setIsopen(false)} className=' cursor-pointer' spy offset={-100}>
       <div>{title}</div>
    </LinkScroll>
   
  );

  return (
    <div className="sticky top-0 z-10 bg-gray-950/50 backdrop-blur-lg">
      <div className="flex text-white items-center justify-between">
        <LinkScroll to="Features" className="cursor-pointer" offset={-100}>
          <div className="flex items-center">
            <img src="/logo/Var2.png" alt="Logo" width={90} />
            <h2 className="text-2xl font-bold max-lg:hidden">FOCUSNOTE</h2>
          </div>
        </LinkScroll>

        <div
          className={clsx(
            "flex gap-5  max-lg:fixed max-lg:text-center max-lg:top-21 max-lg:flex max-lg:gap-5 max-lg:flex-col max-lg:pt-2 max-lg:backdrop-blur-2xl max-lg:bg-green-950/90 max-lg:w-full",
            isOpen ? "max-lg:block " : "max-lg:hidden"
          )}
        >
          <NavLink title={"Features"} />
          <NavLink title={"Benefit"} />
          <NavLink title={"How it Works"} />
        </div>
        <div className="mr-5 max-lg:hidden">
          <Button onClick={() => setOpen(true)}>Join Waitlist</Button>
        </div>
        <div className="lg:hidden flex items-center cursor-pointer">
          <Menu onClick={() => setIsopen(!isOpen)} />
        </div>
      </div>
      {open && (
        <div className="fixed top-50 inset-0">
          <Form open={open} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
