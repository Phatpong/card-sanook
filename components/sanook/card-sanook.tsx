import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Album } from "./data";

type CardSanookProps = ComponentPropsWithoutRef<"div"> & {
	album: Album;
	width?: number;
	height?: number;
	description: string;
};

const CardSanook = ({ children, album, width, height, description }: CardSanookProps) => {
	return (
		<Card>
			<Link
				className="hover:underline"
				href="#">
				<CardHeader>
					<Image
						key={album.cover}
						src={album.cover}
						alt={album.description}
						width={width}
						height={height}
						className={cn("h-auto w-auto")}
					/>
				</CardHeader>
				<CardContent>
					<div className="line-clamp-2">{description}</div>
				</CardContent>
			</Link>
			<CardFooter>
				<div className="flex flex-1 justify-between">{children}</div>
			</CardFooter>
		</Card>
	);
};

export { CardSanook };
