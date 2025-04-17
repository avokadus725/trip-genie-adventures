
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface BottomNavProps {
  className?: string;
}

export function BottomNav({ className }: BottomNavProps) {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 border-t bg-background z-50", className)}>
      <div className="flex items-center justify-around py-2">
        <BottomNavItem icon="Home" href="/" label="Home" />
        <BottomNavItem icon="Search" href="/explore" label="Explore" />
        <BottomNavItem icon="PlusCircle" href="/create-trip" label="Trip" />
        <BottomNavItem icon="MessageSquare" href="/messages" label="Chat" />
        <BottomNavItem icon="User" href="/profile" label="Profile" />
      </div>
    </div>
  );
}

interface BottomNavItemProps {
  icon: string;
  href: string;
  label: string;
  isActive?: boolean;
}

export function BottomNavItem({ icon, href, label, isActive }: BottomNavItemProps) {
  // Dynamically import the icon
  const icons: Record<string, LucideIcon> = require("lucide-react");
  const Icon = icons[icon];

  return (
    <Link
      to={href}
      className={cn(
        "flex flex-col items-center gap-1 text-muted-foreground",
        isActive && "text-primary"
      )}
    >
      <Icon size={20} />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}
