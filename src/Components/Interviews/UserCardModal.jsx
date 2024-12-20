import React from 'react';

const UserCardModal = ({ data, qn }) => {
    return (
        <>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Interviewer Image"
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ5Xt1q6xJNbXgrU7YPfYL9cS1MTGb5qdtBaEjoNrYiU6r_ZuDQtmpftPbS2-nHyB4yJk3fhIeJSmNsCcWDWRfeXNl8vUD28yM4RKXcOu1OW_8a8lBKh_d2Qca_U6T4KfwVpQwCJkEFuPiBbEYf1eKelX-Bs_y-efLmYWtdRzbXCnZdTtUe19QLV5CplY/s1600/ptk.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    Interviewer
                </div>
                <div className="chat-bubble">{qn.question}</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="User Image"
                            src={data.mainImage} />
                    </div>
                </div>
                <div className="chat-header">
                    {data.name}
                </div>
                <div className="chat-bubble">{qn.answer}</div>
            </div>
        </>
    );
};

export default UserCardModal;