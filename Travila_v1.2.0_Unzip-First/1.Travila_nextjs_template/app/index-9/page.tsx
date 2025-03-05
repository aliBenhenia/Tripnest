
import Layout from "@/components/layout/Layout"
import Ads from "@/components/sections/Ads"
import BannerHome8 from "@/components/sections/BannerHome8"
import Explore from "@/components/sections/Explore"
import FeaturedPropoerties from "@/components/sections/FeaturedPropoerties"
import Meet from "@/components/sections/Meet"
import News7 from "@/components/sections/News7"
import PropertiesArea from "@/components/sections/PropertiesArea"
import Subscriber3 from "@/components/sections/Subscriber3"
import WhyChooseUs2 from "@/components/sections/WhyChooseUs2"
export default function Home9() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={6}>
                <BannerHome8 />
                <FeaturedPropoerties />
                <WhyChooseUs2 />
                <Explore />
                <PropertiesArea />
                <Meet />
                <Ads />
                <News7 />
                <Subscriber3 />
            </Layout>
        </>
    )
}