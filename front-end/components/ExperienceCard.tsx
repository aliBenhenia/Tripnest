import Image from "next/image";
import { Star, Clock, Users, Heart, PlaneTakeoff } from "lucide-react";
import { Button, Carousel, Tooltip } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import toast from 'react-hot-toast';
import notify from "@/lib/notify";

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
  const [images, setImages] = useState<string[]>([]);
    // const notifySuccess = () => toast.success('Visit planned successfully!');


  useEffect(() => {
    // Use Wikimedia API as a free source for related city images
    const fetchImages = async () => {
      try {
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${encodeURIComponent(title)}&piprop=original`);
        const data = await res.json();
        const pages = data.query.pages;
        const imageList: string[] = [];

        for (let key in pages) {
          const img = pages[key]?.original?.source;
          if (img) imageList.push(img);
        }

        // Always ensure at least one image
        setImages(imageList.length > 0 ? imageList : [imageUrl]);
      } catch (error) {
        setImages([imageUrl]);
      }
    };

    fetchImages();
  }, [title, imageUrl]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      style={{
        // marginLeft : "10px",
        // background : "red"
      }}
      className={`group snap-start shrink-0 w-[280px] md:w-[300px] lg:w-[340px] scroll-ml-4 bg-white rounded-2xl transition-all duration-300 relative overflow-hidden shadow hover:shadow-2xl  ${className}`}
    >
      <div className="relative h-[200px] w-full">
        <Carousel dots autoplay className="h-full">
          {images.map((img, index) => (
            <div key={index} className="relative h-[200px] w-full">
              <Image
                src={img}
                alt={`${title} image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
          ))}
        </Carousel>
        <div className="absolute top-4 right-4 flex gap-2">
          <Tooltip title="Save Trip">
            <Button
            onClick={()=> notify({message : "save action comming sooon !",type :"success"})}
            shape="circle" icon={<Heart className="w-4 h-4" />} />
          </Tooltip>
          <Tooltip title="add to trip">
            <Button
             onClick={()=> notify({message : "trip comming sooon !",type :"success"})}
            shape="circle" icon={<PlaneTakeoff className="w-4 h-4" />} type="primary" />
          </Tooltip>
        </div>
      </div>

      <div className="p-4">
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
    </motion.div>
  );
}
