const images = [
    require('./../images/priceline.svg'),
    require('./../images/booking.svg'),
    require('./../images/kayak.svg'),
    require('./../images/agoda.svg'),
    require('./../images/rentalcars.svg'),
    require('./../images/opentable.svg'),
]


class BlueFooter extends React.Component {

    render() {

        const imageList = images.map(image => <a href='#' key={image}><img src={image} alt='' /></a>)
        return (
            <div className='blue-footer' >
                <p>Priceline is part of Booking Holdings, the world leader in online travel and related services.</p>
                {/* <img src='./../images/priceline.svg' alt='' /> */}
                {imageList}
            </div >
        );
    }
}

