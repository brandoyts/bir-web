import useToggle from '@/hooks/useToggle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

export default function SidebarLinks() {
	const [isOpenSubLink, handleOpenSubLink] = useToggle(false);

	const handleClick = () => {
		handleOpenSubLink();
	};

	return (
		<List
			sx={{ width: '100%', maxWidth: 360 }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			// subheader={
			// 	<ListSubheader
			// 		component="div"
			// 		id="nested-list-subheader"
			// 		sx={{
			// 			background: 'transparent',
			// 			p: '26px',
			// 		}}
			// 	>
			// 		<Avatar sx={{ width: 56, height: 56 }}>B</Avatar>
			// 	</ListSubheader>
			// }
		>
			<ListItemButton
				component={Link}
				href="/dashboard"
				sx={{ color: 'white' }}
			>
				<ListItemIcon>
					<DashboardIcon sx={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<AssignmentIndIcon sx={{ color: 'white' }} />
				</ListItemIcon>
				<ListItemText primary="Personal Profile" />
				{isOpenSubLink ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={isOpenSubLink} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton
						sx={{ pl: 4 }}
						component={Link}
						href="/employee/personal-info"
					>
						<ListItemIcon>
							<StarBorder sx={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary="Personal Info" />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
