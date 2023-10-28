

const BookingRow = ({ handleConfirm, booking, handleDelete }) => {
    const { _id, status, price, date, service, img } = booking;

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                                    </div>
                                </div>
                                <div className="font-bold">{service}</div>
                            </div>
                        </td>
                        <td>
                            $ {price}
                        </td>
                        <td>
                            {date}
                        </td>

                        <th>
                            {
                                status === 'confirm'? 
                                <span className="text-xl font-bold text-purple-700">confirmed</span> :
                                <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookingRow;