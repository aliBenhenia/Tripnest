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
      bg-slate-50 rounded-2xl transition-all duration-300 relative overflow-hidden
      hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${className}`}
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 shadow-sm px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-slate-900">${price}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-amber-50 px-3 py-1.5 rounded-full">
            <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
            <span className="ml-1.5 text-sm font-semibold text-amber-600">{rating}</span>
          </div>
          <span className="text-sm font-medium text-slate-600">{category}</span>
        </div>

        <h3 className="font-semibold text-lg mt-4 mb-3 line-clamp-2 leading-snug text-slate-900">
          {title}
        </h3>

        <div className="flex items-center gap-5">
          <div className="flex items-center text-slate-600">
            <Clock className="h-4 w-4 mr-2 stroke-[2]" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Users className="h-4 w-4 mr-2 stroke-[2]" />
            <span className="text-sm">{groupSize} people</span>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-slate-200">
          <div className="flex items-baseline">
            <span className="text-sm text-slate-600">From </span>
            <span className="ml-1.5 text-lg font-semibold text-slate-900">${price}</span>
            <span className="ml-1 text-sm text-slate-600">per person</span>
          </div>
        </div>
      </div>
    </div>
  )
} 