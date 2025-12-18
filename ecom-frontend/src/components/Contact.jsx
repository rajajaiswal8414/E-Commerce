import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Added icons for contact info

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Added subject for professional contact
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-slate-800">
        <span className="pb-2 border-b-2 border-indigo-600 inline-block">
          Contact Our Team
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* ==================== 1. CONTACT INFO COLUMN ==================== */}
        <div className="w-full lg:w-1/3 p-8 bg-indigo-50 rounded-xl shadow-lg h-fit">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you have a question about an order, need technical support,
            or just want to leave feedback, we're here to help!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <FiPhone
                className="text-indigo-600 mt-1 mr-3 shrink-0"
                size={24}
              />
              <div>
                <h3 className="text-lg font-semibold text-indigo-700">
                  Phone Support
                </h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9am - 5pm EST</p>
              </div>
            </div>

            <div className="flex items-start">
              <FiMail
                className="text-indigo-600 mt-1 mr-3 shrink-0"
                size={24}
              />
              <div>
                <h3 className="text-lg font-semibold text-indigo-700">
                  Email Us
                </h3>
                <p className="text-gray-700">support@eshop.com</p>
                <p className="text-sm text-gray-500">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FiMapPin
                className="text-indigo-600 mt-1 mr-3 shrink-0"
                size={24}
              />
              <div>
                <h3 className="text-lg font-semibold text-indigo-700">
                  Visit Our Office
                </h3>
                <p className="text-gray-700">123 E-Shop Drive, Suite 100</p>
                <p className="text-gray-700">Commerce City, CA 90001</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 2. CONTACT FORM COLUMN ==================== */}
        <div className="w-full lg:w-2/3 p-8 bg-white shadow-2xl rounded-xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-3">
            Send Us A Message
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Name */}
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Email */}
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md 
                         text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
