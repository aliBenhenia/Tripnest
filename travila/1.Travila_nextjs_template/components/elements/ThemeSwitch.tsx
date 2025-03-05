import { useEffect, useState } from "react"

export default function ThemeSwitch() {
	const [toggleTheme, setToggleTheme] = useState<string>(
		() => localStorage.getItem("toggleTheme") || "light"
	)

	useEffect(() => {
		localStorage.setItem("toggleTheme", toggleTheme)
		document.documentElement.setAttribute("data-bs-theme", toggleTheme)
	}, [toggleTheme])

	const handleToggleTheme = () => {
		setToggleTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
	}

	return (
		<a className="btn btn-mode change-mode mr-15" onClick={handleToggleTheme}>
			{toggleTheme === "light" ? (
				<img className="light-mode" src="/assets/imgs/template/icons/light.svg" alt="Light Mode" />
			) : (
				<img className="dark-mode" src="/assets/imgs/template/icons/light-w.svg" alt="Dark Mode" />
			)}
		</a>
	)
}
