import { CardSanook } from "@/components/sanook/card-sanook";
import { sanookImage } from "@/components/sanook/data";
import { TrendingUpIcon } from "lucide-react";

type SanookPageProps = {};

const SanookPage = ({}: SanookPageProps) => {
	return (
		<section className="container flex items-center justify-center min-h-screen">
			<div className="grid grid-cols-3 gap-4">
				{sanookImage.map((image) => (
					<CardSanook
						key={image.cover}
						description={image.description}
						album={image}
						width={800}
						height={500}>
						<div>13 ชั่วโมงที่แล้ว ข่าว</div>
						<div className="flex items-center">
							<TrendingUpIcon className="mr-2 h-4 w-4" /> 59,898
						</div>
					</CardSanook>
				))}
			</div>
		</section>
	);
};

export default SanookPage;
