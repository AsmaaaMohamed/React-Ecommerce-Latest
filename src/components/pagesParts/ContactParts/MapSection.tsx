import SingleLocationCard from "./SingleLocationCard"


const MapSection = () => {
  return (
    <div className="rts-map-contact-area rts-section-gap2 py-[100px]">
        <div className="container">
            <div className="flex flex-wrap -mx-3">
                <div className="md-992:w-1/3 md:w-full w-full px-3">
                    <div className="contact-left-area-main-wrapper">
                        <h2 className="title text-[30px] mb-[10px] font-bold">
                            You can ask us questions !
                        </h2>
                        <p className="disc max-w-[90%] text-base text-muted mb-[40px]">
                            Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.
                        </p>
                        <SingleLocationCard/>
                        <SingleLocationCard/>
                    </div>
                </div>
                <div className="md-992:w-2/3 md:w-full w-full md-992::pl-[50px] pl-[5px] sm:pl-[5px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1716725338558!5m2!1sen!2sbd" width="600" height="540" className="w-full"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MapSection