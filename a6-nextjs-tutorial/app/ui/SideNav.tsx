'use client';
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNavItem ({path, title}){
  const activePath = usePathname();
  return (
    <p> 
                  <Link 
                    href={path} className={clsx("",{
                        "bg-blue-300": activePath === path
                    })}
                        >{title}
                  </Link>

    </p>
  )
}
const SideNav = () => {
  return (
    <>
        <nav className="w-64 bg-gray-800 text-white h-screen p-4">
            <SideNavItem  path= "/dashboard" title={"Home"}/>
            <SideNavItem  path= "/dashboard/invoices" title={"Invoices"}/>
            <SideNavItem  path= "/dashboard/customers" title={"Customers"}/>
                
        </nav>
    </>
  );
};

export default SideNav;
// Exportamos el componente `SideNav` para que pueda ser utilizado en otras partes de la aplicación.


