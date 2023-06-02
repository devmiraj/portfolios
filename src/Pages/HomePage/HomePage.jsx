import React, { Fragment } from 'react'
import SectionTitle from '../../Components/Parts/SectionTitle'
import ServiceCard from '../../Components/Parts/ServiceCard'
import { SkillCards } from '../../Components/Parts/SkillCards'
import SwiperSlider from '../../Components/Parts/SwiperSlider'
import HomeBanner from './HomeBanner'

const HomePage = () => {
  return (
    <Fragment>
        <HomeBanner />
        <section className="min-h-fit bg-bg_light_primary" id="skills">
          <div className="md:container px-5  py-14">
            <SectionTitle title="Testimonials" subTitle="MY CLIENT REVIEWS"/>
            <div className="flex flex-wrap gap-4 justify-center">
              {
              [1, 2, 3, 4, 5, 6].map(()=> (
                <SkillCards />
              ))
            }
            </div>
          </div>
        </section>
        <section id="services">
          <div className="md:container px-5 py-14">
          <SectionTitle title="Testimonials" subTitle="MY CLIENT REVIEWS"/>
          <div className="flex gap-5 justify-between flex-wrap group">
          {[1, 2, 3].map(()=> (
              <ServiceCard />
          ))}
          </div>
          </div>
        </section>
        <div className='md:container px-5 pt-14'>
            <SwiperSlider />
        </div>
    </Fragment>
  )
}

export default HomePage