(function() {
  let StripeV3 = this.Stripe;

  this.Stripe = function(key) {
    let stripe = StripeV3(key)
    let mock = {
      createToken: function() {
        return new Promise(function(resolve, reject) {
          let result = { token: { id: 123 } }
          return resolve(result);
        })
      }
    }
    return Object.assign(stripe, mock);
  };
}).call(this);
