/** @format */

import React, { FC } from "react";
import PropTypes from "prop-types";
import ShopLayout from "../components/ShopLayout";

import mockDataClothes from "../mock/clothes.json";
import ShopCard from "../components/ShopCard";

type ShopType = {};

const ShopPage: FC<ShopType> = (props) => {
	const data = mockDataClothes;
	return (
		<ShopLayout>
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-10 px-10 py-10" style={{background: "#c99343"}}>
				{data.map((clData) => (
					<ShopCard {...clData} key={clData.id} />
				))}
			</div>
		</ShopLayout>
	);
};

export default ShopPage;
