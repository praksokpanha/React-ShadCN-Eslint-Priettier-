import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";


const MainNav = () => {

  return (
    
    <div className="mr-4 hidden md:flex">
      <Link to="" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">A</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          to="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
          )}
        >
          Docs
        </Link>
        <Link
          to="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            
          )}
        >
          Components
        </Link>
        <Link
          to="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",

          )}
        >
          Blocks
        </Link>
        <Link
          to="/charts"
          className={cn(
            "transition-colors hover:text-foreground/80",

          )}
        >
          Charts
        </Link>
        <Link
          to="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
           
          )}
        >
          Themes
        </Link>
        <Link
          to="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
          
          )}
        >
          Examples
        </Link>
        <Link
          to="/colors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            
          )}
        >
          Colors
        </Link>
      </nav>
    </div>
  );
};

export default MainNav;
