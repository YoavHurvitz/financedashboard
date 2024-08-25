import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { title: "Predictions", icon: <BarChartIcon />, path: "/predictions" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Finanseer
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <Link
              to={item.path}
              onClick={() => setSelected(item.title.toLowerCase())}
              style={{
                color: selected === item.title.toLowerCase() ? palette.primary[100] : palette.grey[700],
                textDecoration: "none",
                width: '100%',
              }}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 1rem" color={palette.grey[300]} sx={{ borderBottom: `1px solid ${palette.grey[600]}` }}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="20px" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Finanseer
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      {isNonMobile ? (
        <FlexBetween gap="2rem">
          {navItems.map((item) => (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: selected === item.title.toLowerCase() ? `2px solid ${palette.primary[100]}` : 'none',
                paddingBottom: '0.5rem',
                '&:hover': { color: palette.primary[100] }
              }}
            >
              {item.icon}
              <Link
                to={item.path}
                onClick={() => setSelected(item.title.toLowerCase())}
                style={{
                  color: selected === item.title.toLowerCase() ? palette.primary[100] : palette.grey[700],
                  textDecoration: "none",
                  marginLeft: '0.5rem',
                }}
              >
                <Typography variant="h6" fontSize="16px">
                  {item.title}
                </Typography>
              </Link>
            </Box>
          ))}
        </FlexBetween>
      ) : (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </FlexBetween>
  );
};

export default Navbar;