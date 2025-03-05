export default function Preloader() {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center">
                            <div className="spinning-coin-fall" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
