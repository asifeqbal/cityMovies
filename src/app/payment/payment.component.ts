import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
declare var RazorpayCheckout:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {}
succesDone(){
  var options = {
    description: 'City Movie Payment',
    image: 'https://www.vestaviasoccer.com/wp-content/uploads/sites/6/2017/09/tickets.png',
    currency: 'INR',
    key: 'rzp_test_wScHehratCnaID',
    // order_id: 'order_7HtFNLS98dSj8x',
    amount: '5000',
    name: 'City Movie',
    prefill: {
      email: 'asif.eqbal@razorpay.com',
      contact: '9681396392',
      name: 'Asif Eqbal'
    },
    theme: {
      color: '#F37254'
    }
  }
   
  var successCallback = function(success) {
    alert('payment_id: ' + success.razorpay_payment_id)
    var orderId = success.razorpay_order_id
    var signature = success.razorpay_signature
  }
   
  var cancelCallback = function(error) {
    alert(error.description + ' (Error '+error.code+')')
  }
   
  RazorpayCheckout.on('payment.success', successCallback)
  RazorpayCheckout.on('payment.cancel', cancelCallback)
  RazorpayCheckout.open(options)
}
  paymentDone(){

    this.router.navigate(['/paymentdone']);
  }

}
