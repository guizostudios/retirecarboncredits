import slideImg1 from './images/banner_nature.jpg'

const Banner = props => {
    return (

        <section className="banner-section bg_img" data-background={slideImg1}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="banner-content">
                            <h1 className="title">Best way to preserve the Nature</h1>
                            <p className='subtitle'>You can retire carbon credits through the purchase of NFTs in a simple and fast way.</p>
                            <a href="#1" className="cmn-btn">Retire</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="banner-img">
                            {/* <img src=alt="image" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}

export default Banner;