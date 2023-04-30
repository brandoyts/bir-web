import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import useToggle from '@/hooks/useToggle';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppMainContent from './components/AppMainContent';

export default function AppLayout({ children }) {
	const [isOpenSidebar, handleOpenSidebar] = useToggle(true);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Header
				isOpenSidebar={isOpenSidebar}
				handleOpenSidebar={handleOpenSidebar}
			/>
			<Sidebar
				isOpenSidebar={isOpenSidebar}
				handleOpenSidebar={handleOpenSidebar}
			/>
			<AppMainContent isOpenSidebar={isOpenSidebar}>{children}</AppMainContent>
		</Box>
	);
}
