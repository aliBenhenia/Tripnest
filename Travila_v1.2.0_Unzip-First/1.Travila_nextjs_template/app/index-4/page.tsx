
import Layout from "@/components/layout/Layout"
import BannerHome3 from "@/components/sections/BannerHome3"
import HowItWork1 from "@/components/sections/HowItWork1"
import InstallApp1 from "@/components/sections/InstallApp1"
import Logos1 from "@/components/sections/Logos1"
import News4 from "@/components/sections/News4"
import OurFeatured2 from "@/components/sections/OurFeatured2"
import Payments3 from "@/components/sections/Payments3"
import PopularDestinations4 from "@/components/sections/PopularDestinations4"
import PopularSpots from "@/components/sections/PopularSpots"
import SlideBanner1 from "@/components/sections/SlideBanner1"
import Testimonials3 from "@/components/sections/Testimonials3"
export default function Home4() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={6}>
                <BannerHome3 />
                <Logos1 />
                <PopularDestinations4 />
                <OurFeatured2 />
                <SlideBanner1 />
                <HowItWork1 />
                <Testimonials3 />
                <Payments3 />
                <PopularSpots />
                <News4 />
                <InstallApp1 />
            </Layout>
        </>
    )
}