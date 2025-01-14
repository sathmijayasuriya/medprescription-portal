import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/features/auth/authSlice";

export default function AccountMenuPharmacy() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login"); // Redirect to login page after logout
  };

  const { pharmacy } = useSelector((state) => state.auth); // Assuming "pharmacy" is stored in Redux
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt={pharmacy?.name}
              src={pharmacy?.logoURL}
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* Pharmacy-specific menu items */}
        <MenuItem component={Link} to={"/dashboard"}>
          Dashboard
        </MenuItem>
        <MenuItem component={Link} to={"/quotations"}>
          Quotations
        </MenuItem>
        <MenuItem component={Link} to={"/pharmacists/manage"}>
          Manage Pharmacists
        </MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={(e) => onClickLogOut(e)}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
