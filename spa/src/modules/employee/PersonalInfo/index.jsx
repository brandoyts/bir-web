import SendIcon from '@mui/icons-material/Send';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useRef, useState } from 'react';

function PersonalInfo() {
	const onInitialMount = useRef(true);
	const [suffix, setSuffix] = useState('');
	const [sex, setSex] = useState('');
	const [age, setAge] = useState();
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [placeOfBirth, setPlaceOfBirth] = useState('');
	const [civilStatus, setCivilStatus] = useState('');
	const [religion, setReligion] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [bloodType, setBloodType] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [citizenship, setCitizenship] = useState('');
	const [residentialAddress, setResidentialAddress] = useState('');
	const [permanentAddress, setPermanentAddress] = useState('');
	const [image, setImage] = useState();

	const handleImageChange = (e) => {
		console.log(e.target.files);
		setImage(URL.createObjectURL(e.target.files[0]));
	};

	const handlePermanentAddressChange = (e) => {
		setPermanentAddress(e.target.value);
	};

	const handleResidentialAddressChange = (e) => {
		setResidentialAddress(e.target.value);
	};

	const handleCitizenshipChange = (e) => {
		setCitizenship(e.target.value);
	};

	const handleContactNumberChange = (e) => {
		setContactNumber(e.target.value);
	};

	const handleBloodTypeChange = (e) => {
		setBloodType(e.target.value);
	};

	const handleHeightChange = (e) => {
		setHeight(e.target.value);
	};

	const handleWeightChange = (e) => {
		setWeight(e.target.value);
	};

	const handleSuffixChange = (event) => {
		setSuffix(event.target.value);
	};

	const handleSexChange = (event) => {
		setSex(event.target.value);
	};

	const handleAgeChange = (e) => {
		// const regex = /^[0-9\b]+$/;
		// if (e.target.value === '' || regex.test(e.target.value)) {
		// }
		setAge(e.target.value);
	};

	const handlePlaceOfBirthChange = (e) => {
		setPlaceOfBirth(e.target.value);
	};

	const handleCivilStatusChange = (e) => {
		setCivilStatus(e.target.value);
	};

	const handleReligionChange = (e) => {
		setReligion(e.target.value);
	};

	return (
		<Card>
			<Typography variant="h6" component="div" sx={{ textAlign: 'left', p: 2 }}>
				Personal Information
			</Typography>
			<Divider />
			<CardContent>
				<Grid
					component={'form'}
					container
					spacing={12}
					direction={{ md: 'column', lg: 'row' }}
					justifyContent="center"
					alignItems="center"
				>
					<Grid container item spacing={3} sm={12} lg={8}>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<TextField
									fullWidth
									id="employee_number"
									label="EMPLOYEE NO."
									variant="outlined"
								/>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<TextField
									fullWidth
									id="last_name"
									label="SURNAME"
									variant="outlined"
									required
								/>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<TextField
									fullWidth
									id="first_name"
									label="FIRST NAME"
									variant="outlined"
									required
								/>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<TextField
									fullWidth
									id="middle_name"
									label="MIDDLE NAME"
									variant="outlined"
									required
								/>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<InputLabel id="suffix-label">SUFFIX</InputLabel>
									<Select
										labelId="suffix-select-label"
										id="suffix"
										value={suffix}
										label="SUFFIX"
										onChange={handleSuffixChange}
									>
										<MenuItem value={''} selected>
											none
										</MenuItem>
										<MenuItem value={'Jr'}>Jr</MenuItem>
										<MenuItem value={'Sr'}>Sr</MenuItem>
										<MenuItem value={'I'}>I</MenuItem>
										<MenuItem value={'II'}>II</MenuItem>
										<MenuItem value={'III'}>III</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="sex-label">SEX</InputLabel>
									<Select
										labelId="sex-select-label"
										id="sex"
										value={sex}
										label="SEX"
										onChange={handleSexChange}
									>
										<MenuItem value={'M'}>Male</MenuItem>
										<MenuItem value={'F'}>Female</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>

						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="age"
										label="AGE"
										variant="outlined"
										required
										onChange={(e) => handleAgeChange(e)}
										defaultValue={age}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											required
											disableFuture
											disableHighlightToday
											format="YYYY-MM-DD"
											label="Date of Birth"
											value={dateOfBirth}
											onChange={(newValue) => setDateOfBirth(newValue)}
										/>
									</LocalizationProvider>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="place-of-birth"
										label="PLACE OF BIRTH"
										variant="outlined"
										required
										onChange={(e) => handlePlaceOfBirthChange(e)}
										defaultValue={placeOfBirth}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="civil-status-label">CIVIL STATUS</InputLabel>
									<Select
										labelId="civil-status-select-label"
										id="civil-status"
										value={civilStatus}
										label="CIVIL STATUS"
										onChange={handleCivilStatusChange}
									>
										<MenuItem value={'Single'}>Single</MenuItem>
										<MenuItem value={'Married'}>Married</MenuItem>
										<MenuItem value={'Seperated'}>Seperated</MenuItem>
										<MenuItem value={'Widowed'}>Widowed</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="religion-label">RELIGION</InputLabel>
									<Select
										labelId="religion-select-label"
										id="religion"
										value={religion}
										label="CIVIL STATUS"
										onChange={handleReligionChange}
									>
										<MenuItem value={'Catholic'}>Catholic</MenuItem>
										<MenuItem value={'Christian'}>Christian</MenuItem>
										<MenuItem value={'Islam'}>Islam</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="height"
										label="HEIGHT (M)"
										variant="outlined"
										required
										onChange={(e) => handleHeightChange(e)}
										defaultValue={height}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="weight"
										label="WEIGHT (KG)"
										variant="outlined"
										required
										onChange={(e) => handleWeightChange(e)}
										defaultValue={weight}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="blood-type-label">BLOOD TYPE</InputLabel>
									<Select
										labelId="blood-type-select-label"
										id="blood-type"
										value={bloodType}
										label="BLOOD TYPE"
										onChange={handleBloodTypeChange}
									>
										<MenuItem value={'O'}>O</MenuItem>
										<MenuItem value={'A'}>A</MenuItem>
										<MenuItem value={'B'}>B</MenuItem>
										<MenuItem value={'AB'}>AB</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="contact_number"
										label="CONTACT NUMBER"
										variant="outlined"
										required
										onChange={(e) => handleContactNumberChange(e)}
										defaultValue={contactNumber}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="citizenship-label">CITIZENSHIP</InputLabel>
									<Select
										labelId="citizenship-select-label"
										id="citizenship"
										value={citizenship}
										label="BLOOD TYPE"
										onChange={handleCitizenshipChange}
									>
										<MenuItem value={'FILIPINO'}>Filipino</MenuItem>
										<MenuItem value={'C1'}>C1</MenuItem>
										<MenuItem value={'C2'}>C2</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="residential_address"
										label="RESIDENTIAL ADDRESS"
										variant="outlined"
										required
										onChange={(e) => handleResidentialAddressChange(e)}
										defaultValue={residentialAddress}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="permanent_address"
										label="PERMANENT ADDRESS"
										variant="outlined"
										required
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											disableFuture
											disableHighlightToday
											format="YYYY-MM-DD"
											label="DATE ENTERED BIR"
											value={dateOfBirth}
											onChange={(newValue) => setDateOfBirth(newValue)}
										/>
									</LocalizationProvider>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											disableFuture
											disableHighlightToday
											format="YYYY-MM-DD"
											label="DATE ASSIGNED IN WORK UNIT"
											value={dateOfBirth}
											onChange={(newValue) => setDateOfBirth(newValue)}
										/>
									</LocalizationProvider>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											disableFuture
											disableHighlightToday
											format="YYYY-MM-DD"
											label="DATE LAST PROMOTED"
											value={dateOfBirth}
											onChange={(newValue) => setDateOfBirth(newValue)}
										/>
									</LocalizationProvider>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<TextField
									fullWidth
									id="tin"
									label="TIN NO."
									variant="outlined"
									onChange={(e) => handlePermanentAddressChange(e)}
									defaultValue={permanentAddress}
								/>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="gsis"
										label="BSIS BP NO."
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="pagibig"
										label="PAG-IBIG NO."
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="philhealth"
										label="PHILHEALTH NO."
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="sss"
										label="SSS NO."
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="landbank"
										label="LANDBANK PAYROLL ACCOUNT"
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="current-office-label">
										CURRENT OFFICE ASSIGNMENT
									</InputLabel>
									<Select
										labelId="current-office-select-label"
										id="current-office"
										value={bloodType}
										label="BLOOD TYPE"
										onChange={handleBloodTypeChange}
									>
										<MenuItem value={'O'}>O</MenuItem>
										<MenuItem value={'A'}>A</MenuItem>
										<MenuItem value={'B'}>B</MenuItem>
										<MenuItem value={'AB'}>AB</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="bir_email"
										label="BIR EMAIL ADDRESS"
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<TextField
										id="alternative_email"
										label="ALTERNATIVE EMAIL ADDRESS"
										variant="outlined"
										onChange={(e) => handlePermanentAddressChange(e)}
										defaultValue={permanentAddress}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container item spacing={3} direction="row">
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<InputLabel id="position">POSTION</InputLabel>
									<Select
										labelId="position-label"
										id="position"
										value={suffix}
										label="POSITION "
										onChange={handleSuffixChange}
									>
										<MenuItem value={''} selected>
											none
										</MenuItem>
										<MenuItem value={'Jr'}>Jr</MenuItem>
										<MenuItem value={'Sr'}>Sr</MenuItem>
										<MenuItem value={'I'}>I</MenuItem>
										<MenuItem value={'II'}>II</MenuItem>
										<MenuItem value={'III'}>III</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth>
									<InputLabel id="item_number">ITEM NUMBER</InputLabel>
									<Select
										labelId="item-number-label"
										id="item_number"
										value={suffix}
										label="ITEM NUMBER"
										onChange={handleSuffixChange}
									>
										<MenuItem value={''} selected>
											none
										</MenuItem>
										<MenuItem value={'Jr'}>Jr</MenuItem>
										<MenuItem value={'Sr'}>Sr</MenuItem>
										<MenuItem value={'I'}>I</MenuItem>
										<MenuItem value={'II'}>II</MenuItem>
										<MenuItem value={'III'}>III</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={4} xs={12} sm={12}>
								<FormControl fullWidth required>
									<InputLabel id="office_authorized">
										OFFICE AUTHORIZED
									</InputLabel>
									<Select
										labelId="office-authorize-select-label"
										id="office_authorized"
										value={sex}
										label="OFFICE AUTOHRIZED"
										onChange={handleSexChange}
									>
										<MenuItem value={'M'}>Male</MenuItem>
										<MenuItem value={'F'}>Female</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											inputProps={{ 'aria-label': 'FROM THIS REGION' }}
										/>
									}
									label="FROM THIS REGION"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						item
						spacing={12}
						sm={12}
						lg={4}
						justifyContent="center"
						alignItems="center"
						direction="column"
					>
						<Box
							component="img"
							sx={{
								marginBottom: 2,
								background: 'gray',
								height: 233,
								width: 350,
								maxHeight: { xs: 233, md: 167 },
								maxWidth: { xs: 350, md: 250 },
							}}
							alt="Upload an image"
							src={image}
						/>
						<Button
							variant="contained"
							endIcon={<SendIcon />}
							component="label"
						>
							<input
								hidden
								accept="image/*"
								multiple
								type="file"
								onChange={handleImageChange}
							/>
							Upload Photo
						</Button>
					</Grid>
				</Grid>
			</CardContent>
			<Divider />
			<CardActions
				sx={{
					alignSelf: 'stretch',
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'flex-start',
					// 👇 Edit padding to further adjust position
					p: 3,
				}}
			>
				<Button size="large" variant="contained">
					SUBMIT
				</Button>
			</CardActions>
		</Card>
	);
}

export default PersonalInfo;
