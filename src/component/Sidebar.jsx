import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  ListItemButton,
} from "@mui/material";
import {
  Dashboard,
  AccountCircle,
  ShoppingCart,
  Book,
  Lock,
  DoNotDisturb,
} from "@mui/icons-material";
import { useState } from "react";

const navList = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Dashboard />,
  },
  {
    title: "User",
    path: "/user",
    icon: <AccountCircle />,
  },
  {
    title: "Product",
    path: "/product",
    icon: <ShoppingCart />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <Book />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <Lock />,
  },
  {
    title: "Not Found",
    path: "/notfound",
    icon: <DoNotDisturb />,
  },
];

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    console.log(index);
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "15%",
        margin: 0,
        padding: "20px",
        "box-shadow": "0 0 0.5px",
      }}
    >
      <List>
        <ListItem
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "10px",
            margin: "20px 0",
          }}
        >
          <ListItemIcon>
            <Avatar>J</Avatar>
          </ListItemIcon>
          <ListItemText>Jhon Deo</ListItemText>
        </ListItem>
        {navList.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            href={item.path}
            onClick={() => handleListItemClick(index)}
            sx={{borderRadius: "5px"}}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
