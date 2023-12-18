import { AppBar, Avatar, Stack } from "@mui/material";
import { Search, Notifications } from '@mui/icons-material';


const NavBar = () => {
    return (
        <AppBar sx={{backgroundColor: "rgba(249, 250, 251, 0.8)",width: "82.5%", boxShadow: "none", "backdrop-filter": "blur(6px)", padding: "20px 30px", display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
            <Stack sx={{display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
            <Search sx={{ color: "rgb(99, 115, 129)", width: "30px" }} />
            </Stack>
            <Stack sx={{display: "flex", flexDirection: 'row', gap: "10px", alignItems: "center"}}>
                <Notifications sx={{ color: "rgb(99, 115, 129)", width: "30px" }} />
                <Avatar sx={{width: "30px", height: "30px"}}>J</Avatar>
            </Stack>
        </AppBar>
    )
}

export default NavBar