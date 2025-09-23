'use client'

import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import arrowDownIcon from '@/app/assets/icons/arrowDown.svg'
import Image from 'next/image'

export default function Dropdown() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button
				id='basic-button'
				sx={{
					textTransform: 'none',
					borderColor: 'rgba(0, 0, 0, 0.14)',
					color: '#2D3541',
					fontWeight: '400',
				}}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				variant='outlined'
				endIcon={
					<Image
						src={arrowDownIcon}
						alt='Arrow Down Icon'
						width={9}
						height={9}
					/>
				}
			>
				Все платежи за последнюю неделю
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				slotProps={{
					list: {
						'aria-labelledby': 'basic-button',
					},
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	)
}
