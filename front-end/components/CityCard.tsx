import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

interface CityCardProps {
  id: string | number;
  name: string;
  slug: string;
  imageUrl: string;
  properties: number;
  className?: string;
}

function CityCardComponent({
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
          loading="lazy"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4nOjk6Njo5QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR0XFx0aHR4dHR5BNy03QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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

// Memoize the component to prevent unnecessary re-renders
export const CityCard = memo(CityCardComponent) 