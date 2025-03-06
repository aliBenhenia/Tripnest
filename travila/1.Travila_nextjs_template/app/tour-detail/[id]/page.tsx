'use client'
import { useState, useEffect } from 'react'
import BookingForm from '@/components/elements/BookingForm'
import Layout from "@/components/layout/Layout"
import SwiperGroup3Slider from '@/components/slider/SwiperGroup3Slider'
import Link from "next/link"
import { useParams } from 'next/navigation'

const tourData = {
  'marrakech': {
    title: "Marrakech Medina & Souks Adventure",
    rating: 4.98,
    reviews: 428,
    duration: "5 days",
    groupSize: "8 people",
    tourType: "Cultural Tour",
    languages: ["English", "French", "Arabic"],
    price: 899,
    overview: `Experience the magic of Marrakech's historic medina and vibrant souks on this immersive 5-day cultural tour. Discover the rich history, architecture, and traditions of this imperial city as you explore its UNESCO-listed old town.

    Your journey includes visits to iconic landmarks such as the Koutoubia Mosque, Bahia Palace, and the famous Djemaa el-Fna square. Wander through the labyrinthine souks, where traditional artisans craft everything from leather goods to intricate metalwork.`,
    highlights: [
      "Guided tour of Marrakech's historic medina",
      "Traditional Moroccan cooking class",
      "Visit to Majorelle Garden",
      "Evening food tour in Djemaa el-Fna",
      "Day trip to Atlas Mountains"
    ],
    included: [
      "Professional licensed guide",
      "4 nights accommodation",
      "Daily breakfast and selected meals",
      "All entrance fees",
      "Airport transfers",
      "Cooking class materials"
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Optional activities",
      "Travel insurance"
    ]
  },
  'sahara': {
    title: "Sahara Desert Adventure & Camel Trek",
    rating: 4.95,
    reviews: 356,
    duration: "3 days",
    groupSize: "6 people",
    tourType: "Desert Adventure",
    languages: ["English", "Arabic"],
    price: 599,
    overview: `Embark on an unforgettable journey through the golden dunes of the Sahara Desert. This 3-day adventure takes you from Marrakech through the Atlas Mountains to the edge of the Sahara, where you'll experience the magic of the desert under a starlit sky.

    Ride camels across the dunes, spend nights in a luxury desert camp, and witness some of the most spectacular sunrises and sunsets you'll ever see.`,
    highlights: [
      "Camel trek through the dunes",
      "Overnight in luxury desert camp",
      "Stargazing in the desert",
      "Visit to Ait Benhaddou Kasbah",
      "Traditional Berber music around campfire"
    ],
    included: [
      "Transportation in 4x4 vehicle",
      "Camel trek",
      "2 nights accommodation",
      "All meals during the tour",
      "Professional guide",
      "Desert camping equipment"
    ],
    excluded: [
      "Drinks",
      "Personal expenses",
      "Tips for guide and staff",
      "Travel insurance"
    ]
  },
  'fes': {
    title: "Fes Cultural Heritage Tour",
    rating: 4.92,
    reviews: 289,
    duration: "4 days",
    groupSize: "6 people",
    tourType: "Historical Tour",
    languages: ["English", "French", "Arabic"],
    price: 749,
    overview: `Step back in time as you explore Fes, Morocco's cultural capital and the world's largest car-free urban area. This 4-day tour takes you deep into the heart of the medieval medina, where centuries-old traditions continue to thrive.

    Visit ancient madrasas, watch skilled artisans at work, and discover the city's rich history through its magnificent architecture and vibrant cultural scene.`,
    highlights: [
      "Guided tour of Fes Medina",
      "Visit to traditional tanneries",
      "Ceramic and crafts workshops",
      "Royal Palace visit",
      "Traditional music performance"
    ],
    included: [
      "Expert local guide",
      "3 nights accommodation",
      "Daily breakfast",
      "Welcome dinner",
      "All entrance fees",
      "Airport transfers"
    ],
    excluded: [
      "Flights",
      "Personal expenses",
      "Optional activities",
      "Travel insurance"
    ]
  },
  'chefchaouen': {
    title: "Chefchaouen Blue City Experience",
    rating: 4.94,
    reviews: 356,
    duration: "2 days",
    groupSize: "8 people",
    tourType: "Photography Tour",
    languages: ["English", "Spanish"],
    price: 399,
    overview: `Discover the enchanting blue city of Chefchaouen, nestled in Morocco's Rif Mountains. This 2-day photography tour takes you through the city's famous blue-washed streets, offering countless opportunities to capture stunning images.

    Learn about the city's unique history and culture while photographing its most picturesque locations during optimal lighting conditions.`,
    highlights: [
      "Blue City photography walk",
      "Sunset shoot from Spanish Mosque",
      "Local market visit",
      "Mountain viewpoint hike",
      "Traditional craft workshops"
    ],
    included: [
      "Professional photography guide",
      "1 night accommodation",
      "Breakfast and dinner",
      "Photography tips and techniques",
      "Local guide fees"
    ],
    excluded: [
      "Camera equipment",
      "Transportation to Chefchaouen",
      "Personal expenses",
      "Travel insurance"
    ]
  }
}

