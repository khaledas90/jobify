import Image from "next/image";
import Link from "next/link";


export default function CardCategory({ id, img, name, description }) {
    return (
        <>
            <Link href={`/Category/${name}`}>
                <div
                    key={id}
                    className="p-4 border-2 cursor-pointer hover:bg-gray-200 rounded-lg border-opacity-10 transition-all duration-200 hover:shadow-sm hover:scale-102"
                >
                    <div className="flex items-center space-x-4">
                        <Image
                            src={img}
                            width={60}
                            height={60}
                            className="rounded-full"
                            alt={name}
                        />
                        <div>
                            <h4 className="text-lg font-semibold mb-1">{name}</h4>
                            <p className="text-sm text-gray-700 ">{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
