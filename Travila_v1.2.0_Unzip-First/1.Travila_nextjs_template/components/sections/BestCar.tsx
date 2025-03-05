
import Link from "next/link"

export default function BestCar() {
    return (
        <>

            <section className="section-box box-best-car">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30 wow fadeInUp">
                            <div className="box-image-3-col">
                                <div className="img-col"> <img src="/assets/imgs/page/homepage8/best-car.png" alt="Travila" /><img src="/assets/imgs/page/homepage8/best-car2.png" alt="Travila" /></div>
                                <div className="img-col"> <img src="/assets/imgs/page/homepage8/best-car3.png" alt="Travila" /><img src="/assets/imgs/page/homepage8/best-car4.png" alt="Travila" /></div>
                                <div className="img-col"> <img src="/assets/imgs/page/homepage8/best-car5.png" alt="Travila" /><img src="/assets/imgs/page/homepage8/best-car6.png" alt="Travila" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30 wow fadeInUp"><Link className="btn btn-white" href="#">Best Car Rental
                            System</Link>
                            <h4 className="color-white title-best-car"> the best experience with our luxury car</h4>
                            <p className="text-lg-medium neutral-500">Discover how you can offset your adventure's carbon
                                emissions and support the sustainable initiatives practiced by our operators worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
