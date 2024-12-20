import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import BehindTheStory from "../BehindTheStory/BehindTheStory";
import InterViews from "../Interviews/InterViews";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from "react-helmet-async";

const Home = () => {

    const pcBanner = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvNOnwAudBfkBybSH0HYWFnY65rWkT9I6Ykxnu2vhw2MHjNCFx9EbpJqi1jzCso59TyaCxu9nBMHPEICnaROjGMXOn1D854jpoBph9dYeHY9MEU4FZv4OmDwXpHoVpG87MmaHG9CtZ05G6nRRuOlKIc_9NOgY74ImeA0JCsvEYwl_QAKVMd5nN0m5R/s1600/pc.webp';
    const phoneBanner = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtt6WdYU7TDGmW0yAtaOAHJF1Mk66Gf1osl89QYDN47rMju6NOGwZttPtJXC9LOVIJEvOcxcD8VTKjJ2c52IbU72BglM6A9733EiD82B1zByUL0dKkIVQk6rARgLhQmCYfL64uVGjvAZjZHuGXJhGvkIIHFn74TvaaMUmGYfnUSz-v_9N0yJ_Ms-4x/s1600/phn.webp';

    const [imageSrc, setImageSrc] = useState(pcBanner);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setImageSrc(phoneBanner);
            } else {
                setImageSrc(pcBanner);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="pt-[70px]">
            
            <Helmet>
                <title>Home | Fc Predators</title>
            </Helmet>
            <LazyLoadImage
                src={imageSrc} alt=""
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: "1s" },
                }}
            />
            <div className="text-center relative text-[1vw] text-[#d5a538] bg-[#00000080]">
                <TypeAnimation
                    sequence={[
                        'We are Predators',
                        1000,
                        'We are GenZ',
                        1000,
                        'We are Messi',
                        1000,
                        'We are Ronaldo',
                        1000,
                        'We are Neymar',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
            <BehindTheStory />
            <InterViews />
            <div className="flex items-center justify-center relative w-full p-2">
                <LazyLoadImage
                    style={{ filter: 'brightness(20%)' }}
                    className="relative w-full rounded-[10px] mb-5 shadow-2xl shadow-[#d5a538]"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7wxcypK6yoleH7wpPE2eUEy4Ev5iZKWq05hLbb6oqlyQqLmLMS4K3CkCQ9Ch16vh9CtMEgY5Y8zS6xir3KQwUMAeL-YXiRdbwqLYhx3GIbnV_cqfEVEhtJfuGZ6IumbJUYShh2K2QMfSwn-76zOxG3PcijuClk7xlOiwLnbOLhfaosD4rOlk3v387xBwv/s1600/predators.webp"
                    alt=""
                    effect="blur"
                    wrapperProps={{
                        style: { transitionDelay: "1s" },
                    }}
                />

                <TypeAnimation
                    className="absolute"
                    sequence={[
                        'When I get older',
                        500,
                        'I will be stronger',
                        500,
                        'They\'ll call me freedom',
                        500,
                        'just like a wavin\' flag',
                        500
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.5em', textAlign: 'center', color: '#d5a538', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>

        </div>
    );
};

export default Home;