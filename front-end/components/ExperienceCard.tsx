import Image from "next/image"

interface ExperienceCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  rating: number;
  category: string;
  price: number;
  className?: string;
}

export function ExperienceCard({
  title,
  imageUrl,
  rating,
  category,
  price,
  className = ""
}: ExperienceCardProps) {
  return (
    <div className={`snap-start shrink-0 w-[180px] md:w-[280px] lg:w-[300px] md:mb-6 scroll-ml-4 ${className}`}>
      <div className="relative h-[150px] w-[180px] md:h-[180px] md:w-[280px] lg:h-[200px] lg:w-[300px] rounded-xl overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 300px"
        />
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500">
            <span className="text-xs">★</span>
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <h3 className="font-medium text-sm md:text-base mt-1 line-clamp-2">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-1">{category}</p>
        <p className="text-xs md:text-sm mt-1">From ${price}/person</p>
      </div>
    </div>
  )
} 