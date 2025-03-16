import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"

interface ExperienceCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  rating: number;
  category: string;
  price: number;
  duration?: string;
  groupSize?: string;
  className?: string;
}

export function ExperienceCard({
  title,
  imageUrl,
  rating,
  category,
  price,
  duration = "3 hours",
  groupSize = "1-8",
  className = ""
}: ExperienceCardProps) {
  return (
    <div 
      className={`group snap-start shrink-0 w-[280px] md:w-[300px] lg:w-[320px] scroll-ml-4 
      bg-white rounded-xl sm:rounded-2xl transition-all duration-300 relative overflow-hidden
      hover:shadow-xl ${className}`}
    >
      <div className="relative h-[180px] md:h-[200px] w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm shadow-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-semibold text-gray-900">${price}</span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-amber-50 px-2.5 py-1 rounded-full">
            <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
            <span className="ml-1 text-xs font-semibold text-amber-600">{rating}</span>
          </div>
          <span className="text-xs font-medium text-gray-600">{category}</span>
        </div>

        <h3 className="font-semibold text-base md:text-lg mt-3 mb-2 line-clamp-2 leading-snug text-gray-900">
          {title}
        </h3>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-3.5 w-3.5 mr-1.5 stroke-[2]" />
            <span className="text-xs">{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-3.5 w-3.5 mr-1.5 stroke-[2]" />
            <span className="text-xs">{groupSize} people</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-baseline">
            <span className="text-xs text-gray-600">From </span>
            <span className="ml-1 text-base md:text-lg font-semibold text-gray-900">${price}</span>
            <span className="ml-1 text-xs text-gray-600">per person</span>
          </div>
        </div>
      </div>
    </div>
  )
} 