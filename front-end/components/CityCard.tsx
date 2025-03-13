import Image from "next/image"
import Link from "next/link"

interface CityCardProps {
  id: string | number;
  name: string;
  slug: string;
  imageUrl: string;
  properties: number;
  className?: string;
}

export function CityCard({
  name,
  slug,
  imageUrl,
  properties,
  className = ""
}: CityCardProps) {
  return (
    <Link
      href={`/city/${slug}`}
      className={`snap-start shrink-0 w-[180px] md:w-[220px] lg:w-[280px] rounded-xl overflow-hidden relative md:mb-6 scroll-ml-4 ${className}`}
    >
      <div className="relative h-[220px] w-[180px] md:w-[220px] md:h-[260px] lg:w-[280px] lg:h-[320px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
          <p className="text-xs md:text-sm text-gray-200">{properties} properties</p>
        </div>
      </div>
    </Link>
  )
} 