import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mx-4 mb-8">
      <p className="text-gray-700 mb-4">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
    
  const testimonials = [
    {
      text: "This platform has greatly improved our team's productivity!",
      name: "Showkat Ali Chowdhury",
      position: "Software Developer",
      avatar: "https://www.ebl.com.bd/assets/aboutus/directors/1__Md__Showkat_Ali_Chowdhury.jpg",
    },
    {
      text: "Amazing tool! It has streamlined our task management process.",
      name: "Ghaziul Haque",
      position: "Project Manager",
      avatar: "https://www.ebl.com.bd/assets/aboutus/directors/2__M__Ghaziul_Haque.jpg",
    },
    {
        text: "Great experience using this platform. It's intuitive and user-friendly.",
        name: "Anis Ahmed        ",
        position: "Marketing Specialist",
        avatar: "https://www.ebl.com.bd/assets/aboutus/directors/11__Ali_Reza_Iftekhar.jpg",
      },
  
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
