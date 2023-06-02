import React from 'react'

const HomeBanner = () => {
    return (
        <section id="home" class="overflow-hidden">
   <div class="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
      <div data-aos="slide-left" data-aos-delay="1200" class="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10 aos-init aos-animate">
         <h1 class="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">JOHN <span class="text-dark_primary">ALEX</span></h1>
      </div>
      <div class="pb-16 px-6 pt-5 aos-init aos-animate" data-aos="fade-down">
         <h2>Web Developer</h2>
         <br />
         <div class="flex justify-end"><button class="btn">Hire Me</button></div>
         <div class="flex flex-col gap-10 mt-10">
            <div data-aos="fade-down" data-aos-delay="0" class="flex items-center w-80 gap-5 false aos-init aos-animate">
               <h3>8+</h3>
               <p>Years of Experinse in Web development</p>
            </div>
            <div data-aos="fade-down" data-aos-delay="300" class="flex items-center w-80 gap-5 flex-row-reverse text-right aos-init aos-animate">
               <h3>20+</h3>
               <p>Projects Worked in my career</p>
            </div>
         </div>
      </div>
      <div class="md:h-[37rem] h-96"><img src="https://codeaprogram-portfolio.web.app/assets/person.7931d41d.png" data-aos="slide-up" alt="..." class="h-full object-cover aos-init aos-animate" /></div>
   </div>
</section>
    )
}

export default HomeBanner