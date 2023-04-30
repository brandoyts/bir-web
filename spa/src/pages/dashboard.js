import AppLayout from '@/components/Layouts/AppLayout';
import useAuth from '@/hooks/useAuth';

function Dashboard() {
	const { logout } = useAuth({ middleware: 'auth' });
	return (
		<AppLayout>
			<h1>Dashboard</h1>
			<button onClick={logout}>Logout</button>
		</AppLayout>
	);
}

export default Dashboard;
