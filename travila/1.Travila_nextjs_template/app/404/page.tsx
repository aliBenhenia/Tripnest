'use client'
import Layout from "@/components/layout/Layout"
import { swiperGroupAnimate } from "@/util/swiperOption"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Error404() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-box box-become-video background-body">
						<div className="container">
							<div className="text-center"> <img className="mr-10" src="/assets/imgs/page/pages/404.png" alt="Travile" />
								<h1 className="neutral-1000"> <span>We </span>Can’t Find <span>This Page</span></h1>
								<p className="text-xl-medium neutral-500">The page you are looking for doesn’t exist or has been moved.
								</p>
								<div className="d-flex align-items-center justify-content-center mt-45"><Link className="btn btn-black-lg-square" href="#">
									<svg className="first" width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15L0.999999 8L8 1M1 8L15 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg>Go Back</Link><Link className="btn btn-link" href="#">Help Center</Link></div>
							</div>
							<div className="row mt-95">
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg width={20} height={22} viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 11.75C6.83 11.75 4.25 9.17 4.25 6C4.25 2.83 6.83 0.25 10 0.25C13.17 0.25 15.75 2.83 15.75 6C15.75 9.17 13.17 11.75 10 11.75ZM10 1.75C7.66 1.75 5.75 3.66 5.75 6C5.75 8.34 7.66 10.25 10 10.25C12.34 10.25 14.25 8.34 14.25 6C14.25 3.66 12.34 1.75 10 1.75Z" />
													<path d="M18.5901 21.75C18.1801 21.75 17.8401 21.41 17.8401 21C17.8401 17.55 14.3202 14.75 10.0002 14.75C5.68015 14.75 2.16016 17.55 2.16016 21C2.16016 21.41 1.82016 21.75 1.41016 21.75C1.00016 21.75 0.660156 21.41 0.660156 21C0.660156 16.73 4.85015 13.25 10.0002 13.25C15.1502 13.25 19.3401 16.73 19.3401 21C19.3401 21.41 19.0001 21.75 18.5901 21.75Z" />
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title"> <Link className="title text-lg-bold" href="#">Support Forum</Link>
												<p className="text-xs-medium neutral-500">Communicate your problems with the community
												</p>
											</div>
											<div className="card-method-contact"> <Link className="email text-md-bold" href="#">Details
												<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link></div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.7163 8.21613L13.6088 8.47863C13.6784 8.49778 13.7503 8.50787 13.8225 8.50863C14.003 8.50863 14.1775 8.44351 14.3139 8.32522C14.4503 8.20694 14.5394 8.04342 14.565 7.8647C14.5905 7.68598 14.5507 7.50404 14.4529 7.3523C14.3551 7.20056 14.2058 7.08918 14.0325 7.03863L13.125 6.77613C12.934 6.71994 12.7286 6.74191 12.5538 6.8372C12.3791 6.93249 12.2493 7.0933 12.1931 7.28426C12.1369 7.47521 12.1589 7.68067 12.2542 7.85543C12.3495 8.03019 12.5103 8.15994 12.7013 8.21613H12.7163Z" />
													<path d="M16.08 9.20246L16.9725 9.46496C17.0418 9.48593 17.1139 9.49605 17.1863 9.49496C17.3668 9.49496 17.5413 9.42984 17.6777 9.31155C17.814 9.19326 17.9032 9.02975 17.9287 8.85103C17.9542 8.67231 17.9145 8.49037 17.8166 8.33863C17.7188 8.18688 17.5696 8.07551 17.3962 8.02496L16.5 7.76246C16.4054 7.73464 16.3063 7.72571 16.2083 7.73619C16.1103 7.74666 16.0154 7.77634 15.9288 7.82353C15.8423 7.87071 15.7659 7.93448 15.704 8.01118C15.6421 8.08789 15.5959 8.17603 15.5681 8.27059C15.5403 8.36514 15.5314 8.46424 15.5419 8.56225C15.5523 8.66025 15.582 8.75523 15.6292 8.84176C15.6764 8.92829 15.7401 9.00468 15.8168 9.06657C15.8936 9.12846 15.9817 9.17464 16.0762 9.20246H16.08Z" />
													<path d="M1.7623 9.19138C1.91108 9.32136 2.10513 9.38739 2.3023 9.37513C2.37552 9.37057 2.44891 9.38057 2.51823 9.40455C2.58755 9.42853 2.65144 9.46601 2.70618 9.51483C2.76093 9.56365 2.80546 9.62284 2.83719 9.68897C2.86892 9.75511 2.88723 9.82688 2.89105 9.90013C2.89476 9.97453 2.88375 10.0489 2.85866 10.1191C2.83356 10.1892 2.79487 10.2537 2.7448 10.3089C2.64811 10.4156 2.51351 10.4802 2.3698 10.4889C2.27095 10.4932 2.17393 10.517 2.08433 10.559C1.99473 10.601 1.91432 10.6603 1.84774 10.7335C1.78117 10.8067 1.72973 10.8924 1.6964 10.9856C1.66307 11.0787 1.64851 11.1776 1.65355 11.2764L2.1748 21.6939C2.20369 22.3144 2.4702 22.9 2.9191 23.3293C3.368 23.7587 3.96488 23.9989 4.58605 24.0001H4.70605L12.7011 23.5951C13.0367 23.578 13.3652 23.4912 13.6654 23.3401C13.9656 23.189 14.2311 22.977 14.4448 22.7176L14.9098 22.8526C15.1299 22.9192 15.3586 22.9533 15.5886 22.9539C16.1108 22.9524 16.6186 22.7822 17.0362 22.4686C17.4538 22.1551 17.7589 21.715 17.9061 21.2139L20.8461 11.2201C20.9017 11.0292 20.8793 10.8239 20.7837 10.6495C20.688 10.4751 20.527 10.3458 20.3361 10.2901C20.1942 10.2468 20.0752 10.1492 20.005 10.0186C19.9348 9.88793 19.919 9.73485 19.9611 9.59263C20.0036 9.45108 20.1005 9.33214 20.2305 9.26186C20.3605 9.19157 20.5131 9.17567 20.6548 9.21763C20.7497 9.246 20.8492 9.2553 20.9477 9.245C21.0462 9.2347 21.1416 9.20501 21.2286 9.15763C21.407 9.06356 21.5416 8.90339 21.6036 8.71138L22.5823 5.37763C22.6721 5.0733 22.701 4.75425 22.6673 4.43874C22.6337 4.12323 22.5383 3.81744 22.3865 3.53883C22.2346 3.26023 22.0294 3.01427 21.7824 2.81503C21.5355 2.61578 21.2517 2.46715 20.9473 2.37763L18.7873 1.74013C18.6916 1.70969 18.5907 1.6988 18.4906 1.7081C18.3906 1.7174 18.2934 1.7467 18.205 1.79427C18.1165 1.84184 18.0384 1.90671 17.9755 1.98502C17.9125 2.06332 17.866 2.15348 17.8386 2.25013C17.7638 2.50461 17.5912 2.71905 17.3586 2.84638C17.1287 2.97055 16.8592 2.99886 16.6086 2.92513C16.3541 2.85033 16.1397 2.67762 16.0124 2.4449C15.8852 2.21219 15.8555 1.93849 15.9298 1.68388C15.9577 1.58835 15.9664 1.48821 15.9552 1.3893C15.9441 1.2904 15.9133 1.1947 15.8648 1.10779C15.8163 1.02088 15.751 0.944496 15.6726 0.883091C15.5943 0.821686 15.5045 0.776488 15.4086 0.750132L13.2486 0.108882C12.9442 0.0191309 12.6252 -0.00976806 12.3097 0.0238367C11.9942 0.0574415 11.6884 0.152891 11.4098 0.304731C11.1311 0.456571 10.8852 0.661824 10.686 0.908761C10.4867 1.1557 10.3381 1.43948 10.2486 1.74388L10.0723 2.34388L9.3748 2.37763C9.17632 2.3883 8.99019 2.47732 8.8573 2.62513C8.79047 2.69838 8.73882 2.78415 8.70535 2.87748C8.67188 2.97081 8.65725 3.06986 8.6623 3.16888C8.66534 3.42799 8.5678 3.67819 8.39018 3.86687C8.21257 4.05556 7.96873 4.16804 7.70991 4.18066C7.45109 4.19329 7.19745 4.10508 7.00232 3.93457C6.80718 3.76407 6.68575 3.52456 6.66355 3.26638C6.65875 3.16785 6.63456 3.07123 6.59236 2.98207C6.55016 2.8929 6.49078 2.81293 6.41763 2.74675C6.34448 2.68056 6.25899 2.62946 6.16605 2.59636C6.07312 2.56327 5.97457 2.54883 5.87605 2.55388L3.62605 2.67013C2.98698 2.70313 2.38702 2.98804 1.95757 3.46247C1.52812 3.93691 1.30419 4.56219 1.3348 5.20138L1.4998 8.67388C1.50699 8.77325 1.53391 8.87019 1.57898 8.95905C1.62405 9.0479 1.68637 9.12688 1.7623 9.19138ZM12.8248 1.54888L14.3773 2.00263C14.3871 2.53494 14.5665 3.05023 14.8894 3.47354C15.2123 3.89685 15.6618 4.20608 16.1726 4.35626C16.6833 4.50644 17.2287 4.48972 17.7293 4.30854C18.23 4.12736 18.6597 3.79117 18.9561 3.34888L20.5048 3.80263C20.7368 3.87157 20.9322 4.02923 21.0486 4.24138C21.1067 4.34685 21.1433 4.46284 21.1562 4.58259C21.1691 4.70234 21.158 4.82346 21.1236 4.93888L20.3173 7.68763C20.0332 7.71107 19.7572 7.79412 19.5073 7.93138C19.2697 8.06058 19.06 8.2354 18.8901 8.44583C18.7202 8.65626 18.5935 8.89815 18.5173 9.15763C18.4412 9.41657 18.4169 9.68799 18.4458 9.95632C18.4748 10.2247 18.5564 10.4846 18.6861 10.7214C18.8223 10.9717 19.0087 11.1913 19.2336 11.3664L16.4698 20.7789C16.401 21.0092 16.2446 21.2033 16.0343 21.3197C15.824 21.4361 15.5765 21.4654 15.3448 21.4014L7.6648 19.1514C7.4352 19.0818 7.24193 18.9251 7.1263 18.7149C7.01068 18.5047 6.98188 18.2576 7.04605 18.0264L9.81355 8.61763C10.0976 8.59111 10.3732 8.50689 10.6236 8.37013C10.9262 8.2052 11.1825 7.96695 11.3691 7.67722C11.5557 7.38748 11.6666 7.05554 11.6916 6.71182C11.7166 6.3681 11.655 6.0236 11.5122 5.70991C11.3695 5.39621 11.1503 5.12337 10.8748 4.91638L11.6848 2.16763C11.7183 2.05172 11.7746 1.94361 11.8502 1.8496C11.9259 1.75559 12.0194 1.67753 12.1255 1.61997C12.2315 1.56241 12.348 1.52648 12.468 1.51428C12.5881 1.50208 12.7093 1.51384 12.8248 1.54888ZM3.7048 4.17388L5.3173 4.09138C5.46316 4.46864 5.69718 4.80552 5.9998 5.07388C6.44693 5.47727 7.02457 5.70581 7.62665 5.71752C8.22874 5.72923 8.81483 5.52333 9.2773 5.13763C9.24063 5.31801 9.27157 5.50558 9.36423 5.66462C9.45689 5.82366 9.6048 5.94308 9.7798 6.00013C9.88624 6.03083 9.98116 6.09248 10.0525 6.17725C10.1238 6.26201 10.1683 6.36606 10.1804 6.47618C10.1924 6.5863 10.1715 6.69752 10.1202 6.79571C10.0689 6.8939 9.98958 6.97463 9.8923 7.02763C9.76177 7.0995 9.60817 7.11701 9.4648 7.07638C9.27435 7.02054 9.06953 7.04247 8.89521 7.13736C8.72089 7.23225 8.59129 7.39237 8.5348 7.58263L5.5948 17.5876C5.41561 18.2022 5.487 18.8628 5.79337 19.425C6.09974 19.9871 6.61617 20.4051 7.2298 20.5876L12.3748 22.0876L4.63105 22.5001C4.51026 22.5057 4.38957 22.4872 4.27595 22.4458C4.16234 22.4044 4.05806 22.3409 3.96914 22.2589C3.88022 22.177 3.80842 22.0782 3.7579 21.9684C3.70738 21.8585 3.67914 21.7397 3.6748 21.6189L3.17605 11.8239C3.4349 11.7054 3.66707 11.5358 3.85855 11.3251C4.08924 11.0729 4.25336 10.7671 4.33605 10.4354C4.41874 10.1037 4.41739 9.75668 4.33212 9.42567C4.24685 9.09465 4.08036 8.79013 3.84772 8.53969C3.61508 8.28924 3.32365 8.10079 2.9998 7.99138L2.85355 5.12638C2.84122 4.88708 2.92364 4.65256 3.08296 4.47359C3.24228 4.29461 3.46569 4.18559 3.7048 4.17013V4.17388Z" />
													<path d="M5.76752 10.5H5.80502L6.75002 10.4512C6.94893 10.4408 7.13555 10.3518 7.26882 10.2037C7.40209 10.0557 7.47109 9.86077 7.46065 9.66185C7.4502 9.46294 7.36117 9.27632 7.21313 9.14306C7.0651 9.00979 6.87018 8.94079 6.67127 8.95123L5.73002 8.99998C5.53111 9.00495 5.34232 9.08874 5.20518 9.23291C5.06805 9.37708 4.9938 9.56982 4.99877 9.76873C5.00374 9.96764 5.08753 10.1564 5.2317 10.2936C5.37587 10.4307 5.56861 10.505 5.76752 10.5Z" fill="black" />
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title"> <Link className="title text-lg-bold" href="#">Documentation</Link>
												<p className="text-xs-medium neutral-500">Dive in to learn all about Travila Platform
												</p>
											</div>
											<div className="card-method-contact"> <Link className="email text-md-bold" href="#">Details
												<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link></div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_942_30756)">
														<path d="M22.5938 11.4959V8.6664C22.5938 7.27628 21.4876 6.14026 20.1094 6.09067V4.3539C20.1094 3.44926 19.3734 2.71328 18.4688 2.71328H13.952L13.3687 1.09201C13.22 0.678573 12.9189 0.348198 12.5211 0.161777C12.1232 -0.0246921 11.6767 -0.0445671 11.2638 0.105714L3.0675 3.08889C2.65509 3.23898 2.32608 3.54081 2.14102 3.93878C1.95595 4.33675 1.93716 4.78285 2.08814 5.19498L2.41744 6.09381C1.07048 6.1771 0 7.29882 0 8.6664V21.4164C0 22.838 1.15655 23.9945 2.57812 23.9945H20.0156C21.4372 23.9945 22.5938 22.838 22.5938 21.4164V18.4931C23.3877 18.379 24 17.6946 24 16.8695V13.1195C24 12.2945 23.3877 11.61 22.5938 11.4959ZM22.5938 16.8695C22.5938 16.9988 22.4886 17.1039 22.3594 17.1039H18.6094C17.4463 17.1039 16.5 16.1576 16.5 14.9945C16.5 13.8314 17.4463 12.8852 18.6094 12.8852H22.3594C22.4886 12.8852 22.5938 12.9903 22.5938 13.1195V16.8695ZM3.40856 4.71123C3.37945 4.63178 3.40078 4.5647 3.41611 4.53174C3.43144 4.49884 3.46898 4.43926 3.54848 4.41034L11.7448 1.42717C11.8244 1.39825 11.8914 1.41976 11.9244 1.43518C11.9573 1.4506 12.0168 1.48839 12.0455 1.56807L12.4575 2.71332H12.1406C11.236 2.71332 10.5 3.44931 10.5 4.35395V6.08832H3.91308L3.40856 4.71123ZM18.7031 4.3539V6.08828H11.9062V4.3539C11.9062 4.22467 12.0114 4.11953 12.1406 4.11953H18.4688C18.598 4.11953 18.7031 4.22467 18.7031 4.3539ZM20.0156 22.5883H2.57812C1.93195 22.5883 1.40625 22.0626 1.40625 21.4164V8.6664C1.40625 8.02023 1.93195 7.49453 2.57812 7.49453H20.0156C20.6618 7.49453 21.1875 8.02023 21.1875 8.6664V11.4789H18.6094C16.6709 11.4789 15.0938 13.056 15.0938 14.9945C15.0938 16.933 16.6709 18.5102 18.6094 18.5102H21.1875V21.4164C21.1875 22.0626 20.6618 22.5883 20.0156 22.5883Z" />
														<path d="M18.6094 15.6973C18.9977 15.6973 19.3125 15.3825 19.3125 14.9941C19.3125 14.6058 18.9977 14.291 18.6094 14.291C18.221 14.291 17.9062 14.6058 17.9062 14.9941C17.9062 15.3825 18.221 15.6973 18.6094 15.6973Z" />
													</g>
													<defs>
														<clipPath id="clip0_942_30756">
															<rect width={24} height={24} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title"> <Link className="title text-lg-bold" href="#">Help Center</Link>
												<p className="text-xs-medium neutral-500">Get help from our experts</p>
											</div>
											<div className="card-method-contact"> <Link className="email text-md-bold" href="#">Details
												<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link></div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.6573 20.3428L21.3371 18.0226C21.192 17.8775 20.9907 17.803 20.786 17.8187L18.954 17.9597L17.2082 16.2138C20.5447 12.695 22.2359 8.98045 22.9604 7.02717C23.8769 4.55606 24.4922 1.55147 23.4705 0.529641C22.4486 -0.492188 19.444 0.123141 16.9729 1.03969C15.0196 1.76419 11.3051 3.45539 7.78622 6.79191L6.04041 5.04609L6.18131 3.21408C6.19706 3.00942 6.12258 2.80809 5.97745 2.66297L3.65723 0.342703C3.2003 -0.114234 2.45686 -0.114234 1.99997 0.342703L0.342703 1.99997C-0.114234 2.45691 -0.114234 3.20034 0.342703 3.65723L2.66287 5.97741C2.808 6.12253 3.00933 6.19702 3.21398 6.18127L5.046 6.04036L6.79181 7.78617C3.45534 11.305 1.76414 15.0195 1.03964 16.9728C0.123047 19.444 -0.492234 22.4486 0.529594 23.4704C1.55142 24.4922 4.55602 23.8769 7.02717 22.9604C8.9805 22.2358 12.695 20.5447 16.2138 17.2082L17.9596 18.954L17.8187 20.786C17.803 20.9907 17.8775 21.192 18.0226 21.3371L20.3428 23.6573C20.7997 24.1143 21.5431 24.1143 22 23.6573L23.6573 22.0001C24.1142 21.5431 24.1142 20.7997 23.6573 20.3428ZM14.9831 13.9887L15.8118 13.1601C17.0123 11.9595 17.1613 10.0997 16.2589 8.73544L18.3576 6.63675C19.1426 7.28344 20.0476 7.75266 21.0305 8.02191C20.1665 9.93492 18.6584 12.631 16.2128 15.2184L14.9831 13.9887ZM9.18262 14.8174C8.3602 13.995 8.36016 12.6567 9.18262 11.8343L10.0113 11.0056L12.9944 13.9887L12.1658 14.8174C11.3433 15.6398 10.0051 15.6398 9.18262 14.8174ZM11.0056 10.0113L11.8343 9.18262C12.6568 8.36016 13.995 8.3602 14.8174 9.18262C15.6399 10.0051 15.6399 11.3433 14.8174 12.1658L13.9888 12.9944L11.0056 10.0113ZM20.8924 1.46011C21.9186 1.33397 22.3726 1.45927 22.4751 1.52489C22.5407 1.62736 22.666 2.08144 22.5399 3.10767C22.4135 4.13639 22.0839 5.37333 21.5869 6.68484C21.5838 6.69286 21.5805 6.70153 21.5774 6.70959C20.5341 6.45741 19.5924 5.93236 18.83 5.16998C18.0676 4.40761 17.5421 3.46608 17.2899 2.42283C17.2982 2.41969 17.307 2.41622 17.3152 2.41313C18.6267 1.91611 19.8637 1.58653 20.8924 1.46011ZM15.9785 2.96934C16.2477 3.95227 16.7164 4.85756 17.3631 5.64253L15.2646 7.74108C13.9003 6.83873 12.0405 6.9877 10.8399 8.18827L10.0113 9.01692L8.78161 7.7872C11.3692 5.34141 14.0654 3.8333 15.9785 2.96934ZM1.50281 2.82863L2.82863 1.50281L4.75444 3.42862L4.6597 4.65975L3.42858 4.75448L1.50281 2.82863ZM9.01692 10.0113L8.18827 10.8399C6.98775 12.0404 6.83878 13.9003 7.74113 15.2645L5.64234 17.3633C4.85733 16.7166 3.95203 16.248 2.96916 15.9788C3.83306 14.0658 5.34122 11.3693 7.7872 8.78156L9.01692 10.0113ZM3.10767 22.5399C2.08144 22.666 1.62741 22.5407 1.52489 22.4751C1.45927 22.3726 1.33397 21.9186 1.46011 20.8924C1.58658 19.8637 1.91611 18.6267 2.41313 17.3152C2.41627 17.3069 2.41978 17.298 2.42292 17.2897C3.46608 17.542 4.40756 18.0676 5.16994 18.8301C5.93231 19.5925 6.45797 20.534 6.71034 21.5771C6.702 21.5803 6.69309 21.5838 6.6848 21.5869C5.37333 22.0839 4.13639 22.4135 3.10767 22.5399ZM8.02228 21.0303C7.75303 20.0474 7.28428 19.1418 6.63755 18.3569L8.73548 16.2589C10.0998 17.1613 11.9596 17.0123 13.1601 15.8118L13.9888 14.9831L15.2184 16.2128C12.6312 18.6583 9.9353 20.1663 8.02228 21.0303ZM21.1714 22.4972L19.2456 20.5715L19.3403 19.3403L20.5714 19.2457L22.4972 21.1714L21.1714 22.4972Z" />
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title"> <Link className="title text-lg-bold" href="#">Our Blog</Link>
												<p className="text-xs-medium neutral-500">Read the latest articles from our blog</p>
											</div>
											<div className="card-method-contact"> <Link className="email text-md-bold" href="#">Details
												<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
													<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
												</svg></Link></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-box box-news box-news-2 background-9">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9 mb-30 wow fadeInUp">
									<h2 className="neutral-1000">Get inspiration for your next trip</h2>
									<p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
								</div>
								<div className="col-md-3 mb-30 wow fadeInUp">
									<div className="box-button-slider box-button-slider-team text-end">
										<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
												<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
												<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container-slider box-swiper-padding">
							<div className="box-list-news">
								<div className="box-swiper mt-30">
									<div className="swiper-container swiper-group-animate swiper-group-journey">
										<Swiper {...swiperGroupAnimate}>
											<SwiperSlide>
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<label className="label">Cultural</label><Link className="wish" href="#">
															<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
															</svg></Link><img src="/assets/imgs/page/homepage1/news.png" alt="Travila" />
													</div>
													<div className="card-info">
														<div className="card-meta"> <span className="post-date neutral-1000">18 Sep
															2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Ultimate Travel Planning Guide: 10 Tips for
															a Seamless Journey</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<label className="label">Travel</label><Link className="wish" href="#">
															<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
															</svg></Link><img src="/assets/imgs/page/homepage1/news2.png" alt="Travila" />
													</div>
													<div className="card-info">
														<div className="card-meta"> <span className="post-date neutral-1000">18 Sep
															2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious
															Adventurers</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<label className="label">Discovery</label><Link className="wish" href="#">
															<svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
																<path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
															</svg></Link><img src="/assets/imgs/page/homepage1/news3.png" alt="Travila" />
													</div>
													<div className="card-info">
														<div className="card-meta"> <span className="post-date neutral-1000">18 Sep
															2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10
															Off-the-Beaten-Path Travel Tips</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travila" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"> <Link className="btn btn-gray" href="/blog-detail">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
								</div>
								<div className="mt-40"><Link className="btn btn-black-lg" href="/blog-detail">View More
									<svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
									</svg></Link></div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}