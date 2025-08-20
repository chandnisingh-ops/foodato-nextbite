// Stripe test payment link
export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_9B65kCexob73aYJdoAfw401';

// Stripe configuration
export const STRIPE_CONFIG = {
  successUrl: `${window.location.origin}/payment-success`,
  cancelUrl: `${window.location.origin}/checkout`,
};
