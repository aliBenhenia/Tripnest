import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface HeaderProps {
  username: string;
  avatarUrl?: string;
  title?: string;
}

export function Header({ username, avatarUrl, title = "Find deals" }: HeaderProps) {
  return (
    <div className="py-4 pt-6 md:pt-8 px-4 md:px-8 lg:px-16 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg mb-2 inline-block">
            <p className="text-sm md:text-base font-medium">
              Welcome back, <span className="font-semibold">{username}</span>
            </p>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h1>
        </motion.div>
        
        {/* Avatar only shown on mobile */}
        <div className="md:hidden">
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback className="bg-blue-500 text-white">
              {username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
} 