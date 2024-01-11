"use client";

import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import useForm from "./useForm";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MutationData {
  data: {
    message: string;
  };
}

export const ContactForm = () => {
  const [showSuccessAlert, setSuccessAlert] = useState<boolean>(false);
  const [showErrorAlert, setErrorAlert] = useState<boolean>(false);
  const [value, handleValue] = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const resetFormData = () => {
    value.name = "";
    value.email = "";
    value.subject = "";
    value.message = "";
  };

  const mutation = useMutation<MutationData, Error, FormValues>({
    mutationFn: (formData) => {
      return axios.post("/api/contact", formData);
    },
    onSuccess: async (data) => {
      setSuccessAlert(true);

      resetFormData();

      await setTimeout(() => {
        setSuccessAlert(false);
      }, 5000);
    },

    onError: async (error) => {
      setErrorAlert(true);
      resetFormData();
      await setTimeout(() => {
        setErrorAlert(false), 5000;
      });
    },
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    mutation.mutateAsync({
      name: value.name,
      email: value.email,
      subject: value.subject,
      message: value.message,
    });
  };

  return (
    <div className="mx-auto max-w-2xl py-12 px-4">
      <h1 className="font-bold text-4xl text-center mb-2">Contact Me</h1>
      <p className="font-light text-lg mb-8 text-center">
        Code and Create: Transforming Ideas into Dynamic Web Solutions.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-2"
            value={value.name}
            onChange={handleValue}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-2"
            value={value.email}
            onChange={handleValue}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-lg font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Your Subject"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-2"
            value={value.subject}
            onChange={handleValue}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium">
            Message
          </label>
          <textarea
            rows={6}
            name="message"
            id="message"
            placeholder="Your message"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-2"
            value={value.message}
            onChange={handleValue}
            required
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-orange-600 py-2 px-4 rounded-full font-bold text-white hover:bg-orange-700 shadow-lg disabled:opacity-25 mb-2"
        >
          {mutation.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
      {showSuccessAlert && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
          role="alert"
        >
          {mutation.data?.data.message}
        </div>
      )}

      {showErrorAlert && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          {mutation.data?.data.message}
        </div>
      )}
    </div>
  );
};
