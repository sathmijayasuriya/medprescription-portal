import React, { useState, useEffect } from "react";
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
import PrescriptionModal from "./components/Popup";
import { useSelector } from "react-redux";
import axios from "axios";

const UserDashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [images, setImages] = useState([]);

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/prescriptions/by-user/${user.userId}`
      );
      setPrescriptions(response.data);
    } catch (error) {
      console.error("Error fetching prescriptions:", error);
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const handleView = (prescription) => {
    setSelectedPrescription(prescription);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedPrescription(null);
  };

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    const validFiles = selectedFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds 5MB limit.`);
        return false;
      }
      if (!file.type.startsWith("image/")) {
        alert(`File ${file.name} is not an image.`);
        return false;
      }
      return true;
    });

    if (images.length + validFiles.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    setImages((prevImages) => [...prevImages, ...validFiles]);
  };

  const handleRemoveImage = (fileToRemove) => {
    setImages(images.filter((file) => file !== fileToRemove));
  };

  const handleSubmitPrescription = async () => {
    if (!address || !notes || images.length === 0) {
      alert("Please fill in the delivery address, notes, and upload at least one image.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", user.userId);
    formData.append("note", notes);
    formData.append("deliveryAddress", address);

    images.forEach((file) => {
      formData.append("imagePaths", file);
    });

    try {
      await axios.post(
        "http://localhost:8080/api/prescriptions/addPrescription",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Prescription added successfully!");
      setAddress("");
      setNotes("");
      setImages([]);
      fetchPrescriptions();
    } catch (error) {
      alert("Error adding prescription. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, minHeight: "auto" }}>
      <Box sx={{ p: 3, border: "1px solid #ddd", borderRadius: 2, mb: 5 }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              sx={{ mb: 2, width: "90%" }}
              label="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mb: 2, width: "90%" }}
              label="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <Box sx={{ display: "flex", alignItems: "center", mt: 2, pl: 5 }}>
              <Button variant="contained" startIcon={<UploadFileIcon />} component="label">
                Choose Files
                <input type="file" accept="image/*" hidden multiple onChange={handleImageUpload} />
              </Button>
            </Box>
            <Typography variant="caption" display="block" color="textSecondary" sx={{ mt: 1, pl: 8 }}>
              You can upload up to 5 images
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3} justifyContent="flex-start">
              {images.map((file, index) => (
                <Grid item xs="auto" key={index}>
                  <Card sx={{ position: "relative", width: 120, height: 120 }}>
                    <CardMedia component="img" height="120" image={URL.createObjectURL(file)} />
                    <IconButton
                      size="small"
                      sx={{ position: "absolute", top: 4, right: 4 }}
                      onClick={() => handleRemoveImage(file)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSubmitPrescription}>
            Submit Prescription
          </Button>
        </Box>
      </Box>

      <Typography variant="h5" gutterBottom>
        Prescription History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prescription ID</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Note</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prescriptions.map((prescription) => (
              <TableRow key={prescription.prescriptionId}>
                <TableCell>{prescription.prescriptionId}</TableCell>
                <TableCell>{prescription.deliveryAddress}</TableCell>
                <TableCell>{prescription.note}</TableCell>
                <TableCell>
                  <Chip
                    label={prescription.status}
                    color={prescription.status === "Pending" ? "warning" : "success"}
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleView(prescription)}>
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

      {selectedPrescription && (
        <PrescriptionModal
          open={modalOpen}
          onClose={handleClose}
          prescriptionData={selectedPrescription}
        />
      )}
    </Container>
  );
};

export default UserDashboard;
