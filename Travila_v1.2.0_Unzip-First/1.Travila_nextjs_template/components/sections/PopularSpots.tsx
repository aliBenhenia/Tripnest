
import Link from "next/link"
import CategoryFilter from '../elements/CategoryFilter'

export default function PopularSpots() {
    return (
        <>

            <section className="section-box box-popular-spots background-2">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 mb-30 text-center text-lg-start wow fadeInLeft">
                            <h2 className="neutral-1000">Popular Spots</h2>
                            <p className="text-xl-medium neutral-500">Dare to live the lift you’ve always wanted</p>
                        </div>
                        <div className="col-lg-6 mb-30 wow fadeInRight">
						<CategoryFilter />
                        </div>
                    </div>
                    <div className="box-list-featured">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Venice</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot2.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">New
                                                York</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot3.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Amsterdam</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot4.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Budapest</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot5.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Lisbon</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot6.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">London</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot7.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Ottawa</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
                                                <svg width={10} height={10} viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="#"><img src="/assets/imgs/page/homepage4/spot8.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="#">Paris</Link>
                                            </div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">356 Tours,</Link><Link className="text-sm neutral-500" href="#">248 Activities</Link></div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="#">
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
