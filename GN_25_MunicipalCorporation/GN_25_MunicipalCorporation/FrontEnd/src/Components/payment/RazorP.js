import axios from "axios";
import { ReactSession } from 'react-client-session';
import React, { useState } from "react";
// import PropertyService from "../../service/PropertyService";
// import WaterService from "../../service/WaterService";
import { Link } from "react-router-dom";

class RazorP extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      amount: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.openPayModal = this.openPayModal.bind(this);
  }
  componentDidMount() {
    const script = document.createElement("script"); script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true; document.body.appendChild(script);
  }
  handleChange(evt) {
    console.log(evt.target.value)
    this.setState({
      amount: evt.target.value
    })
  }

  openPayModal(amt) {
    // var amount = amt * 1; //Razorpay consider the amount in paise
    var amount = ReactSession.get("totalAmount"); //Razorpay consider the amount in paise
    var options = {
      "key": "rzp_test_ngp8BOrvVseGyV",
      "amount": 0, // 2000 paise = INR 20, amount in paisa
      "name": "Municipal Corporation",
      "description": "Test Transaction",
      'order_id': "",
      "handler": function (response) {
        console.log(response);
        var values = {
          razorpay_signature: response.razorpay_signature,
          razorpay_order_id: response.razorpay_order_id,
          transactionid: response.razorpay_payment_id,
          transactionamount: amount,
        }

        // const [consumer_number, setConsumer_Number] = useState();

        var paymentType = ReactSession.get("paymentType");
        // const consumer_number = ReactSession.get("consumerNo")
        // if (ReactSession.get("consumerNo") != undefined){
        //   setConsumer_Number(ReactSession.get("consumerNo"));
        // } else {
        //   setConsumer_Number(ReactSession.get("consumerNo"));
        // }

        axios.post('http://localhost:8080/payment_gateway/success', values, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
          }
        })
          .then(
            res => { alert("Success")},
            console.log(ReactSession.get("consumerNo")),
          setTimeout(function(){
            window.location.reload()
          }, 1000),
          
          )
          .catch(e => console.log(e))
        
      if (ReactSession.get("consumerNo") != undefined){

        if (paymentType == "propertyR") {
          // PropertyService.updatePropertyRecords(ReactSession.get("consumerNo"))

    
          axios.put(`http://localhost:8080/property/${ReactSession.get("consumerNo")}`, values,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
          })
            .then((res) => {
              console.log('res prop', res.data);
            })
            .catch((err) => {
              console.error(err);
            });

           } else{
          // WaterService.updateWaterRecords(ReactSession.get("consumerNo"))
          axios.put(`http://localhost:8080/water/${ReactSession.get("consumerNo")}`, values, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
          })
            .then((res) => {
              console.log('res ', res.data);
            })
            .catch((err) => {
              console.error(err);
            });
        }

      } else{
        if (paymentType == "propertyR") {
          // PropertyService.updatePropertyRecords(ReactSession.get("consumerNo"))

    
          axios.put(`http://localhost:8080/property/${ReactSession.get("curConNo")}`, values,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
          })
            .then((res) => {
              console.log('res prop', res.data);
            })
            .catch((err) => {
              console.error(err);
            });

           } else{
          // WaterService.updateWaterRecords(ReactSession.get("consumerNo"))
          axios.put(`http://localhost:8080/water/${ReactSession.get("curConNo")}`, values, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
            }
          })
            .then((res) => {
              console.log('res ', res.data);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
      },
      "prefill": {
        "name": 'A M',
        "email": 'am@gmail.com',
        "contact": '9999999999',
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#528ff0"
      }
    };
    axios.post('http://localhost:8080/payment_gateway/create_order', { amount: amount },{
    
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
    }
    })
      .then(res => {
        options.order_id = res.data.id;
        options.amount = res.data.amount;
        console.log(options)
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch(e => console.log(e))

    console.log(typeof (ReactSession.get("totalAmount")));

  }

  render() {

    return (
      <div className="payment_gateway">
        <form className="form-inline" >
          <div className="row justify-content-center box-height my-4">
          <div className="col-9 align-self-center shadow-lg">
            <label className="col-sm-3 col-form-label">Enter the amount:</label>

            <div className="col-sm-8">
              <input className="form-control" type="number" name="amount" value={ReactSession.get("totalAmount") / 100} onChange={this.handleChange} />
              {/*  */}
              {/*  */}

            </div><br></br>
            <div className=''>
            <button  className='btn btn-primary' onClick={(e) => { this.openPayModal(this.state.amount); e.preventDefault(); }}>Pay INR {ReactSession.get("totalAmount") / 100}</button>
            </div><br></br>
            
            <Link to="/newpayment" >Go to Make Payment Page</Link>
            </div>
          </div>
        </form>

      </div>

    );
  }

}

export default RazorP;