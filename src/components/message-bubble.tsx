
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { format } from "date-fns";

interface MessageBubbleProps {
  message: string;
  timestamp: Date;
  isSender?: boolean;
  senderAvatar?: string;
  senderName?: string;
}

export function MessageBubble({
  message,
  timestamp,
  isSender = false,
  senderAvatar,
  senderName,
}: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-xs gap-2",
        isSender ? "ml-auto flex-row-reverse" : ""
      )}
    >
      {!isSender && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={senderAvatar} alt={senderName} />
          <AvatarFallback>{senderName?.[0]}</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col">
        <div
          className={cn(
            "rounded-2xl px-4 py-2 text-sm",
            isSender
              ? "rounded-tr-none bg-primary text-primary-foreground"
              : "rounded-tl-none bg-muted text-muted-foreground"
          )}
        >
          {message}
        </div>
        <span className="mt-1 text-xs text-muted-foreground">
          {format(timestamp, "p")}
        </span>
      </div>
    </div>
  );
}
