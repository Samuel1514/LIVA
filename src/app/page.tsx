import Image from "next/image";

export default function Home() {
  return (
  <> 
    {/* <!-- Hero Section --> */}
<section className="hero">
    <div className="hero-content">
        <h1>WELCOME TO LIVA</h1>
        <p>Your one-stop for loneliness</p>
        <a href="product.html" className="cta-button">Let's Get Started</a>
    </div>
</section>

{/* <!-- Products Section --> */}
<section className="products" >
    <h2>Our Features</h2>
    <div className="product-grid">
        {/* <!-- Product 1: Avatar Interaction --> */}
        <div className="product-item">
            <img src="https://imgcdn.stablediffusionweb.com/2024/4/3/b4e9654b-5102-4b9c-be84-6bb272800c1e.jpg" alt="Avatar Interaction"/>
            <h3>Avatar Interaction</h3>
            <p>Engage with our friendly avatar for companionship.</p>
        </div>

        {/* <!-- Product 2: Meal Reminder --> */}
        <div className="product-item">
            <img src="https://play-lh.googleusercontent.com/rjQZrP52Gf6PD-W3cUwMHqPnA1mhFt6gMqWl3NidTQS3X70PsM991rv_QNIDXQiX-mY" alt="Meal Reminder"/>
            <h3>Meal Reminder</h3>
            <p>Receive timely reminders for your meals to stay healthy.</p>
        </div>

         {/* <!-- Product 3: Medicine Reminder --> */}
         <div className="product-item">
            <img src="https://media.istockphoto.com/id/1351305343/vector/take-a-course-of-medicines.jpg?s=612x612&w=0&k=20&c=-3Iym_XKdeB0bnF5by4CqfAR8arGP1zjlHxNz-vNBe8=" alt="Medical Reminder"/>
            <h3>Medicine Reminder</h3>
            <p>Stay on track with reminders for doctor appointments.</p>
        </div>

        {/* <!-- Product 4: Medical Assistance --> */}
        <div className="product-item">
            <img src="https://media.istockphoto.com/id/1432338987/photo/nurse-or-doctor-give-man-support-during-recovery-or-loss-caregiver-holding-hand-of-her-sad.jpg?s=612x612&w=0&k=20&c=LBiOrZlSdmYK4kYNJ2aoqIa5aHH2JPlcz6kOkRFVFoo=" alt="Medical Assistance"/>
            <h3>Medical Assistance</h3>
            <p>Get reminders for your medications and medical checkups.</p>
        </div>
       
        {/* <!-- Product 5: Exercise Tracker --> */}
        <div className="product-item">
            <img src="https://www.shutterstock.com/image-vector/smiling-grandparents-doing-morning-exercises-600nw-2314906171.jpg" alt="Exercise Suggestion"/>
            <h3>Exercise Suggestion</h3>
            <p>Keep track of your daily exercise routines and goals.</p>
        </div>
        {/* <!-- Product 6: Health Tips --> */}
        <div className="product-item">
            <img src="https://instafitness.in/wp-content/uploads/2020/01/health-tips-for-your-30s.jpg" alt="Health Tips"/>
            <h3>Health Tips</h3>
            <p>Receive daily tips on maintaining a healthy lifestyle.</p>
        </div>
        {/* <!-- Product 7: Sleep Tracker --> */}
        <div className="product-item">
            <img src="https://www.sleepcycle.com/wp-content/uploads/2021/11/track-sleep-1-1920x1270.jpg" alt="Sleep Tracker"/>
            <h3>Sleep Tracker</h3>
            <p>Monitor your sleep patterns and improve your sleep quality.</p>
        </div>
        {/* <!-- Product 8: Mood Tracker --> */}
        <div className="product-item">
            <img src="https://media.istockphoto.com/id/1435560155/photo/caregiver-talking-with-his-client-at-cafe-having-nice-time-together.jpg?s=612x612&w=0&k=20&c=_WPag90GT9uSmLRSJhM3ZoJvMyRABNRK312eS-3ekR0=" alt="Mood Tracker"/>
            <h3>Mood Tracker</h3>
            <p>Track your moods and mental well-being over time.</p>
        </div>
    </div>
</section>


{/* <!-- Secondary Banner Section --> */}
<section className="secondary-banner">
    <div className="banner-content">
        <h2>Your life, Our matter</h2>
    </div>
</section>

{/* <!-- Footer Section --> */}
<footer className="footer">
    <div className="footer-content">
        <div className="footer-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="#services">Services</a>
            <a href="golden ai pro.html">LIVA Pro</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/facebook--v1.png" alt="Facebook"/></a>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 LIVA. All rights reserved.</p>
    </div>
</footer>
</>

  );
}
