
import Layout from "@/components/layout/Layout"
import BannerHome2 from "@/components/sections/BannerHome2"
import Faqs1 from "@/components/sections/Faqs1"
import FlightsType1 from "@/components/sections/FlightsType1"
import LoveUs from "@/components/sections/LoveUs"
import News3 from "@/components/sections/News3"
import Numbers1 from "@/components/sections/Numbers1"
import PopularDestinations2 from "@/components/sections/PopularDestinations2"
import PopularDestinations3 from "@/components/sections/PopularDestinations3"
import RecommendedForYou from "@/components/sections/RecommendedForYou"
import Section6Home3 from "@/components/sections/Section6Home3"
import VideoGallery from "@/components/sections/VideoGallery"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3}>
                <BannerHome2 />
                <PopularDestinations2 />
                <RecommendedForYou />
                <Numbers1 />
                <FlightsType1 />
                <Section6Home3 />
                <LoveUs />
                <PopularDestinations3 />
                <VideoGallery />
                <Faqs1 />
                <News3 />
            </Layout>
        </>
    )
}