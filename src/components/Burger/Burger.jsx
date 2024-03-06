import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Switch } from "@mui/material";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [isDark, setIsDark] = React.useState(false);

    const dark = () => {
        console.log("dark");
        isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    };

    return (
        <div>
            <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                <MenuIcon style={{ color: "white" }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem className="menuItem" onClick={console.log("fish")}>
                    Dark/Light
                    <Switch onChange={dark} />
                </MenuItem>
            </Menu>
        </div>
    );
}
