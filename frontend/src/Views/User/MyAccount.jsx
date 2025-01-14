import React from 'react'
import axios from "axios";
import { useSelector } from "react-redux";
import { Box } from '@mui/system';

export default function MyAccount() {
      const { user } = useSelector((state) => state.auth);
      
    
  return (
    <>
<Box>

</Box>
    </>
  )
}
