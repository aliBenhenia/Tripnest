import Link from "next/link"

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  className?: string;
}

export function SectionHeader({ 
  title, 
  viewAllLink,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`px-4 md:px-8 lg:px-16 flex justify-between items-center ${className}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {viewAllLink && (
        <Link href={viewAllLink} className="text-gray-500 text-sm">
          View all
        </Link>
      )}
    </div>
  )
} 