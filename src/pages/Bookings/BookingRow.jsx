

const BookingRow = ({ booking,handleDelete ,handleBookingConfrim}) => {

    const {_id, customerName, service, date, price, img ,status} = booking;
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{service}</td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                { 
                    status === 'confirm' ? <span className="font-bold text-purple-400">Confirm</span> :
                    
                    <button onClick={()=> handleBookingConfrim(_id)} className="btn btn-ghost btn-xs">Please Confrim</button>}
            </th>
        </tr>
    );
};

export default BookingRow;