import React from 'react';

function Services() {
    // Extended services data with real links
    const dummyServices = [
        {
            id: 1,
            name: 'Krushy Aranya Protsaha Yojane',
            description: 'Krushy Aranya Protsaha Yojane',
            imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.W088bh-PIRi6OdPG0cs64QHaE8&pid=Api&P=0&h=220',
            videoUrl: 'https://www.youtube.com/embed/Ug2gFYCBd9U', // YouTube video about agricultural support
        },
        {
            id: 2,
            name: 'Chief Minister Grama Vikas',
            description: 'Chief Minister Grama Vikas',
            imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.uzZvD69VhG2YG_YL4yi-wAHaFb&pid=Api&P=0&h=220',
            videoUrl: 'https://www.youtube.com/embed/V8gR2fPCy3o', // YouTube video about rural health services
        },
        {
            id: 3,
            name: 'Krushy Aranya Protsaha yojane',
            description: 'Krushy Aranya Protsaha yojane',
            imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ysJIx8257RdkmSrUefHyowHaEK&pid=Api&P=0&h=220',
            videoUrl: 'https://www.youtube.com/embed/Qc8g1MeE-9Q', // YouTube video about educational initiatives
        },
        {
            id: 4,
            name: 'Mahatma Gandhi National Rural Employment Guarantee act',
            description: 'Mahatma Gandhi National Rural Employment Guarantee act',
            imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.a82PpPPwWudUHLpp9jTW2wHaFD&pid=Api&P=0&h=220',
            videoUrl: 'https://www.youtube.com/embed/TKwqYI8h7Wo', // YouTube video about financial assistance programs
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Available Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyServices.map((service) => (
                    <div key={service.id} className="bg-white shadow-lg rounded-lg p-4 border border-green-300">
                        <a href='/services/1' className="text-lg font-semibold text-green-700">{service.name}</a>
                        <img 
                            src={service.imageUrl} 
                            alt={service.name} 
                            className="rounded-md mb-2" 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                        <p className="text-gray-700 mb-2">{service.description}</p>
                        {service.videoUrl && (
                            <div className="mt-2">
                                
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
