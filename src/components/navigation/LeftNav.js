import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

function LeftNav() {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText> Product </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default LeftNav;
