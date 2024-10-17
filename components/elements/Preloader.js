export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                    <div className="preloader-close">Loading...</div>
                </div>
                <div className="layer layer-one"><span className="overlay" /></div>
                <div className="layer layer-two"><span className="overlay" /></div>
                <div className="layer layer-three"><span className="overlay" /></div>
            </div>
        </>
    );
}
