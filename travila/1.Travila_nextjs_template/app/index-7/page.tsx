
import Layout from "@/components/layout/Layout"
import BannerAds from "@/components/sections/BannerAds"
import BannerHome6 from "@/components/sections/BannerHome6"
import Faqs2 from "@/components/sections/Faqs2"
import Flights2 from "@/components/sections/Flights2"
import Media2 from "@/components/sections/Media2"
import Partners2 from "@/components/sections/Partners2"
import Picked from "@/components/sections/Picked"
import Testimonials5 from "@/components/sections/Testimonials5"
import TopRated3 from "@/components/sections/TopRated3"
import TopRated43 from "@/components/sections/TopRated43"
import WhyBookTravila3 from "@/components/sections/WhyBookTravila3"
export default function Home7() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <BannerHome6 />
                <Partners2 />
                <Flights2 />
                <TopRated3 />
                <WhyBookTravila3 />
                <BannerAds />
                <TopRated43 />
                <Picked />
                <Testimonials5 />
                <Faqs2 />
                <Media2 />
            </Layout>
        </>
    )
}