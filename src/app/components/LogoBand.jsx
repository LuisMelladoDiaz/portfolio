import Marquee from "react-fast-marquee";

const logos = [
    "/vercel.svg",
    "/next.svg",
    "/globe.svg",
    "/window.svg",
    "/file.svg",
];

export default function LogoBand() {
    return (
        <div className="w-full py-6 bg-black">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
                {logos.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Logo ${i + 1}`}
                        className="h-10 w-auto mx-12 grayscale opacity-70 hover:opacity-100 transition"
                    />
                ))}
            </Marquee>
        </div>
    );
} 