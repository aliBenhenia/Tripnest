
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Faqs3() {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="section-box box-faqs box-faqs-type-2 box-faqs-type-3 background-body">
				<div className="box-faqs-inner">
					<div className="container">
						<div className="text-center wow fadeInUp">
							<h2 className="neutral-1000">Frequently Asked Questions</h2>
							<p className="text-xl-medium neutral-500">You need to come at least once in your life</p>
						</div>
						<div className="block-faqs">
						<div className="accordion" id="accordionFAQ">
                                <div className="accordion-item wow fadeInUp">
                                    <h5 className="accordion-header" id="headingOne">
                                        <button className={isAccordion == 1 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => handleAccordion(1)}>
                                            <h3>01</h3>
                                            <p>How do I make a reservation on your website</p>
                                        </button>
                                    </h5>
                                    <div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">Provide a step-by-step guide on how users can browse and
                                            book travel services on your platform. Include information on searching for
                                            destinations, selecting dates, choosing accommodation, and completing the
                                            booking process. Mention any special features or tools that can help users find
                                            the best deals.</div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp">
                                    <h5 className="accordion-header" id="headingTwo">
                                        <button className={isAccordion == 2 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => handleAccordion(2)}>
                                            <h3>02</h3>
                                            <p>What documents do I need for my trip, and how do I obtain them?</p>
                                        </button>
                                    </h5>
                                    <div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">Provide a step-by-step guide on how users can browse and
                                            book travel services on your platform. Include information on searching for
                                            destinations, selecting dates, choosing accommodation, and completing the
                                            booking process. Mention any special features or tools that can help users find
                                            the best deals.</div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp">
                                    <h5 className="accordion-header" id="headingThree">
									<button className={isAccordion == 3 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => handleAccordion(3)}>
                                            <h3>03</h3>
                                            <p>In the event that I need to modify or cancel my reservation, what are the
                                                policies in place?</p>
                                        </button>
                                    </h5>
                                    <div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">Provide a step-by-step guide on how users can browse and
                                            book travel services on your platform. Include information on searching for
                                            destinations, selecting dates, choosing accommodation, and completing the
                                            booking process. Mention any special features or tools that can help users find
                                            the best deals.</div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp">
                                    <h5 className="accordion-header" id="headingFour">
                                        <button className={isAccordion == 4 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={() => handleAccordion(4)}>
                                            <h3>04</h3>
                                            <p>Can you specify the types of credit/debit cards, digital wallets, or other
                                                online payment methods accepted?</p>
                                        </button>
                                    </h5>
                                    <div className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">Provide a step-by-step guide on how users can browse and
                                            book travel services on your platform. Include information on searching for
                                            destinations, selecting dates, choosing accommodation, and completing the
                                            booking process. Mention any special features or tools that can help users find
                                            the best deals.</div>
                                    </div>
                                </div>
                                <div className="accordion-item wow fadeInUp">
                                    <h5 className="accordion-header" id="headingFive">
                                        <button className={isAccordion == 5 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onClick={() => handleAccordion(5)}>
                                            <h3>05</h3>
                                            <p>What are the working hours, and what can I expect in terms of response times?
                                            </p>
                                        </button>
                                    </h5>
                                    <div className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">Provide a step-by-step guide on how users can browse and
                                            book travel services on your platform. Include information on searching for
                                            destinations, selecting dates, choosing accommodation, and completing the
                                            booking process. Mention any special features or tools that can help users find
                                            the best deals.</div>
                                    </div>
                                </div>
                            </div>
						</div>
						<div className="box-button-center"> <Link className="btn btn-black-lg" href="#">Our Support Center
							<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
							</svg></Link><Link className="btn btn-link" href="#">Contact Us
								<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
								</svg></Link></div>
					</div>
				</div>
			</section>
		</>
	)
}
