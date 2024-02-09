"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  //green online and orage polling button topright
  if (!isConnected) {
    return (
      <Badge 
        variant="outline" 
        className="bg-orange-500 text-white border-none"
      >
        Fallback: Polling every 1s
      </Badge>
    )
  }

  return (
    <Badge 
      variant="outline" 
      className="bg-emerald-700 text-white border-none"
    >
      Online
    </Badge>
  )
}