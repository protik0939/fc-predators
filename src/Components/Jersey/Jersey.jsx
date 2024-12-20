import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Jersey = () => {

    const oneF = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhocNQQRKUqlihz7EQ_XKWwUx-QN2BhQKbsc1zuV3BdXZVN070BbDgWKP8m3Allvl0Kb6oqsjVea8Or-yqWoYG-udQgCM_OvGBWLgUB6p2rshg9M5p-lMqPxirqA-HRb1kDra9ROUuuJT_ey_muFowzyXcOXHYDD_wGm8D1GI4nUh8r00uG6ckIsCRUPl4y/s1600/1st%20front.png'
    const oneB = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixdW5L5kk3t376QIzghU1l3U5mK_ecmQwvNcdHfxaKX9T66IsNBBQbaTadAuW9StMo61JwhyphenhyphenTrXX1wrOLbCTzAdZ0yw2V1_1rD2mPjVTcgux8aIme2nBZxz9KM6BspA3bFE32yArrvQqv-GthwY0kY0ColRb_fvDoal-ps7eZsoJpEwRccjM1nUyWaZCu5/s1600/1st%20jersey%20back.png'
    const twoF = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheGAfT9k3DRRxTpI2iOEvZxZUz-i6IKDzUdYETQaUDu7yTipnWoHYJ9lZxvhfrdHzOvefvPjZxsPmY17ZqOxAc3ObyDO8h3If2tcWF1ABJUfQoAsNQhXGBa90puxONkK1pboDhQkW5MIIElEML657UNqE6m8xezXwRqlO_LVKPZAZAHOaDeZwc-AUsn4Xm/s1600/305678386_624101242725953_6541306457976370480_n.png'
    const twoB = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhtfzt7eUGTucdaRnksEEMrZyK5lhDm1NjK2IQgufa5NZo95I55yhyDayvIY6ishlZ-OSPQx0lR0yhiOsG1JB0zkDhp5BtrE7sNGcHR-ZIsSYwn_lnBpq6rc9hXMnT7z6O6AbxfdAdle0BoYjVerLfqarS3gE2dw7IZt5f7pzUBlicV1waLgWgSsSxdbac/s1600/304992534_1986655378196488_2352394525212909197_n.png'
    const threeF = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIGsUt5EhUOfPpT2abUaBAkyp8nCje3DCJUufqKkpYGVOKawpJaB-LnHfWfPSUP_xT2aDpuGDtC3TRjZtGFRY0Cg0rXcdAKjYXk5w3biyvbs-nlQjxOjcI4JmvoJjbF8gp7pndSArkC3Hyxh2PoIhOVTYnRqDteHeC3i7Rk4iLQNqJLHmL7Lu9Zc2xhYWL/s1600/364545672_259057473576621_7583918465796105534_n.png'
    const threeB = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtnayOlr1J4EnMDTwaugvDj9wys7TUfcQtb4cbq1n7Iq6CLAEKRYpkNBhKQ_hS5lf-KlVX392cHTg9z6_zq_5q9m9wcjDkmx9knqZTQvXnkuCqLaYXEIIri5Thg2BnmOFumY74_nUrcC5HgJU9aUbCI0xnfU10pu-p4mEQ1PhJ3hKqxZJFGNO42B1H7Gyh/s1600/fffsdsdf.png'
    const jerseyPlaceholderFront = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsl1Hozlqhi8j_U-PW9q5NZW5GbZH7iBaO9038fg5zgqjdYf89EZonxGUm3xrDRt_7iRCeP6VCuW_cyZq2GP_Qj-Pelh4uo9qiEH8mv_CrQlq5BHVSu4N4ah2vJp8_p90VAEs4514ak1F5yjsbt46rqd36GcDCcI8OPEcllbG_9fZBW-ysmnOTEhSYKSy0/s1600/jf.webp';
    const jerseyPlaceholderBack = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsl1Hozlqhi8j_U-PW9q5NZW5GbZH7iBaO9038fg5zgqjdYf89EZonxGUm3xrDRt_7iRCeP6VCuW_cyZq2GP_Qj-Pelh4uo9qiEH8mv_CrQlq5BHVSu4N4ah2vJp8_p90VAEs4514ak1F5yjsbt46rqd36GcDCcI8OPEcllbG_9fZBW-ysmnOTEhSYKSy0/s1600/jf.webp';


    return (
        <div>
            <div className="pt-[75px]" />
            
            <Helmet>
                <title>Jersey | Fc Predators</title>
            </Helmet>
            <div className=" relative hero w-full">
                <div className="hero-content flex justify-between sm:flex-col sm:justify-center items-center">
                    <div className="w-full relative flex sm:flex-col">
                        <LazyLoadImage
                            src={oneF}
                            className="w-full"
                            placeholderSrc={jerseyPlaceholderFront}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />
                        <LazyLoadImage
                            src={oneB}
                            className="w-full"
                            placeholderSrc={jerseyPlaceholderBack}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />
                    </div>
                    <div className="pr-20 sm:pr-0">
                        <h1 className="text-2xl font-bold text-[#d5a538]">1st Jersey</h1>
                    </div>
                </div>
            </div>

            <div className=" relative hero w-full">
                <div className="hero-content flex justify-between sm:flex-col sm:justify-center items-center">
                    <div className="w-full relative flex sm:flex-col">
                        <LazyLoadImage
                            src={twoF}
                            className="w-full"
                            placeholderSrc={jerseyPlaceholderFront}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />
                        <LazyLoadImage
                            src={twoB}
                            className="w-full"
                            placeholderSrc={jerseyPlaceholderBack}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />
                    </div>
                    <div className="pr-20 sm:pr-0">
                        <h1 className="text-2xl font-bold text-[#d5a538]">2nd Jersey</h1>
                    </div>
                </div>
            </div>

            <div className=" relative hero w-full">
                <div className="hero-content flex justify-between sm:flex-col sm:justify-center items-center">
                    <div className="w-full relative flex sm:flex-col">
                        <LazyLoadImage
                            src={threeF}
                            className="w-full"
                            placeholderSrc={jerseyPlaceholderFront}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />
                        <LazyLoadImage
                            src={threeB}
                            className="w-full"
                            placeholderSrc={jerseyPlaceholderBack}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />
                    </div>
                    <div className="pr-20 sm:pr-0">
                        <h1 className="text-2xl font-bold text-[#d5a538]">3rd Jersey</h1>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Jersey;