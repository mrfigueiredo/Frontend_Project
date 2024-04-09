import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";

const ModalForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.comments
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!/^\d+$/.test(formData.phone)) {
      setErrorMessage("Phone field should only contain numbers");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    setSuccessMessage("Message sent successfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="estateForm">
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Comments</FormLabel>
          <Input
            type="text"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit" mt={4}>
          Contact Now
        </Button>
      </form>
      {errorMessage && (
        <Text color="red" mt={4}>
          {errorMessage}
        </Text>
      )}
      {successMessage && (
        <Text color="green" mt={4}>
          {successMessage}
        </Text>
      )}
    </>
  );
};

export default ModalForm;
