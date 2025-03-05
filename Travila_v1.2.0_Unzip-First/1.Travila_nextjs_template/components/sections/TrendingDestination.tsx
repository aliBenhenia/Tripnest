
import Link from "next/link"
import Countdown from '../elements/Countdown'

export default function TrendingDestination() {
	const currentTime = new Date()
    return (
        <>

            <section className="section-box box-trending-destination background-body">
                <div className="container">
                    <div className="text-center">
                        <h2 className="neutral-1000">Trending Destinations</h2>
                        <p className="text-xl-medium neutral-500">Most popular choices for travelers</p>
                    </div>
                    <div className="box-list-featured">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="card-spot card-spot-2 background-card">
                                    <div className="card-image">
                                        <label className="lbl-promotion">26 promotions</label><Link href="/destination"><img src="/assets/imgs/page/homepage6/trend.png" alt="Travila" /></Link>
                                    </div>
                                    <div className="card-info-two-col">
                                        <div className="card-info card-mw background-card wow fadeInUp">
                                            <div className="card-left">
                                                <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination">Western Europe</Link></div>
                                                <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356
                                                    Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link>
                                                </div>
                                            </div>
                                            <div className="card-right">
                                                <div className="card-button"> <Link href="#">
                                                    <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round">
                                                        </path>
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                        <div className="card-count">
                                            <p className="text-sm-bold color-white">Promotion will end in</p>
                                            <div className="box-count box-count-square mb-0 mt-5 wow fadeInUp">
											<Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-spot card-spot-2 background-card wow fadeInUp">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage6/trend2.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination">New York</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-spot card-spot-2 background-card wow fadeInUp">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage6/trend3.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination">Venice</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-spot card-spot-2 background-card wow fadeInUp">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage6/trend4.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination">Amsterdam</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="card-spot card-spot-2 background-card wow fadeInUp">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage6/trend5.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/destination">London</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
