
import Link from "next/link"

export default function NewYear() {
    return (
        <>

            <section className="section-box box-new-year">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <h2 className="color-white mb-10">New Year, New Adventures</h2>
                        <h6 className="color-white">Save 15% or more when you book and stay <br />before 1 April 2025</h6>
                        <div className="d-flex justify-content-center mt-25"><Link className="btn btn-brand-secondary" href="#">Find
                            Early 2024 Deals
                            <svg width={17} height={16} viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}
