import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
import PrescriptionModal from "./components/Popup"; // Corrected import path


 const UserDashboard =() => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  // Mock prescription data
  const prescriptions = [
    {
      id: 1234,
      date: "11/12/2024",
      address: "7C, Sambuddhi Lane, Kottawa",
      notes: "SPC Medicine only",
      status: "Pending",
    },
    {
      id: 5678,
      date: "10/12/2024",
      address: "4A, Flower Road, Colombo 7",
      notes: "Allergy tablets",
      status: "Viewed",
    },
    // Add more prescriptions if needed
  ];

  const handleView = (prescription) => {
    setSelectedPrescription(prescription);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedPrescription(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Upload Section */}
      <Box sx={{ p: 3, border: "1px solid #ddd", borderRadius: 2, mb: 5 }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} sm={4}>
            <Box>
              <TextField
                fullWidth
                sx={{ mb: 2, width: "90%" }}
                label="Delivery Address"
                variant="outlined"
                value="7C, Sambuddhi Lane, Kottawa"
              />
              <TextField
                fullWidth
                sx={{ mb: 2, width: "90%" }}
                label="Notes"
                variant="outlined"
                placeholder="Enter additional notes here"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mt: 2,
                  pl: 5,
                }}
              >
                <Button variant="contained" startIcon={<UploadFileIcon />}>
                  Upload Prescription
                </Button>
              </Box>
              <Typography
                variant="caption"
                display="block"
                color="textSecondary"
                sx={{ mt: 1, pl: 8 }}
              >
                You can upload up to 5 images
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3} justifyContent="flex-start">
              {[...Array(5)].map((_, index) => (
                <Grid item xs="auto" key={index}>
                  <Card sx={{ position: "relative", width: 120, height: 120 }}>
                    <CardMedia
                      component="img"
                      height="120"
                      image="https://via.placeholder.com/120"
                      alt="Prescription"
                    />
                    <IconButton
                      size="small"
                      sx={{ position: "absolute", top: 4, right: 4 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Prescription History */}
      <Typography variant="h5" gutterBottom>
        Prescription History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prescription</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Note</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prescriptions.map((prescription) => (
              <TableRow key={prescription.id}>
                <TableCell>{prescription.id}</TableCell>
                <TableCell>{prescription.date}</TableCell>
                <TableCell>{prescription.notes}</TableCell>
                <TableCell>{prescription.address}</TableCell>
                <TableCell>
                  <Chip
                    label={prescription.status}
                    color={
                      prescription.status === "Pending" ? "warning" : "success"
                    }
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleView(prescription)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Prescription Modal */}
      {selectedPrescription && (
        <PrescriptionModal
          open={modalOpen}
          onClose={handleClose}
          prescriptionData={selectedPrescription}
        />
      )}
    </Container>
  );

}
export default UserDashboard;