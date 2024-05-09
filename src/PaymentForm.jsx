import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  // Add state variables for billing address if needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment information here (using a payment gateway library)
    console.log('Payment details:', { cardNumber, expiryDate, cvv });
    // After processing, reset the form or redirect to success page
  };

  return (
    <Flex flexDir="column" gap="4">
      <FormControl>
        <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
        <Input id="cardNumber" type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </FormControl>
      <FormControl display="flex" gap="2">
        <Box w="50%">
          <FormLabel htmlFor="expiryDate">Expiry Date</FormLabel>
          <Input id="expiryDate" type="month" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="cvv">CVV</FormLabel>
          <Input id="cvv" type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </Box>
      </FormControl>
      {/* Add form controls for billing address if needed */}
      <Button type="submit" onClick={handleSubmit}>Pay Now</Button>
    </Flex>
  );
}

export default PaymentForm;
