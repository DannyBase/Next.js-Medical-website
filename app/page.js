import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home/About"
import Banner from "@/components/sections/home/Banner"
import Services from "@/components/sections/home/Services"
import Features from "@/components/sections/home/Features"
import Funfacts from "@/components/sections/home/Funfacts"
import News from "@/components/sections/home/News"
import Testimonial from "@/components/sections/home/Testimonial"
import WhyChooseUs from "@/components/sections/home/WhyChooseUs"
import Subscribe from "@/components/sections/home/Subscribe"
import Team from "@/components/sections/home/Team"
import Video from "@/components/sections/home/Video"
import Process from "@/components/sections/home/Process"
import Pricing from "@/components/sections/home/Pricing"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                <WhyChooseUs />
                <Funfacts />
                <Team />
                <Video />
                <Process />
                <Testimonial />
                <Pricing />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}