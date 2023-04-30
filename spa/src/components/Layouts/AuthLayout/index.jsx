import styles from '@/styles/AuthLayout.module.css';
import Image from 'next/image';

const imageStyle = {
	width: '100%',
	height: '140px',
	objectFit: 'contain',
	marginBottom: '24px',
};

function AuthLayout({ children }) {
	return (
		<div className={styles.authLayout}>
			<Image
				priority={true}
				src="/assets/images/app_logo.png"
				width={300}
				height={120}
				alt="profile"
				style={imageStyle}
			/>
			{children}
		</div>
	);
}

export default AuthLayout;
