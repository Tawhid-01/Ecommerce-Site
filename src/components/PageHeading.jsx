import React from 'react'

const PageHeading = (props) => {
  return (
    <section className='py-[96px] bg-[#F6F5FF]'>
        <div className="container mx-auto ">
            <h2 className='font-sans font-bold text-[#101750] text-[36px]'>{props.heading}</h2>
            <p>Home . Pages . <span className='text-[#FB2E86]'>{props.page}</span></p>
        </div>
    </section>
  )
}

export default PageHeading
