import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  IconButton,
  Tab,
  Box,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Tab Panel component
const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const PrescriptionModal = ({ open, onClose, prescriptionData }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  //image url
    // Helper to generate full image URLs
    const getImageUrl = (path) => {
      const BASE_URL = "http://localhost:8080"; // Replace with your backend URL
      return `${BASE_URL}${path.replace(/^\.\\/, "/")}`; // Replace `.\` with `/` for proper pathing
    };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {`Prescription ${prescriptionData.prescriptionId}`}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="tabs">
          <Tab label="Basic Information" />
          <Tab label="Quotations" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Images</Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                {prescriptionData.imagePaths && prescriptionData.imagePaths.length > 0 ? (
                  prescriptionData.imagePaths.map((path, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 100,
                        height: 100,
                        border: "1px solid #ccc",
                        borderRadius: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={getImageUrl(path)}
                        alt={`Prescription Image ${index + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  ))
                ) : (
                  <Typography>No images available.</Typography>
                )}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={prescriptionData.deliveryAddress}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                value={prescriptionData.note}
                InputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Drug</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>Lorem Ipsum</TableCell>
                  <TableCell>10.00 * 5</TableCell>
                  <TableCell>50.00</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} align="right">
                  <Typography variant="subtitle1">Total</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">150.00</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
            <Button variant="contained" color="error">
              Reject
            </Button>
            <Button variant="contained" color="success">
              Accept
            </Button>
          </Box>
        </TabPanel>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrescriptionModal;
