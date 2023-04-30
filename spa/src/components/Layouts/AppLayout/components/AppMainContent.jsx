import DrawerHeader from '@/components/common/DrawerHeader';
import { DRAWER_WIDTH } from '@/constants';
const { styled } = require('@mui/material');

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		minHeight: '100vh',
		flexGrow: 1,
		padding: theme.spacing(8),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		background: 'white',
		marginLeft: `-${DRAWER_WIDTH}px`,

		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

function AppMainContent({ isOpenSidebar, children }) {
	return (
		<Main open={isOpenSidebar}>
			<DrawerHeader />
			{children}
		</Main>
	);
}

export default AppMainContent;
