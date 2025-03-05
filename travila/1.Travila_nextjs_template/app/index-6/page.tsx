
import Layout from "@/components/layout/Layout"
import BannerHome5 from "@/components/sections/BannerHome5"
import InstallApp2 from "@/components/sections/InstallApp2"
import LiveTravel from "@/components/sections/LiveTravel"
import News6 from "@/components/sections/News6"
import OurFeatured4 from "@/components/sections/OurFeatured4"
import Payments4 from "@/components/sections/Payments4"
import Security from "@/components/sections/Security"
import TopCategory2 from "@/components/sections/TopCategory2"
import TopSearchSection from "@/components/sections/TopSearchSection"
import TrendingDestination from "@/components/sections/TrendingDestination"
import WhyBookTravila2 from "@/components/sections/WhyBookTravila2"
export default function Home6() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={4}>
                <BannerHome5 />
                <TopSearchSection />
                <OurFeatured4 />
                <Payments4 />
                <TopCategory2 />
                <InstallApp2 />
                <WhyBookTravila2 />
                <TrendingDestination />
                <Security />
                <LiveTravel />
                <News6 />
            </Layout>
        </>
    )
}