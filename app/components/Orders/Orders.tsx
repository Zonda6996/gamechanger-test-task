'use client'

import orderStyles from './Orders.module.scss'
import OrdersSlide from './OrdersSlide'

import ordersImg1 from '@/app/assets/images/order1.jpg'
import ordersImg2 from '@/app/assets/images/order2.jpg'
import ordersImg3 from '@/app/assets/images/order3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import SectionTitle from '@/app/ui/SectionTitle'

export default function Orders() {
	return (
		<div className={orderStyles['orders-wrapper']}>
			<SectionTitle>Заказы</SectionTitle>
			<div className={orderStyles['slider-wrapper']}>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg1}
							description='Счета на оплату для Юр. Лиц'
							alt='Счета на оплату для Юр. Лиц'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg2}
							description='Гарантия на детали для переднего бампера'
							alt='Гарантия на детали для переднего бампера'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg3}
							description='Чеки для Физ.лиц'
							alt='Чеки для Физ.лиц'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg1}
							description='Счета на оплату для Юр. Лиц'
							alt='Счета на оплату для Юр. Лиц'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg1}
							description='Счета на оплату для Юр. Лиц'
							alt='Счета на оплату для Юр. Лиц'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg2}
							description='Гарантия на детали для переднего бампера'
							alt='Гарантия на детали для переднего бампера'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg3}
							description='Чеки для Физ.лиц'
							alt='Чеки для Физ.лиц'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<OrdersSlide
							className={orderStyles['slide-wrapper']}
							img={ordersImg1}
							description='Счета на оплату для Юр. Лиц'
							alt='Счета на оплату для Юр. Лиц'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}
