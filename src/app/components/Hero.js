import React from 'react'
import herostyles from "@/app/styles/herosection.module.css"
import commenStyle from "@/app/styles/common.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Hero = ({title,imageUrl}) => {
    return (
        <main className={herostyles.main_section}>
            <div className={commenStyle.container}>
                <div className={commenStyle.grid_two_section}>
                    <div className={herostyles.hero_content}>
                        <h1>{title}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam minus pariatur ratione deserunt quis doloribus consequatur, omnis repellendus fugiat asperiores id non doloremque modi labore sint sapiente animi et.
                            
                            Adipisci, aspernatur! Soluta placeat illo eum sapiente distinctio. Consequatur laboriosam molestias dolor ratione. Quia, officiis? Fuga, labore voluptatem facere, commodi laboriosam soluta, molestiae exercitationem placeat harum qui enim totam repellendus!</p>
                            <Link href="/Movies">

                        <button>Explore More</button>
                        </Link>

                    </div>

                    <div className={herostyles.hero_image}>
<Image src={imageUrl} alt='wathc' width={500} height={500}

/>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Hero