export default function TourDetail() {
  const [isAccordion, setIsAccordion] = useState(null)
  const params = useParams()
  const [tour, setTour] = useState(null)

  useEffect(() => {
    const tourId = params.id
    setTour(tourData[tourId])
  }, [params.id])

  const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
  }

  if (!tour) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <main className="main">
          <section className="box-section box-breadcrumb background-body">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  <Link href="/">Home</Link>
                  <span className="arrow-right">
                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </li>
                <li>
                  <Link href="/destination">Tours</Link>
                  <span className="arrow-right">
                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L6 6L1 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="text-breadcrumb">{tour.title}</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="box-section box-content-tour-detail background-body">
            <div className="container">
              <div className="tour-header">
                <div className="tour-rate">
                  <div className="rate-element">
                    <span className="rating">{tour.rating} <span className="text-sm-medium neutral-500">({tour.reviews} reviews)</span></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-title-main">
                      <h4 className="neutral-1000">{tour.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="tour-metas">
                  <div className="tour-meta-left">
                    <p className="text-md-medium neutral-500 mr-20 tour-location">
                      <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99967 0C2.80452 0 0.205078 2.59944 0.205078 5.79456C0.205078 9.75981 5.39067 15.581 5.61145 15.8269C5.81883 16.0579 6.18089 16.0575 6.38789 15.8269C6.60867 15.581 11.7943 9.75981 11.7943 5.79456C11.7942 2.59944 9.1948 0 5.99967 0ZM5.99967 8.70997C4.39211 8.70997 3.0843 7.40212 3.0843 5.79456C3.0843 4.187 4.39214 2.87919 5.99967 2.87919C7.6072 2.87919 8.91502 4.18703 8.91502 5.79459C8.91502 7.40216 7.6072 8.70997 5.99967 8.70997Z" />
                      </svg>
                      Morocco
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-30">
                <div className="col-lg-8">
                  <div className="box-info-tour">
                    <div className="tour-info-group">
                      <div className="icon-item">
                        <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5312 1.8828H13.8595V1.20312C13.8595 0.814789 13.5448 0.5 13.1564 0.5C12.7681 0.5 12.4533 0.814789 12.4533 1.20312V1.8828H5.55469V1.20312C5.55469 0.814789 5.2399 0.5 4.85156 0.5C4.46323 0.5 4.14844 0.814789 4.14844 1.20312V1.8828H3.47678C1.55967 1.8828 0 3.44247 0 5.35954V15.0232C0 16.9403 1.55967 18.5 3.47678 18.5H14.5313C16.4483 18.5 18.008 16.9403 18.008 15.0232V5.35954C18.008 3.44247 16.4483 1.8828 14.5312 1.8828Z" />
                        </svg>
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Duration</p>
                        <p className="text-lg-bold neutral-1000">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="tour-info-group">
                      <div className="icon-item background-1">
                        <svg width={24} height={25} viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.183 11.3508H18.5179V9.21402C18.5179 8.82514 18.2025 8.50986 17.8135 8.50986H14.0067C13.6537 7.43248 12.637 6.65961 11.4551 6.65961H10.2332V1.20416C10.2332 0.815281 9.91791 0.5 9.52894 0.5H4.61077C4.2218 0.5 3.90642 0.815281 3.90642 1.20416V6.65966H2.68458C1.20431 6.65966 0 7.86359 0 9.34348V21.8161C0 23.296 1.20431 24.5 2.68458 24.5H21.183C22.7363 24.5 24 23.2366 24 21.6838V14.167C24 12.6141 22.7363 11.3508 21.183 11.3508Z" />
                        </svg>
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Group Size</p>
                        <p className="text-lg-bold neutral-1000">{tour.groupSize}</p>
                      </div>
                    </div>
                    <div className="tour-info-group">
                      <div className="icon-item background-7">
                        <svg width={21} height={21} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2.25C13.4142 2.25 13.75 1.91421 13.75 1.5C13.75 1.08579 13.4142 0.75 13 0.75H9.9548C8.1182 0.74999 6.67861 0.74999 5.53648 0.87373C4.37094 1.00001 3.42656 1.26232 2.62024 1.84815C2.13209 2.20281 1.70281 2.63209 1.34815 3.12023C0.76232 3.92656 0.50001 4.87094 0.37373 6.03648C0.24999 7.17861 0.24999 8.6182 0.25 10.4548V10.5452C0.24999 12.3818 0.24999 13.8214 0.37373 14.9635C0.50001 16.1291 0.76232 17.0734 1.34815 17.8798C1.70281 18.3679 2.13209 18.7972 2.62023 19.1518C3.42656 19.7377 4.37094 20 5.53648 20.1263C6.67859 20.25 8.1182 20.25 9.9547 20.25H10.0453C11.8818 20.25 13.3214 20.25 14.4635 20.1263C15.6291 20 16.5734 19.7377 17.3798 19.1518C17.8679 18.7972 18.2972 18.3679 18.6518 17.8798C19.2377 17.0734 19.5 16.1291 19.6263 14.9635C19.75 13.8214 19.75 12.3818 19.75 10.5453V7.5C19.75 7.08579 19.4142 6.75 19 6.75C18.5858 6.75 18.25 7.08579 18.25 7.5V10.5C18.25 12.3916 18.249 13.75 18.135 14.802C18.0225 15.8399 17.8074 16.4901 17.4383 16.9981C17.1762 17.3589 16.8589 17.6762 16.4981 17.9383C15.9901 18.3074 15.3399 18.5225 14.302 18.635C13.25 18.749 11.8916 18.75 10 18.75C8.1084 18.75 6.74999 18.749 5.69804 18.635C4.66013 18.5225 4.00992 18.3074 3.50191 17.9383C3.14111 17.6762 2.82382 17.3589 2.56168 16.9981C2.19259 16.4901 1.97745 15.8399 1.865 14.802C1.75103 13.75 1.75 12.3916 1.75 10.5C1.75 8.6084 1.75103 7.24999 1.865 6.19805C1.97745 5.16013 2.19259 4.50992 2.56168 4.00191C2.82382 3.64111 3.14111 3.32382 3.50191 3.06168C4.00992 2.69259 4.66013 2.47745 5.69805 2.365C6.74999 2.25103 8.1084 2.25 10 2.25H13Z" />
                        </svg>
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Tour Type</p>
                        <p className="text-lg-bold neutral-1000">{tour.tourType}</p>
                      </div>
                    </div>
                    <div className="tour-info-group">
                      <div className="icon-item background-3">
                        <svg width={24} height={25} viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.5993 9.98724C22.2546 8.57953 22.7344 7.10443 22.7344 5.80109C22.7344 2.87799 20.3571 0.5 17.4351 0.5C15.3765 0.5 13.5884 1.6803 12.7114 3.39984C12.4056 3.37347 12.0963 3.35938 11.7891 3.35938C5.9469 3.35938 1.21875 8.08698 1.21875 13.9297C1.21875 19.7719 5.94635 24.5 11.7891 24.5C17.6312 24.5 22.3594 19.7724 22.3594 13.9297C22.3594 12.6126 22.123 11.2964 21.5993 9.98724ZM17.4351 1.90625C19.5817 1.90625 21.3281 3.65344 21.3281 5.80109C21.3281 8.57275 18.605 12.5386 17.4124 14.1425C15.8795 12.0587 13.5421 8.38324 13.5421 5.80109C13.5419 3.65344 15.2884 1.90625 17.4351 1.90625Z" />
                        </svg>
                      </div>
                      <div className="info-item">
                        <p className="text-sm-medium neutral-600">Languages</p>
                        <p className="text-lg-bold neutral-1000">{tour.languages.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-collapse-expand">
                    <div className="group-collapse-expand">
                      <button className={isAccordion == 1 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" onClick={() => handleAccordion(1)}>
                        <h6>Overview</h6>
                        <svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </button>
                      <div className={isAccordion == 1 ? "collapse" : "collapse show"} id="collapseOverview">
                        <div className="card card-body">
                          <p>{tour.overview}</p>
                        </div>
                      </div>
                    </div>
                    <div className="group-collapse-expand">
                      <button className={isAccordion == 2 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" onClick={() => handleAccordion(2)}>
                        <h6>Highlights</h6>
                        <svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </button>
                      <div className={isAccordion == 2 ? "collapse" : "collapse show"} id="collapseHighlight">
                        <div className="card card-body">
                          <ul>
                            {tour.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="group-collapse-expand">
                      <button className={isAccordion == 3 ? "btn btn-collapse collapsed" : "btn btn-collapse"} type="button" onClick={() => handleAccordion(3)}>
                        <h6>Included/Excluded</h6>
                        <svg width={12} height={7} viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </button>
                      <div className={isAccordion == 3 ? "collapse" : "collapse show"} id="collapseIncluded">
                        <div className="card card-body">
                          <div className="row">
                            <div className="col-lg-6">
                              <p className="text-md-bold">Included:</p>
                              <ul>
                                {tour.included.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <p className="text-md-bold">Excluded:</p>
                              <ul>
                                {tour.excluded.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <BookingForm tour={tour} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
} 