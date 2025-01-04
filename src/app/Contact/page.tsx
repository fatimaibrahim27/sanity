'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [formStatus, setFormStatus] = useState('');

  const onSubmit = async (data: any) => {
    try {
      console.log(data); // You can replace this with an API call
      setFormStatus('Form submitted successfully!');
      reset();
    } catch (error) {
      setFormStatus('Submission failed. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-6">We'd love to hear from you. Please fill out the form below!</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('name')}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('email')}
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('message')}
            placeholder="Your message"
        
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300">
          Submit
        </button>
        
        {formStatus && <p className="text-center mt-4 text-green-500">{formStatus}</p>}
      </form>
    </div>
  );
};

export default Contact;
