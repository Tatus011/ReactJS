export default function Team() {
    const teamMembers = [
        { name: 'Andi', image: 'https://randomuser.me/api/portraits/men/74.jpg' },
        { name: 'Budi', image: 'https://randomuser.me/api/portraits/men/26.jpg' },
        { name: 'Citra', image: 'https://randomuser.me/api/portraits/women/40.jpg' }
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Tim Kami</h2>
            <div className="row">
                {teamMembers.map((member, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                        <div className="card h-100 text-center">
                            <img 
                                src={member.image} 
                                className="card-img-top" 
                                alt={member.name} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text">Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}