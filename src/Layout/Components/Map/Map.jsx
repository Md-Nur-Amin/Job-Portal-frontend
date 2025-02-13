import React from "react";

const Map = () => {
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.505460113405!2d90.41251821536205!3d23.81033159010179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89b5c4b5c2b%3A0x72d60a5d4bb0a3d1!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1644969336421!5m2!1sen!2sbd"
            ></iframe>
        </div>
    );
};

export default Map;
