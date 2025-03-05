import Link from 'next/link'
export default function PopupFirstLoad() {
    return (
        <>

            <div className="popup-firstload">
                <div className="popup-container">
                    <div className="popup-content"> <a className="close-popup" />
                        <div className="popup-left">
                            <div className="logo-area"> <img className="light-mode" alt="Travila" src="/assets/imgs/template/logo.svg" /><img className="dark-mode" alt="Travila" src="/assets/imgs/template/logo-w.svg" /></div>
                            <h3 className="title-popup">Book, Pack, Go! Your Ultimate Travel Companion</h3><Link className="btn btn-black-lg" href="#">Exploring Now
                                <svg width={16} height={16} viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 15L15 8L8 1M15 8L1 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></Link>
                        </div>
                        <div className="popup-right">
                            <div className="box-price">
                                <div className="box-price-inner"> <span className="text-price-1">SAVE 39%</span><span className="text-price-2">$899</span><Link className="text-price-3" href="#">BOOK NOW</Link></div>
                            </div><img alt="Travila" src="/assets/imgs/template/img-popup.png" />
                            <div className="button-area"> <Link className="btn btn-next" href="#">
                                <svg width={12} height={12} viewBox="0 0 12 12"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99992 10.6668L10.6666 6.00016L5.99992 1.3335M10.6666 6.00016L1.33325 6.00016" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
