import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Dashboard = () => {
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showQuotation, setShowQuotation] = useState(false);

  // Mock prescription data
  const prescriptions = [
    {
      id: 1234,
      name: "Sathmi",
      date: "11/12/2024",
      address: "7C, Sambuddhi Lane, Kottawa",
      notes: "SPC Medicine only",
      status: "Pending",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      drugs: [
        { name: "Drug A", quantity: 5, price: 10 },
        { name: "Drug B", quantity: 3, price: 15 },
        { name: "Drug C", quantity: 2, price: 20 },
      ],
    },
    {
      id: 5678,
      name: "Sathmi",
      date: "10/12/2024",
      address: "4A, Flower Road, Colombo 7",
      notes: "Allergy tablets",
      status: "Viewed",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
      drugs: [
        { name: "Drug X", quantity: 10, price: 5 },
        { name: "Drug Y", quantity: 4, price: 12 },
      ],
    },
  ];

  const handleView = (prescription) => {
    setSelectedPrescription(prescription);
  };

  const handleClose = () => {
    setSelectedPrescription(null);
  };

  const handleKeepPending = () => {
    alert("Status kept as Pending");
    handleClose();
  };

  const handleSetAsViewed = () => {
    alert("Status set as Viewed");
    handleClose();
  };

  const handleViewQuotation = (prescription) => {
    setSelectedPrescription(prescription);
    setShowQuotation(true);
  };

  const handleCloseQuotation = () => {
    setShowQuotation(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Prescription History */}
      <Typography variant="h5" gutterBottom>
        Prescription History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Prescription</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Note</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Quotation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prescriptions.map((prescription) => (
              <TableRow key={prescription.id}>
                <TableCell>{prescription.name}</TableCell>
                <TableCell>{prescription.id}</TableCell>
                <TableCell>{prescription.date}</TableCell>
                <TableCell>{prescription.notes}</TableCell>
                <TableCell>{prescription.address}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleView(prescription)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleViewQuotation(prescription)}
                    sx={{ mr: 1 }}
                  >
                    View Quotation
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      alert(
                        `Sending quotation for prescription ID: ${prescription.id}`
                      )
                    }
                  >
                    Send Quotation
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Prescription Details Modal */}
      {selectedPrescription && (
        <Dialog
          open={!!selectedPrescription}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Prescription Details</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Prescription ID"
              value={selectedPrescription.id}
              InputProps={{ readOnly: true }}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Date"
              value={selectedPrescription.date}
              InputProps={{ readOnly: true }}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Address"
              value={selectedPrescription.address}
              InputProps={{ readOnly: true }}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Notes"
              value={selectedPrescription.notes}
              InputProps={{ readOnly: true }}
              margin="dense"
            />
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Images
            </Typography>
            <Grid container spacing={2}>
              {selectedPrescription.images.map((image, index) => (
                <Grid item xs={4} key={index}>
                  <img
                    src={image}
                    alt={`Prescription ${index + 1}`}
                    style={{ width: "100%" }}
                  />
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleKeepPending}
              variant="outlined"
              color="primary"
            >
              Keep Pending and Exit
            </Button>
            <Button
              onClick={handleSetAsViewed}
              variant="contained"
              color="secondary"
            >
              Set as Viewed and Continue
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Quotation Popup
      {showQuotation && selectedPrescription && (
        <Dialog
          open={showQuotation}
          onClose={handleCloseQuotation}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Quotation for Prescription {selectedPrescription.id}
          </DialogTitle>
          <DialogContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Drug</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedPrescription.drugs.map((drug, index) => (
                    <TableRow key={index}>
                      <TableCell>{drug.name}</TableCell>
                      <TableCell>{drug.quantity}</TableCell>
                      <TableCell>{drug.price * drug.quantity}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2} align="right">
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell>
                      <strong>
                        {selectedPrescription.drugs.reduce(
                          (total, drug) => total + drug.price * drug.quantity,
                          0
                        )}
                      </strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseQuotation}
              variant="contained"
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )} */}
    </Container>
  );
};

export default Dashboard;
