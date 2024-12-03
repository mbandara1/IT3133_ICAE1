export default function Cart({cart}) {
    const grandTotl = cart.reduce((total,item )=> total + item.price * item.quty,0);
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                    {
                cart.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty}</td>
                        </tr>
                    ))
                    }
                </thead>
                {
                    
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>grandTotal</td>
                </tr>
            </table>
           
        </div>
    );
}