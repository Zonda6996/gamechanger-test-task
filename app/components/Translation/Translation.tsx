import SectionTitle from '@/app/ui/SectionTitle'
import translationStyles from './Translation.module.scss'
import arrowIcon from '@/app/assets/icons/arrowIcon.svg'
import translationImg from '@/app/assets/images/translationBg.jpg'
import Image from 'next/image'
import PrimaryButton from '@/app/ui/PrimaryButton'

export default function Translation() {
	return (
		<div className={translationStyles['tranlation-wrapper']}>
			<div className={translationStyles.flex}>
				<SectionTitle>Трансляция</SectionTitle>
				<PrimaryButton
					size='small'
					startIcon={
						<Image src={arrowIcon} alt='Arrow icon' width={18} height={14} />
					}
				>
					Live
				</PrimaryButton>
			</div>
			<Image
				src={translationImg}
				alt='Translation Background'
				width={523}
				height={243}
			/>
		</div>
	)
}
