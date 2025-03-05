export default function Subscriber2() {
    return (
        <>

            <section className="section-box box-subscriber background-body">
                <div className="container">
                    <div className="block-subscriber">
                        <div className="subscriber-left"><span className="btn btn-brand-secondary">Join our newsletter</span>
                            <h5 className="mt-15 mb-30 neutral-1000">Subscribe to see secret deals prices drop the moment you
                                sign up!</h5>
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
        </>
    )
}
