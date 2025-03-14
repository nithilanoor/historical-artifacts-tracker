

const Facts = () => {

    const facts = [
        "The Rosetta Stone helped linguists decode Egyptian hieroglyphs.",
        "The Dead Sea Scrolls are over 2,000 years old and include some of the oldest biblical manuscripts.",
        "The Antikythera Mechanism is considered the world's first analog computer.",
        "King Tutankhamun's tomb was discovered in 1922, almost intact.",
        "The Great Library of Alexandria was one of the largest libraries of the ancient world.",
        "The Colosseum in Rome could hold up to 50,000 spectators in ancient times."
    ];

    return (
        <div className="my-16">
            <h2 className="text-3xl font-semibold text-center">Fascinating Historical <span className="text-[#E2B13C]">FACTS</span></h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8">
                {facts.map((fact, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white border border-[#E2B13C] rounded-lg shadow hover:shadow-lg transition-shadow"
                    >
                        <p className="text-[#E2B13C]">{fact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Facts;