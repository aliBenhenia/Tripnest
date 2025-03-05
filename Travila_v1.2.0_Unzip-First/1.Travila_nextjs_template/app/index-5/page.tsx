
import Layout from "@/components/layout/Layout"
import BannerHome4 from "@/components/sections/BannerHome4"
import CategoryGrid from "@/components/sections/CategoryGrid"
import FlightsType2 from "@/components/sections/FlightsType2"
import Logos2 from "@/components/sections/Logos2"
import Media1 from "@/components/sections/Media1"
import NewYear from "@/components/sections/NewYear"
import News5 from "@/components/sections/News5"
import OurFeatured3 from "@/components/sections/OurFeatured3"
import Partners1 from "@/components/sections/Partners1"
import PopularDestinations5 from "@/components/sections/PopularDestinations5"
import Subscriber2 from "@/components/sections/Subscriber2"
import Testimonials4 from "@/components/sections/Testimonials4"
import WhyBookTravila1 from "@/components/sections/WhyBookTravila1"
export default function Home5() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3}>
                <BannerHome4 />
                <Partners1 />
                <OurFeatured3 />
                <PopularDestinations5 />
                <NewYear />
                <WhyBookTravila1 />
                <CategoryGrid />
                <FlightsType2 />
                <Testimonials4 />
                <News5 />
                <Logos2 />
                <Subscriber2 />
                <Media1 />
            </Layout>
        </>
    )
}