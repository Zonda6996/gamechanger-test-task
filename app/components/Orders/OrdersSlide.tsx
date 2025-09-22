import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import downloadIcon from '@/app/assets/icons/downloadIcon.svg'
import PrimaryButton from '@/app/ui/PrimaryButton'

interface OrdersSlideProps {
	description: string
	img: string | StaticImageData
	alt: string
	className?: string
}

export default function OrdersSlide({
	description,
	img,
	alt,
	className,
}: OrdersSlideProps) {
	return (
		<div className={className}>
			<Image src={img} alt={alt} priority />
			<p>{description}</p>
			<PrimaryButton startIcon={<Image src={downloadIcon} alt='Скачать' />}>
				Скачать
			</PrimaryButton>
		</div>
	)
}
