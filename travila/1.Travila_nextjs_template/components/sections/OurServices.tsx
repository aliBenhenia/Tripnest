
import Link from "next/link"

export default function OurServices() {
    return (
        <>

            <section className="section-box box-our-services background-body">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30 text-center text-lg-start wow fadeInUp">
                            <h2 className="neutral-1000">Our Services</h2>
                            <p className="text-xl-medium neutral-500">Just 4 easy and quick steps</p>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 wow fadeInUp">
                            <div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="#">View More
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg></Link></div>
                        </div>
                    </div>
                    <div className="box-list-featured">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="/rental-detail"><img src="/assets/imgs/page/homepage8/service.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-detail">Chauffeur Hailing</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link>
                                            </div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/rental-detail">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="/rental-detail"><img src="/assets/imgs/page/homepage8/service2.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-detail">Airport Transfer</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link>
                                            </div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/rental-detail">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="/rental-detail"><img src="/assets/imgs/page/homepage8/service3.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-detail">Corporate Fleet</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link>
                                            </div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/rental-detail">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInDown">
                                <div className="card-spot background-card">
                                    <div className="card-image"> <Link href="/rental-detail"><img src="/assets/imgs/page/homepage8/service4.png" alt="Travila" /></Link></div>
                                    <div className="card-info background-card">
                                        <div className="card-left">
                                            <div className="card-title"> <Link className="text-lg-bold neutral-1000" href="/rental-detail">One-Way Rentals</Link></div>
                                            <div className="card-desc"> <Link className="text-sm neutral-500" href="#">17 services</Link>
                                            </div>
                                        </div>
                                        <div className="card-right">
                                            <div className="card-button"> <Link href="/rental-detail">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
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
