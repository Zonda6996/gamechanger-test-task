import { Button, ButtonProps } from '@mui/material'

export default function PrimaryButton(props: ButtonProps) {
	return (
		<Button
			variant='contained'
			sx={{
				backgroundColor: '#0147FF',
				color: '#fff',
				'&:hover': {
					backgroundColor: '#0133cc',
				},
			}}
			{...props}
		/>
	)
}
