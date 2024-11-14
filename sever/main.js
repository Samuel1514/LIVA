// public/main.js

const publicVapidKey = 'BDxhkS6Jux-zkdSbAtKiCOmpOIOruqJJp0cPbZC8KZadbCEic3iYSPrJZEFAySfWzEDcwBK1IKYi9BcfrlqDUQo'; // Use your public key here

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);

    // Request user permission for notifications
    return Notification.requestPermission();
  }).then(permission => {
    if (permission === 'granted') {
      subscribeUserToPush();
    }
  }).catch(error => {
    console.error('Service Worker registration or permission error:', error);
  });
}

// Subscribe user to push notifications
function subscribeUserToPush() {
  navigator.serviceWorker.ready.then(async registration => {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    // Send subscription to the server
    await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('User subscribed to push notifications');
  });
}

// Utility function to convert VAPID key to Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}
