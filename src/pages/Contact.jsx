import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MauticForm from "../components/mautic/MauticForm";
import serviceImg from "../assets/img/contact_image.jpg";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const mapContainerStyle = {
  height: "450px", // Slightly larger map container for visual balance
  width: "100%",
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
};

const center = {
  lat: 60.1699,
  lng: 24.9384,
};

const Contact = () => {
  return (
    <Container style={{ padding: "4rem 0", maxWidth: "1200px" }}>
      <Typography
        variant="h4"
        component="h2"
        style={{
          marginBottom: "2rem",
          fontWeight: 700,
          color: "#333",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Get in <span style={{ color: "#d10000" }}>Touch</span>
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{
          marginBottom: "3rem",
          color: "#666",
          textAlign: "center",
          fontSize: "1.1rem",
          lineHeight: "1.6",
        }}
      >
        Any question or remarks? We’d love to hear from you! Please reach out
        via the contact form or use the details below.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box component="form" noValidate autoComplete="off">
            <MauticForm />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{ position: "relative", padding: "20px" }}
        >
          <Box
            style={{
              position: "relative",
              marginTop: "60px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)", // Soft shadow for better depth
            }}
          >
            <MapContainer style={mapContainerStyle} center={center} zoom={15}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center}>
                <Popup>
                  Visit us here! <br /> We're always happy to meet you.
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "3rem",
              backgroundColor: "#fff",
              padding: "20px 50px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#d10000",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://img.icons8.com/material-rounded/24/ffffff/phone.png"
                  alt="phone"
                />
              </Box>
              <Typography
                variant="body1"
                style={{ color: "#333", fontSize: "1.1rem" }}
              >
                +358 20 187 6601 <br />
                (Mon-Fri 9-17)
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Box
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#d10000",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png"
                  alt="email"
                />
              </Box>
              <Typography
                variant="body1"
                style={{ color: "#333", fontSize: "1.1rem" }}
              >
                support@druid.fi
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* New Image with Headline Overlay */}
      <Grid container spacing={0} style={{ marginTop: "4rem" }}>
        <Grid item xs={12}>
          <Box
            style={{
              position: "relative",
              width: "100%",
              height: "400px", // Adjust height as needed
              borderRadius: "30px", // Rounded corners for soft appearance
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            }}
          >
            <img
              src={serviceImg}
              alt="Services"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                filter: "brightness(70%)", // Subtle darkening for better text contrast
              }}
            />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                fontSize: "2.5rem", // Larger font size for emphasis
                fontWeight: "bold", // Bold text for clarity
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)", // Soft shadow for readability
                letterSpacing: "1px", // Slightly increased spacing for elegance
                lineHeight: "1.4", // Line height for better readability
                padding: "0 20px", // Padding for responsiveness
                maxWidth: "80%", // Limiting width for better visual balance
                margin: "0 auto", // Centering the text
              }}
            >
              Have a Look at Our Services
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
