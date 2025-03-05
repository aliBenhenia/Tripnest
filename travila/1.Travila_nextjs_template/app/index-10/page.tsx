
import Layout from "@/components/layout/Layout"
import BannerHome9 from "@/components/sections/BannerHome9"
import BestSell from "@/components/sections/BestSell"
import Flights4 from "@/components/sections/Flights4"
import HowItWork3 from "@/components/sections/HowItWork3"
import InstallApp4 from "@/components/sections/InstallApp4"
import Logos4 from "@/components/sections/Logos4"
import News8 from "@/components/sections/News8"
import Numbers3 from "@/components/sections/Numbers3"
import PopularDestinations6 from "@/components/sections/PopularDestinations6"
import SearchAdvanceHome10 from "@/components/sections/SearchAdvanceHome10"
import Skyward from "@/components/sections/Skyward"
import SlideBanner1 from '@/components/sections/SlideBanner1'
import SlideBanner2 from "@/components/sections/SlideBanner2"
import Testimonials7 from "@/components/sections/Testimonials7"
import WhyBookTravila4 from "@/components/sections/WhyBookTravila4"
export default function Home10() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <BannerHome9 />
                <SearchAdvanceHome10 />
                <Logos4 />
                <SlideBanner1 />
                <Flights4 />
                <BestSell />
                <InstallApp4 />
                <Numbers3 />
                <PopularDestinations6 />
                <Skyward />
                <WhyBookTravila4 />
                <HowItWork3 />
                <Testimonials7 />
                <News8 />
            </Layout>
        </>
    )
}