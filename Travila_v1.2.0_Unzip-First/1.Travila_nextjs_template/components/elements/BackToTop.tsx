'use client'
import { useEffect, useState } from "react"

interface BackToTopProps {
  target: string;
}

export default function BackToTop({ target }: BackToTopProps) {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    const targetElement = document.querySelector(target)
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop,
        behavior: 'smooth'
      })
    } else {
      console.error(`Element with target '${target}' not found`)
    }
  }

  return (
    <>
      {hasScrolled && (
        <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647 }} onClick={handleClick}>
          <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5998 24.2694C10.7522 24.1169 10.8485 23.9083 10.8485 23.6676L10.8503 1.20328C10.8504 0.737952 10.4653 0.35288 9.99997 0.352917C9.53464 0.352955 9.14951 0.738087 9.14947 1.20342L9.14766 23.6678C9.14762 24.1331 9.53269 24.5182 9.99802 24.5181C10.2387 24.5181 10.4473 24.4218 10.5998 24.2694Z" fill=""></path>
            <path d="M18.8405 10.0441C19.1695 9.71509 19.1695 9.16953 18.8406 8.84061L10.6017 0.601675C10.2728 0.272759 9.7272 0.272803 9.39823 0.601772L1.15796 8.84204C0.828992 9.17101 0.828948 9.71657 1.15786 10.0455C1.48678 10.3744 2.03234 10.3744 2.36131 10.0454L9.99981 2.40689L17.6371 10.0442C17.966 10.3731 18.5115 10.373 18.8405 10.0441Z" fill=""></path>
          </svg>
        </a>
      )}
    </>
  )
}
