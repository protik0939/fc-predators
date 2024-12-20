import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const personPlaceholder = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1BTal_GCTqMmU1Q-SlCEBk8qiSz-1GFSyV7JR6NNHdOI5tdxBTlojklmfqjmjf779rQT7q7UzaB2s8-G5sOYLX-AYiQHDMU4W7sbUcJeWOi6eJq9N-PKN2EvNOduaCZPuXsqwabDSNoBtrxjFDsJdcFvGBND-lazbU_YkCn2mdcFnCsQIJyix9_9xEAp3/s1600/Untitled-1.webp';

const UserCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={() => document.getElementById(`interviewModal-${data.pId}`).showModal()}
            className="cursor-pointer relative w-[30%] m-2 sm:w-full rounded-lg shadow-md font-['mina']"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <LazyLoadImage
                className="w-full rounded-lg transition-opacity duration-500"
                src={isHovered ? data.mainImage : data.thumbImage}
                alt={data.name || 'User Image'}
                placeholderSrc={personPlaceholder}
                effect="blur"
                wrapperProps={{
                    style: { transitionDelay: "1s" },
                }}
            />
            <div
                style={{ background: "linear-gradient(rgba(0, 0, 0, 0), rgb(212 165 55 / 72%))" }}
                className="flex flex-col justify-center items-center p-6 absolute bottom-0 h-1/2 w-full rounded-lg"
            >
                <div className="absolute bottom-0 text-center text-white mb-6">
                    <h1 className="font-bold">{data.name}</h1>
                    <h1>Position: {data.position}</h1>
                    <h1>Jersey no: {data.jerseyNumber}</h1>
                    <button className="btn">See More</button>
                </div>
            </div>
            <div
                style={{ background: "radial-gradient(circle, rgb(255 222 146 / 80%) 0%, rgb(212 165 55 / 80%) 100%)" }}
                className="absolute top-2 right-2 p-1 px-4 text-[10px] rounded-full text-[#ffffff]"
            >
                {data.characteristics}
            </div>

            <dialog id={`interviewModal-${data.pId}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><IoClose /></button>
                    </form>
                    <h3 className="font-bold text-lg text-center mb-10">Interview</h3>
                    {
                        data.qna.map(x => (
                            <div className='mt-10'>
                                <div className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Interviewer"
                                                src="https://i.ibb.co/VV0fs55/IMG-20240503-210901896-PORTRAIT.jpg" />
                                        </div>
                                    </div>
                                    <div className="chat-header text-[#d5a538]">
                                        Interviewer
                                    </div>
                                    <div className="chat-bubble">{x.question}</div>
                                </div>
                                <div className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt={data.name}
                                                src={data.mainImage} />
                                        </div>
                                    </div>
                                    <div className="chat-header text-[#d5a538]">
                                        {data.name}
                                    </div>
                                    <div className="chat-bubble">{x.answer}</div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </dialog>

        </div>
    );
};

export default UserCard;
