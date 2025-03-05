
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogGrid2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <main className="main">
                    <section className="box-section box-breadcrumb background-body">
                        <div className="container">
                            <ul className="breadcrumbs">
                                <li> <Link href="/">Home</Link><span className="arrow-right">
                                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg></span></li>
                                <li> <Link href="/blog-grid">Blog</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section className="section-box box-next-trips background-body">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-8 mb-30">
                                    <h1 className="text-86-bold neutral-1000">Inspiration </h1>
                                    <h2 className="text-64-medium neutral-1000">for Your Next Trips</h2>
                                    <h6 className="neutral-500">Discover the World's Treasures with Travila </h6>
                                </div>
                                <div className="col-lg-4 mb-30">
                                    <p className="text-md-bold neutral-1000">Subscribe to see secret deals prices drop the moment you sign up!</p>
                                    <div className="footer-type-3">
                                        <div className="d-flex align-items-center">
                                            <form className="form-newsletter" action="#">
                                                <input className="form-control" type="text" placeholder="Enter your email" />
                                                <input className="btn btn-brand-secondary" type="submit" defaultValue="Subscribe" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-button-slider-nexttrip full-line" />
                        </div>
                    </section>
                    <section className="section-box box-posts-grid-2 background-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="card-blog">
                                        <div className="card-image"><img src="/assets/imgs/page/blog/blog5.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <div className="card-info-blog"><Link className="btn btn-label-tag" href="#">Cultural</Link><Link className="card-title heading-5" href="/blog-detail">Savoring Life’s Palette: Art, Food, and Beyond</Link>
                                                <div className="card-meta-user">
                                                    <div className="box-author-small"> <img src="/assets/imgs/page/homepage1/avatar.png" alt="Travilla" />
                                                        <p className="text-sm-bold">By Jimmy Dave</p>
                                                    </div>
                                                    <div className="date-post">
                                                        <p className="text-sm-medium">12 January 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <ul className="list-posts list-posts-md">
                                        <li>
                                            <div className="card-post">
                                                <div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending.png" alt="Travila" /></Link></div>
                                                <div className="card-info"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">How to get better agents in New York, USA</Link>
                                                    <div className="d-flex align-items-center">
                                                        <p className="text-md-bold date-post neutral-500 mr-20">18 Sep 2024</p>
                                                        <p className="text-md-bold neutral-500">12 January 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-post">
                                                <div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending2.png" alt="Travila" /></Link></div>
                                                <div className="card-info"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">How to get better agents in New York, USA</Link>
                                                    <div className="d-flex align-items-center">
                                                        <p className="text-md-bold date-post neutral-500 mr-20">18 Sep 2024</p>
                                                        <p className="text-md-bold neutral-500">12 January 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-post">
                                                <div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending3.png" alt="Travila" /></Link></div>
                                                <div className="card-info"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Beyond the Pixels: My Art-Tech Lifestyle Journey</Link>
                                                    <div className="d-flex align-items-center">
                                                        <p className="text-md-bold date-post neutral-500 mr-20">18 Sep 2024</p>
                                                        <p className="text-md-bold neutral-500">12 January 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card-post">
                                                <div className="card-image"> <Link href="/blog-detail"><img src="/assets/imgs/page/blog/trending4.png" alt="Travila" /></Link></div>
                                                <div className="card-info"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">How to get better agents in New York, USA</Link>
                                                    <div className="d-flex align-items-center">
                                                        <p className="text-md-bold date-post neutral-500 mr-20">18 Sep 2024</p>
                                                        <p className="text-md-bold neutral-500">12 January 2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-category-posts background-body">
                        <div className="container">
                            <div className="box-list-populars">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Wanderlust</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat2.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Cuisine</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat3.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Adventure</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat4.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Luxury</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat5.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Budget</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat6.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Family</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat7.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Heritage</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card-popular card-top-destination background-card wow fadeInUp">
                                            <div className="card-image"> <img src="/assets/imgs/page/blog/cat8.png" alt="Travila" /></div>
                                            <div className="card-info"> <Link className="card-title" href="/blog-grid">Outdoors</Link>
                                                <div className="card-meta">
                                                    <div className="meta-links"> <Link className="text-tour text-post" href="#">57 posts</Link></div>
                                                    <div className="card-button"> <Link href="/blog-grid">
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
                    <section className="section-box box-news box-news-blog-2 background-9">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-md-6 mb-30 wow fadeInLeft">
                                    <h2 className="neutral-1000">Recent Posts</h2>
                                    <p className="text-xl-medium neutral-500">Favorite destinations based on customer reviews</p>
                                </div>
                                <div className="col-md-6 mb-30 wow fadeInRight">
                                    <div className="d-flex justify-content-center justify-content-md-end"><Link className="btn btn-black-lg" href="#">View More
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="box-list-news wow fadeInUp">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Cultural</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Travel</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent2.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Discovery</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent3.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Cultural</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent4.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Travel</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent5.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Discovery</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent6.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Cultural</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent7.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Travel</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent8.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Discovery</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent9.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Cultural</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent10.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Travel</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent11.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Top 10 Travel Hacks for Budget-Conscious Adventurers</Link></div>
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
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-30">
                                        <div className="card-news background-card hover-up">
                                            <div className="card-image">
                                                <label className="label">Discovery</label><Link className="wish" href="#">
                                                    <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    </svg></Link><img src="/assets/imgs/page/blog/recent12.png" alt="Travila" />
                                            </div>
                                            <div className="card-info">
                                                <div className="card-meta"> <span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
                                                <div className="card-title"> <Link className="text-xl-bold neutral-1000" href="/blog-detail">Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips</Link></div>
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
                                    </div>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><Link className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">
                                            <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg></span></Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span aria-hidden="true">
                                            <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg></span></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <div className="pb-90 background-card" />
                    <section className="section-box box-subscriber background-body">
                        <div className="container">
                            <div className="block-subscriber">
                                <div className="subscriber-left"><span className="btn btn-brand-secondary">Join our newsletter</span>
                                    <h5 className="mt-15 mb-30 neutral-1000">Subscribe to see secret deals prices drop the moment you sign up!</h5>
                                    <form className="form-subscriber" action="#">
                                        <input className="form-control" type="text" placeholder="Your Email" />
                                        <input className="btn btn-submit" type="submit" defaultValue="Subscribe" />
                                    </form>
                                    <p className="text-sm-medium neutral-500 mt-15">No ads. No trails. No commitments</p>
                                </div>
                                <div className="subscriber-right" />
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-media background-body">
                        <div className="container-media wow fadeInUp"> <img src="/assets/imgs/page/homepage5/media.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media2.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media3.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media4.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media5.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media6.png" alt="Travila" /><img src="/assets/imgs/page/homepage5/media7.png" alt="Travila" /></div>
                    </section>
                </main>

            </Layout>
        </>
    )
}