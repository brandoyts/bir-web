import { DRAWER_WIDTH } from '@/constants';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	background:
		'linear-gradient(90deg,rgba(0, 32, 97, 1) 0%,rgba(54, 97, 184, 1) 100%)',
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: `${DRAWER_WIDTH}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

function Header({ isOpenSidebar, handleOpenSidebar }) {
	return (
		<AppBar position="fixed" open={isOpenSidebar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleOpenSidebar}
					edge="start"
					sx={{ mr: 2, ...(isOpenSidebar && { display: 'none' }) }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div" sx={{ m: 'auto' }}>
					Welcome to RR7B
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
