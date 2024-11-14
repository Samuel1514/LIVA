const webpush = require('web-push');

try {
  const vapidKeys = webpush.generateVAPIDKeys();
  console.log("Public Key:", vapidKeys.publicKey);
  console.log("Private Key:", vapidKeys.privateKey);
} catch (error) {
  console.error("Error generating VAPID keys:", error);
}
