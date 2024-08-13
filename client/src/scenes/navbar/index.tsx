import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart"; 

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 1rem" color={palette.grey[300]} sx={{ borderBottom: `1px solid ${palette.grey[600]}` }}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "40px" }} /> 
        <Typography variant="h2" fontSize="25px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: selected === "dashboard" ? `2px solid ${palette.primary[100]}` : 'none',
            paddingBottom: '0.5rem',
            '&:hover': { color: palette.primary[100] }
          }}
        >
          <DashboardIcon sx={{ fontSize: "25px", mr: "0.5rem" }} />
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? palette.primary[100] : palette.grey[700],
              textDecoration: "none",
            }}
          >
                <Typography variant="h5" fontSize="18px">
          Dashboard
        </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: selected === "predictions" ? `2px solid ${palette.primary[100]}` : 'none',
            paddingBottom: '0.5rem',
            '&:hover': { color: palette.primary[100] }
          }}
        >
          <BarChartIcon sx={{ fontSize: "25px", mr: "0.5rem" }} />
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? palette.primary[100] : palette.grey[700],
              textDecoration: "none",
            }}
          >
             <Typography variant="h5" fontSize="18px">
          Predictions
        </Typography>
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
