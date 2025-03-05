
import Link from "next/link"

export default function Security() {
    return (
        <>

            <section className="section-box box-security background-body">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="card-why-travel card-love-us wow fadeInUp">
                                <div className="card-image"> <img src="/assets/imgs/page/homepage2/security.svg" alt="Travila" />
                                </div>
                                <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Security Assurance</Link>
                                    <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
                                        security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                        <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></Link>
                                </div>
                            </div>
                            <div className="card-why-travel card-love-us wow fadeInUp">
                                <div className="card-image"> <img src="/assets/imgs/page/homepage2/support.svg" alt="Travila" />
                                </div>
                                <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Customer Support</Link>
                                    <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
                                        security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                        <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-img-security wow fadeInUp"> <span className="text-phone">+01 235 368</span><img src="/assets/imgs/page/homepage6/man.png" alt="Travila" /></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-why-travel card-love-us wow fadeInUp">
                                <div className="card-image"> <img src="/assets/imgs/page/homepage2/policy.svg" alt="Travila" />
                                </div>
                                <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Transparent Policies</Link>
                                    <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
                                        security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                        <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></Link>
                                </div>
                            </div>
                            <div className="card-why-travel card-love-us wow fadeInUp">
                                <div className="card-image"> <img src="/assets/imgs/page/homepage2/repu.svg" alt="Travila" /></div>
                                <div className="card-info"> <Link className="text-xl-bold card-title" href="#">Reputable
                                    Affiliations</Link>
                                    <p className="text-sm-medium neutral-500 card-desc">Demonstrates commitment to user data
                                        security through encryption and secure payment practices</p><Link className="text-sm-medium card-link" href="#">Learn More
                                        <svg width={11} height={10} viewBox="0 0 11 10"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.50011 9.08347L9.58347 5.00011L5.50011 0.916748M9.58347 5.00011L1.41675 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
