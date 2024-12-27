import {React,useState} from 'react';
import './CheckOut.css';
import { Link } from 'react-router-dom';
import {TextField,Select,MenuItem} from '@mui/material';
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const [showBillingFields, setShowBillingFields] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("razorpay");
    const [errors, setErrors] = useState({});
    const [formData,setFormData] = useState(
      {
        firstName:"",
        lastName:"",
        address:"",
        company:"",
        etc:"",
        city:"",
        state:"",
        pinCode:"",
        phone:"",
      }
    );
    const cartItems = useSelector((state)=>state.cartData.cartItems);
    
  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBillingOptionChange = (e) => {
            setShowBillingFields(e.target.value === "different");
    };

  const totalAmount = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity;
    }, 0);

    const handleInputChange = (event)=>{
      const {name,value} = event.target;
      setFormData({...formData,[name]:value});

       setErrors({ ...errors, [name]: '' });

    }

    const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.pinCode) newErrors.pinCode = 'Pin Code is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    const handleSubmit = ()=>{

      if (validate()) {
      console.log('Form Submitted:', formData);
      
    }

    }



  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <div className="row">
        <h2>Delivery</h2>
        <Link className='login' to='/login'>Login</Link>
        </div>
       <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        className="input"
        style={{width:'100%'}}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <div className="row">
          <TextField id="outlined-basic" name='firstName' value={formData.firstName} onChange={handleInputChange} error={!!errors.firstName}  helperText={errors.firstName}
           label="First Name" variant="outlined" className="input-field half-width" />
          <TextField id="outlined-basic" name='lastName' value={formData.lastName} onChange={handleInputChange} label="Last Name" variant="outlined" className="input-field half-width" error={!!errors.lastName} helperText={errors.lastName} />
        </div>
        <div className="row">
        <TextField id="outlined-basic" name="company" label="Company (optional)" variant="outlined" className="input-field" />
        </div>
        <div className="row">
        <TextField id="outlined-basic" name="address" value={formData.address} onChange={handleInputChange} label="Address" variant="outlined" className="input-field" error={ !!errors.address} helperText={errors.address} />
        </div>
        <div className="row">
        <TextField id="outlined-basic" name='etc' value={formData.etc} onChange={handleInputChange} label="Apartment, suite, etc. (optional)" variant="outlined" className="input-field" />
       </div>
        <div className="row">
         <TextField id="outlined-basic" name='city' value={formData.city} onChange={handleInputChange} label="City" variant="outlined" className="input-field third-width" error={!!errors.city} helperText={errors.city} />
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        className="third-width"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
         <TextField id="outlined-basic" name='pinCode' value={formData.pinCode} onChange={handleInputChange} label="Pin Code" variant="outlined" className="input-field third-width" error={!!errors.pinCode} helperText={errors.pincode} />
        </div>
       <div className="row">
       <TextField id="outlined-basic" name='phone' value={formData.phone} onChange={handleInputChange} label="Phone" variant="outlined" className="input-field" error={!!errors.phone} helperText={errors.phone} />
       </div>
        <h2>Payment</h2>
         <div className="radio-group">
        <RadioGroup
            name="billing-address"
            defaultValue="razorpay"
            onChange={handlePaymentChange}
        >
            <FormControlLabel
            value="razorpay"
            control={<Radio />}
            label="Razorpay Payment"
            />
            <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash On Delivery"
            />
        </RadioGroup>
        </div>

        

        <h2>Billing Address</h2>
        <div className="radio-group">
        <RadioGroup
            name="billing-address"
            defaultValue="same"
            onChange={handleBillingOptionChange}
        >
            <FormControlLabel
            value="same"
            control={<Radio />}
            label="Same as shipping address"
            />
            <FormControlLabel
            value="different"
            control={<Radio />}
            label="Use a different billing address"
            />
        </RadioGroup>
        </div>

        {showBillingFields && (
          <div className="billing-fields">
          <div className="row">
          <TextField id="outlined-basic" label="First Name" variant="outlined" className="input-field half-width" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" className="input-field half-width" />
        </div>
          <div className="row">
          <TextField id="outlined-basic" label="Billing Address" variant="outlined" className="input-field" />
           </div>
           <div className="row"> 
          <TextField id="outlined-basic" label="Address" variant="outlined" className="input-field" />
          </div>
          <div className="row">
         <TextField id="outlined-basic" label="City" variant="outlined" className="input-field third-width" />
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        className="third-width"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
         <TextField id="outlined-basic" label="Pin Code" variant="outlined" className="input-field third-width" />
            </div>
            <div className='row'>
           <TextField id="outlined-basic" label="Phone" variant="outlined" className="input-field" />
            </div>
          </div>
        )}
      </div>

      <div className="checkout-right">
        {
          cartItems.map((item,index)=>(
          <div className="cart-item">
            <div className='image-container'>
              <img src={item.img} alt={item.name} />
              <div className="qty-badge">{item.quantity}</div>
               <div className="item-details">
            <p>{item.name}</p>
            <span>Orange Box of 8 pieces</span>
          </div>
              </div>
         
          <span className="item-price">₹ {item.price * item.quantity}.00</span>
        </div>
          ))
        }
        <div className="discount">
          <input type="text" placeholder="Discount code" />
          <button>Apply</button>
        </div>

        <div className="total">
          <p>Subtotal • {cartItems.length} items <span>₹ {totalAmount}.00</span></p>
          <p>Shipping <span>₹ 200.00</span></p>
          <hr />
          <h3>Total <span>₹ {totalAmount}.00</span></h3>
          <p className="tax-info">Including ₹46.10 in taxes</p>
          <button className="pay-now-btn" onClick={handleSubmit}>Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut