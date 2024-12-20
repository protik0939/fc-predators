import { Link } from "react-router-dom";

const allBulletins = [
    {
        "bId": "predators-reunion",
        "author": "Sadat Alam Protik",
        "date": "29 August 2024",
        "title": "প্রিডেটরস রিইউনিওন",
        "imageUrl": [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFm3iN5KDRisUOViOy9MJnTqsazXEIVCxlsmrbXm78maOKsvxWnNPFzvmzyVgNZDLE_pCGYEGhEIOwZhhW3WxwgnYjikP99NC4oYg0gvHuYnw6Dh5-DdDb_c56egRZub5w5zKsJi6oO4WY0s5ow4d59oQg_FAocZxX0tSPN2ZgeHsPVk8iuMCXZZ0cGP5g/s1600/predatorsreunion.webp",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCbFVF6dLzIER1vGkcTUHTDT3hyLgH8Vxi6tcIXUYW-9jObp7TDhzXchvaLudz6loPw0BkyBGbqcqyEKamX0pvV3PW9UF5C4Mx7bgx9AhBdvaDDieRD7WcwhYXDLLif7gj9V5AqhGHVUkhag_DxtIoJxC6qSJNsbp2ryYS3ntw9PjAi69LFlMABgW3wZsf/s1600/predatorsreunion2.webp"
        ],
        "description": "যদিও এটা যখন লিখছি তখন এই ঘটনার প্রায় ছমাস কেটে গেছে কারণ তখন তো আর জানতাম না এভাবে লেখা হবে । আমাদের প্রিয় এফসি প্রিডেটর্স, কিন্তু খেলাধুলা আগের মতন হয় না তেমন । কিভাবেই আর হবে, জীবনটাই এমন যে খেলাধুলার কথা একটা সময় ভুলে যেয়ে ভবিষ্যতের জন্য কাজ শুরু করতে হয় সবাইকে । সবাই যে খেলে না এমনটাও নয়, অনেকেই খেলে সময় পেলে । কিন্তু ওই যে, ক্যান্টনমেন্টের ভিতর ওই বেইজ মাঠে সবাই একসাথে হয় যে খেলাটা ওরকম হয়তো আর কখনও আমরা পাবো না । কারণ আমাদের সবার-ই বেইজপাশ এর মেয়াদ শেষ । তারওপর আবার আমাদের সবার প্রিয় অনিক আর লাবিব ইন্ডিয়া চলে যাওয়ার পর ওই মাঠে খেলা আরও কমে যায় । কারণ অনিক-ই সবাইকে ডেকে ডেকে খেলতে আনতো । হয়তো সেভাবে নয় কিন্তু ভিন্ন ভাবে রাজধানী ঢাকার ইসিবি চত্তর সংলগ্ন ক্লাব ভোল্টা ফুটসল টার্ফে আবার একত্রিত হয় এফসি প্রিডেটর্সের অধিকাংশ । অনিক আর লাবিব ইন্ডিয়া থেকে রোজার ঈদের ছুটিতে আসায় হয় এই আয়োজন । হয়তো পুরনো দিনের মতন করে খেলাটা হয়নি কিন্তু যাই হোক মানুষগুলো তো ছিলো । চমৎকার কিছু ম্যাচ আয়োজন করা হয় এফসি প্রিডেটর্সের সাথে অন্য একটি টিমের । কিছু মুহুর্তও ক্যামেরাবন্দি হয় সেদিন যা আজীবন ভুলবার নয় । আমার প্রত্যাশা থাকবে বছরের একবার করে হলেও প্রিডেটর্সের যেনো এরকম রি-ইউনিওন হয় ।",
    },
]



const ClubBulletin = () => {



    return (
        <div className="w-full">
            <div className="pt-[80px]" />
            <h1 className="text-center font-bold text-[#d5a538]">Club Bulletin</h1>
            <div className="flex flex-wrap items-center w-full p-4 justify-center">
                {
                    allBulletins.map(b => (

                        <div className="card bg-base-100 m-2 w-[45%] sm:w-full shadow-xl">
                            <figure>
                                <img
                                    src={b.imageUrl[0]}
                                    alt={b.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{b.title}</h2>
                                <p>{b.description.length > 15
                                    ? b.description.slice(0, 15) + '...'
                                    : b.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/clubbulletin/${b.bId}`}><button className="btn btn-primary">Read full</button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ClubBulletin;