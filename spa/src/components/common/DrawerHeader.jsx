import { styled } from '@mui/material';

const StyledDrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
	background: 'transparent',
}));

function DrawerHeader() {
	return <StyledDrawerHeader />;
}

export default DrawerHeader;
