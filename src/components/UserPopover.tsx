import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User } from "lucide-react";

export function UserPopover() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'GitHub', url: 'https://github.com/FrancoKaddour', icon: '🔗' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/francokaddour/', icon: '💼' },
    { label: 'Email', url: 'mailto:francokaddour@gmail.com', icon: '✉️' },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button 
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer w-full p-3 justify-center relative z-50" 
          title="Contact"
        >
          <User className="w-[22px] h-[22px]" strokeWidth={1.5} />
        </button>
      </PopoverTrigger>
      <PopoverContent side="right" align="end" className="w-auto p-2 z-50">
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="px-3 py-2 rounded text-sm transition-colors text-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 whitespace-nowrap"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
