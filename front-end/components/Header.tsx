import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  username: string;
  avatarUrl?: string;
  title?: string;
}

export function Header({ username, avatarUrl, title = "Find deals" }: HeaderProps) {
  return (
    <div className="p-4 pt-6 md:px-8 lg:px-16 flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm md:text-base">Hello, {username}</p>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      </div>
      <Avatar className="h-10 w-10 md:h-12 md:w-12">
        <AvatarImage src={avatarUrl} alt={username} />
        <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  )
} 