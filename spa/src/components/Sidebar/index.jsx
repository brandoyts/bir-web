import { DRAWER_WIDTH } from '@/constants';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Drawer, IconButton, styled } from '@mui/material';
import SidebarLinks from './components/SidebarLinks';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
	background: 'transparent',
}));

function Sidebar({ isOpenSidebar, handleOpenSidebar }) {
	return (
		<Drawer
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					color: 'white',
					background: 'transparent',
					width: DRAWER_WIDTH,
					boxSizing: 'border-box',
				},
			}}
			variant="persistent"
			anchor="left"
			open={isOpenSidebar}
		>
			<DrawerHeader>
				<IconButton onClick={handleOpenSidebar} sx={{ color: 'white' }}>
					<MenuOpenIcon />
				</IconButton>
			</DrawerHeader>

			<SidebarLinks />
		</Drawer>
	);
}

export default Sidebar;
