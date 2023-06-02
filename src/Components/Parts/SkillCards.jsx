import React from 'react'
import styled from 'styled-components'
export const SkillCards = () => {
  return (
    <div 
    data-aos="fade-up" data-aos-delay="0" class="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 aos-init aos-animate"><div><img src="data:image/png;base64,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" alt="..." class="w-10 group-hover:scale-125 duration-200" /></div><div><h6>Figma</h6><p class="italic">Lorem ipsum text  dummy</p><div class="text-xl absolute top-3 right-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></div></div></div>
  )
};

const SkillCardsTyed = styled.div`

`