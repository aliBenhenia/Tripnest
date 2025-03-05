
import Link from "next/link"
import CategoryFilter from '../elements/CategoryFilter'

export default function PopularDestinations6() {
    return (
        <>

            <section className="section-box box-popular-destinations background-body mt-0 pt-60">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-30 text-center text-lg-start">
                            <h2 className="neutral-1000">Popular Destinations</h2>
                            <p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
                        </div>
                        <div className="col-lg-6 mb-30">
						<CategoryFilter />
                        </div>
                    </div>
                    <div className="box-list-populars">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">Venice</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular2.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">Amsterdam</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular3.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">Budapest</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular4.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">Lisbon</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular5.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">London</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular6.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">Ottawa</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular background-card hover-up">
                                    <div className="card-image"> <Link href="/destination"><img src="/assets/imgs/page/homepage1/popular7.png" alt="Travila" /></Link></div>
                                    <div className="card-info"> <Link className="card-title" href="/destination">Paris</Link>
                                        <div className="card-meta">
                                            <div className="meta-links"> <Link href="#">356 Tours, </Link><Link href="#">248
                                                Activities</Link></div>
                                            <div className="card-button"> <Link href="/destination">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card-popular-2">
                                    <div className="card-info">
                                        <h6 className="neutral-500">Crafting Your Perfect Travel Experience</h6>
                                        <div className="card-meta">
                                            <div className="meta-links">Browse <br />All destinations</div>
                                            <div className="card-button hover-up"> <Link href="/destination">
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
