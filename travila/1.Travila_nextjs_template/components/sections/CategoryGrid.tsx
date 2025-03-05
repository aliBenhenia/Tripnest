
import Link from "next/link"

export default function CategoryGrid() {
    return (
        <>

            <section className="section-box box-category-grid background-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-category wow fadeInUp">
                                <div className="card-image"> </div>
                                <div className="card-info">
                                    <div className="card-text">
                                        <h5 className="card-title mb-55 text-24-merienda color-white">Waking up<br />in a far away
                                            place</h5><Link className="btn btn-brand-secondary" href="#">View More
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-category wow fadeInUp" style={{ backgroundImage: 'url(assets/imgs/page/homepage5/advance.png)' }}>
                                <div className="card-image"> </div>
                                <div className="card-info text-end">
                                    <div className="card-text">
                                        <h5 className="card-title mb-35 text-32-merienda color-white">adventure <br />starts today
                                        </h5><Link className="btn btn-brand-secondary" href="#">View More
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-category card-category-3 wow fadeInUp" style={{ backgroundImage: 'url(assets/imgs/page/homepage5/explore.png)' }}>
                                <div className="card-image"> </div>
                                <div className="card-info">
                                    <div className="card-text">
                                        <p className="text-lg-bold color-white mt-90">Waking up in a far away place</p>
                                        <div className="box-img-activity"><img src="/assets/imgs/page/homepage5/img-explore.png" alt="Travila" /></div><Link className="btn btn-brand-secondary" href="#">View More
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link>
                                        <div className="phone-activity">
                                            <p className="text-sm-bold">1-800-222-8888</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-category card-category-2 wow fadeInUp" style={{ backgroundImage: 'url(assets/imgs/page/homepage5/journey.png)' }}>
                                <div className="card-image"> </div>
                                <div className="card-info">
                                    <div className="card-text">
                                        <p className="text-lg-bold color-white mb-5">Dream Vacation</p>
                                        <h5 className="card-title mb-105 color-white text-36-merienda">Start your <br />JourneyNow
                                        </h5><Link className="btn btn-brand-secondary" href="#">View More
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-category card-category-2 wow fadeInUp" style={{ backgroundImage: 'url(assets/imgs/page/homepage5/book.png)' }}>
                                <div className="card-image"> </div>
                                <div className="card-info text-end">
                                    <div className="card-text">
                                        <p className="text-lg-bold color-white mb-5">Sale Off</p>
                                        <h5 className="card-title mb-40 text-36-merienda color-white">Book and<br />Get best
                                            <br />Deals now</h5><Link className="btn btn-brand-secondary" href="#">View More
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link>
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
