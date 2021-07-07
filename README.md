# stripe-payment

## Build basic payment-gateway with React and Node like charging user from their credit cards along with shipping/billing address.

## Packages used

   A) **Frontend (React)**
   
      1. [react-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout)
      2. dotenv (Inbuild in react)
      3. materialize css
      
   B) **Backend (Node)**
   
      1. cors : CORS(Cross-Origin Resource Sharing) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS options.
      2. [stripe](https://www.npmjs.com/package/stripe)
      3. [uuid](https://www.npmjs.com/package/uuid) : (Universally Unique Identifiers) used to avoid double transaction due to network error.
      4. express
      5. dotenv : Environment variables to store secret keys.
      6. nodemon
      
   stripe : The Stripe Node library provides convenient access to the Stripe API from applications written in server-side JavaScript.
   
   `npm install stripe`

   ```javaScript
        const stripe = require('stripe')('sk_test_...');

        stripe.customers.create({
          email: 'customer@example.com',
        })
        .then(customer => console.log(customer.id))
        .catch(error => console.error(error));
   ```
   
   
   react-stripe-checkout : Stripe's Checkout makes it almost too easy to make transaction. This should make it even easier if we building a react application.
   
   `npm install react-stripe-checkout`
   
   ```javaScript
        import React from 'react'
        import StripeCheckout from 'react-stripe-checkout';
 
        export default class TakeMoney extends React.Component {
          
          onToken = (token) => {
            fetch('/save-stripe-token', {
                method: 'POST',
                body: JSON.stringify(token),
              }).then(response => {
                  response.json().then(data => {
                    alert(`We are in business, ${data.email}`);
                  });
                });
           }
 
          // ...
 
          render() {
            return (
              // ...
              <StripeCheckout
                token={this.onToken}
                stripeKey="my_PUBLISHABLE_stripekey"
              />
            )
          }
        }
   ```
   
  ## The Publishable key and token key will be valid for **seven days**, when it was created.
  
  
  ## Sreenshots/Outputs
  
  ![Screenshot from 2021-07-07 23-18](https://user-images.githubusercontent.com/56266493/124815626-1c195a00-df85-11eb-8d0e-f80cbf53fcf8.png)
  
  
  ![Screenshot from 2021-07-07 23-19](https://user-images.githubusercontent.com/56266493/124815654-25a2c200-df85-11eb-91ac-9e12d7b02a80.png)
  
  
  ![Screenshot from 2021-07-07 23-19 (1)](https://user-images.githubusercontent.com/56266493/124815680-2b98a300-df85-11eb-8c05-9fcdf8832fe2.png)
  
  
  ![Screenshot from 2021-07-07 23-20](https://user-images.githubusercontent.com/56266493/124815717-36533800-df85-11eb-9614-61b4b16d4713.png)
  
  
  ![Screenshot from 2021-07-07 23-22](https://user-images.githubusercontent.com/56266493/124815746-410dcd00-df85-11eb-8cf9-3581f96cf88c.png)
  
  
  ![Screenshot from 2021-07-07 23-24](https://user-images.githubusercontent.com/56266493/124815758-4703ae00-df85-11eb-9151-9456546a9e14.png)
  
  ### Response in stripe website
  ![Screenshot from 2021-07-07 23-27](https://user-images.githubusercontent.com/56266493/124815795-4f5be900-df85-11eb-8031-521120be540a.png)







   
   
      
      
