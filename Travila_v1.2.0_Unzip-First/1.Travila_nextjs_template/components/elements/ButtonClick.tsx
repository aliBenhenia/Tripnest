'use client'
import { useEffect } from 'react'

export default function ButtonClick() {
	useEffect(() => {
		const buttons = document.querySelectorAll('.btn-click')

		const handleClick = (e: any) => {
			e.preventDefault()
			buttons.forEach(button => button.classList.remove('active'))
			e.target.classList.add('active')
		}

		buttons.forEach(button => button.addEventListener('click', handleClick))

		// Cleanup event listeners on component unmount
		return () => {
			buttons.forEach(button => button.removeEventListener('click', handleClick))
		}
	}, [])
	return null
}
