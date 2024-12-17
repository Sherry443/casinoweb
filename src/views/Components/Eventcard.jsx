import React, { useState } from 'react';

const Eventcard = ({ limit }) => {
    const [hoveredEvent, setHoveredEvent] = useState(null);

    const eventsData = [
        {
            id: 1,
            image: '/1st.jpeg',
            time: 'Every Friday and Saturday Night From 5pm - 11pm',
            title: 'Weekend Warriors Challenge',
        },
        {
            id: 2,
            image: '/2nd_img.png',
            time: 'Monday to Wednesday',
            title: 'Weekend Warriors Challenge',
        },
        {
            id: 3,
            image: '/2nd_img.png',
            time: 'Monday to Wednesday from 5pm - 11pm',
            title: 'Weekend Warriors Challenge',
        },
        {
            id: 4,
            image: '/2nd_img.png',
            time: 'Mondays & Tuesdays from 7pm - 10pm',
            title: 'Weekend Warriors Challenge',
        },
        {
            id: 5,
            image: '/2nd_img.png',
            time: 'Daily from 11am to 3pm',
            title: 'Weekend Warriors Challenge',
        }
    ];

    const limitedCards = eventsData.slice(0, limit);

    return (
        <>
            <div className="row justify-content-center px-5">
                {limitedCards.map((event) => (
                    <div
                        key={event.id}
                        className="row justify-content-center align-items-stretch parent-row"
                        style={{ position: 'relative' }}
                    >
                        <div
                            className="col-lg-3 col-md-3 col-12"
                            style={{ padding: '10px' }}
                            onMouseEnter={() => setHoveredEvent(event.id)}
                            onMouseLeave={() => setHoveredEvent(null)}
                        >
                            <div
                                className="col4-image"
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    backgroundImage: `url(${event.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transform: 'skew(-20deg)',
                                    overflow: 'hidden',
                                    transition: 'filter 0.8s ease-in-out', // Increased transition time (0.8s)
                                    filter: hoveredEvent === event.id ? 'brightness(0.7)' : 'brightness(1)',
                                }}
                            ></div>
                        </div>

                        <div
                            className="col-lg-6 col-md-6 col-12 d-flex align-items-center"
                            style={{ padding: '10px' }}
                            onMouseEnter={() => setHoveredEvent(event.id)}
                            onMouseLeave={() => setHoveredEvent(null)}
                        >
                            <div
                                className="event_background_color col5-background d-flex flex-column justify-content-center"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: '#FFFFFF33',
                                    transform: 'skew(-20deg)',
                                    overflow: 'hidden',
                                    transition: 'background-color 0.4s ease',
                                }}
                            >
                                <div
                                    className="content"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        transition: 'background-color 0.4s ease, color 0.4s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div className="row px-4 py-4">
                                        <div className="col-lg-8">
                                            <p className="text-white col5-text">{event.time}</p>
                                            <h3 className="text-white col5-title">{event.title}</h3>
                                        </div>
                                        <div className="col-lg-4 align-self-center">
                                            <div className="text-end">
                                                <button className="btn_background_color btn_hover" style={{ borderRadius: '2px' }}>
                                                    <span>Read More</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Eventcard;
