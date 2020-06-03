

const FooterNavigation = ({ title, navigationList = [] }) => {
    return (
        <div className="footerInner">
            <div className="footertitle">{title}</div>
            <div className="listNavigation">
                <ul>
                    {navigationList.map((lists) => (
                        <li key={lists}><a href='#'>{lists}</a></li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

