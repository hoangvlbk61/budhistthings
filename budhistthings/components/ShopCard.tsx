/** @format */

import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import { type } from "os";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import cls from "classnames";

import { numberWithCommas } from "../utils/price";
import { setCarts } from "../utils/cart";
type CardData = {
	image: string;
	price: number;
	name: string;
	sold: number;
	id: string;
};

const ShopCard: FC<CardData> = ({ image, price, name, sold, id }) => {
	const [isAdding, setIsAdding] = useState<Boolean>();
	const onAddProduct = () => {
		if(isAdding) return;
		setCarts({ id }, true);
		setIsAdding(true);
		setTimeout(() => {
			setIsAdding(false);
		}, 2000);
	}
	return (
		<div className="flex justify-center mb-4">
			<div className="rounded-lg shadow-lg bg-white max-w-sm">
				<a className="flex justify-center" href="#!">
					<Image
						className="rounded-t-lg"
						// src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
						src={image}
						width={400}
						height={400}
						alt=""
					/>
				</a>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl tracking-wide font-medium mb-2 line-clamp-2">
						{name}
					</h5>
					<p className="text-gray-700 text-base mb-4 line-clamp-4">
						Some quick example text to build on the card title and
						make up the bulk of the card &#39 s content. Some quick
						example text to build on the card title and make up the
						bulk of the card &#39 s content.
					</p>
					<div className="ml-1"> {numberWithCommas(price)} VND</div>
					<div className="flex justify-between">
						<button
							type="button"
							className={cls("tracking-wide h-8 inline-block px-3 py-1.5 normal-case text-white font-small text-xs leading-tight rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out bg-amber-600", { "bg-amber-900": isAdding })}
							onClick={onAddProduct}
						>
							<FontAwesomeIcon
								icon={isAdding ? faCheck : faCartPlus}
								className="mr-2"
							/>
							{isAdding ? "Added to cart" : "Add to cart"}
						</button>
						<div className="flex flex-col justify-end text-right">
							<span className="text-xs">Sold {sold}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

ShopCard.propTypes = {};

export default ShopCard;
