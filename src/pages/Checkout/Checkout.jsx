import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Checkout = () => {
    const {user}= useContext(AuthContext)
    const service = useLoaderData();
    const {_id, title,price,img } = service;

    const handleBookServise= event=>{
        event.preventDefault();
        const form=event.target;
        const name =form.name.value;
        const date =form.date.value;
        const email= user?.email;
        const booking ={
            customerName: name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price:price
        }
        console.log(booking);
        

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }

    return (
        <div>
            <h1 className="text-center text-xl">Book Service: {title}</h1>
            <form onSubmit={handleBookServise}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Frist Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Duo Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary" type="submit" value="Order Confirm" />
                </div>

            </form>
            <div className="card-body">

            </div>
        </div>

    );
};

export default Checkout;