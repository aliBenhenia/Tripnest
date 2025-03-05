
import Layout from "@/components/layout/Layout"
import BannerHome7 from "@/components/sections/BannerHome7"
import BestCar from "@/components/sections/BestCar"
import Faqs3 from "@/components/sections/Faqs3"
import Flights3 from "@/components/sections/Flights3"
import HowItWork2 from "@/components/sections/HowItWork2"
import InstallApp3 from "@/components/sections/InstallApp3"
import Logos3 from "@/components/sections/Logos3"
import Numbers2 from "@/components/sections/Numbers2"
import OurServices from "@/components/sections/OurServices"
import Testimonials6 from "@/components/sections/Testimonials6"
export default function Home8() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={6}>
                <BannerHome7 />
                <Logos3 />
                <Flights3 />
                <BestCar />
                <HowItWork2 />
                <OurServices />
                <Testimonials6 />
                <Numbers2 />
                <Faqs3 />
                <InstallApp3 />
            </Layout>
        </>
    )
}