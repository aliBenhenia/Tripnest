
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/Banner"
import BannerHome1 from "@/components/sections/BannerHome1"
import News2 from "@/components/sections/News2"
import OurFeatured1 from "@/components/sections/OurFeatured1"
import Payments2 from "@/components/sections/Payments2"
import RecentLauchedCar from "@/components/sections/RecentLauchedCar"
import Testimonials2 from "@/components/sections/Testimonials2"
import TopCategory1 from "@/components/sections/TopCategory1"
import TopRated2 from "@/components/sections/TopRated2"
import WhyTravelUs from "@/components/sections/WhyTravelUs"
export default function Home2() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={5}>
				<BannerHome1 />
				<OurFeatured1 />
				<TopCategory1 />
				<Banner />
				<TopRated2 />
				<Payments2 />
				<WhyTravelUs />
				<RecentLauchedCar />
				<Testimonials2 />
				<News2 />
			</Layout>
		</>
	)
}