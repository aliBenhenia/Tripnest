import Link from "next/link"

export default function InstallApp2() {
    return (
        <>

            <section className="section-box box-install-app-2 background-body">
                <div className="container">
                    <div className="block-install-app background-6">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="box-item-download wow fadeInUp"> <span className="btn btn-brand-secondary">Install
                                    APP  Get discount code</span>
                                    <h5 className="mt-15 mb-30">Up to 55% Discount<br className="d-none d-lg-block" />and lots of
                                        special gifts</h5>
                                    <div className="box-button-download"> <Link href="#"><img src="/assets/imgs/page/homepage6/googleplay.png" alt="Travila" /></Link><Link href="#"><img src="/assets/imgs/page/homepage6/appstore.png" alt="Travila" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6"><img className="wow fadeInUp" src="/assets/imgs/page/homepage6/img-download-app.png" alt="Travila" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
