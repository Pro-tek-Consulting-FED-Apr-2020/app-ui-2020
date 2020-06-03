const images = [
    './../images/priceline.svg',
    './../images/booking.svg',
    './../images/kayak.svg',
    './../images/agoda.svg',
    './../images/rentalcars.svg',
    './../images/opentable.svg'
]




class BlueFooter extends React.Component {

    render() {

        const imageList = images.map(image => <a href='#' key={image}><img src={image} alt='' /></a>)
        return (
            <div className='blue-footer' >
                <p>Priceline is part of Booking Holdings, the world leader in online travel and related services.</p>
                {imageList}
            </div >
        );
    }
}

