import Link from "next/link"

export default function LoveUs() {
    return (
        <>

            <section className="section-box box-love-us background-1">
                <div className="box-love-us-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 wow fadeInLeft"><img src="/assets/imgs/page/homepage3/img-love.png" alt="Travila" /></div>
                            <div className="col-lg-7 wow fadeInRight">
                                <h2 className="neutral-1000">You will love us</h2>
                                <p className="text-xl-medium neutral-500">Because more than 268 other customers have loved us
                                    too</p>
                                <div className="row mt-65">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card-why-travel card-love-us hover-up">
                                            <div className="card-image"> <img src="/assets/imgs/page/homepage2/security.svg" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Security
                                                Assurance</Link>
                                                <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to
                                                    user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                                    <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card-why-travel card-love-us hover-up">
                                            <div className="card-image"> <img src="/assets/imgs/page/homepage2/support.svg" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Customer
                                                Support</Link>
                                                <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to
                                                    user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                                    <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card-why-travel card-love-us hover-up">
                                            <div className="card-image"> <img src="/assets/imgs/page/homepage2/policy.svg" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Transparent
                                                Policies</Link>
                                                <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to
                                                    user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                                    <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="card-why-travel card-love-us hover-up">
                                            <div className="card-image"> <img src="/assets/imgs/page/homepage2/repu.svg" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Reputable
                                                Affiliations</Link>
                                                <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to
                                                    user data security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                                    <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></Link>
                                            </div>
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
