/** @format */

import React, { FC, ReactElement, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import cl from "classnames";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faList,
	faHome,
	faShoePrints,
	faShirt,
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import rawFaFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

import cls from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const faFacebook = rawFaFacebook as IconProp

const LogoWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	max-height: 4rem;
	max-width: 4rem;
	padding: 0.5rem 0.25rem;
`;

// min-width: 10rem;
const NavItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	:hover {
		background: #ca8a00 !important;
		color: white;
		transition: background, font-size 2000ms linear;
	}
	a {
		color: #89d0ca !important;
		:hover {
			color: white !important;
		}
	}
	&.active {
		background: #89d0ca;
		color: white;
	}
`;

const Headers = styled.div`
	@media (max-width: 750px) {
		display: none;
	}
`;

const NavResponsive = styled.div`
	display: none;
	cursor: pointer;
	@media (max-width: 750px) {
		display: flex;
	}
`;

const Container = styled.div`
	color: #ca8a00;
`;

const OverlayMenu = styled.div`
	height: 0;
	width: 100%;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.9);
	overflow-y: hidden;
	transition: 0.5s;
`;

const OverlayContent = styled.div`
	position: relative;
	top: 25%; /* 25% from the top */
	width: 100%; /* 100% width */
	text-align: center; /* Centered text/links */
	margin-top: 30px;
`;

type ShopLayoutType = {
	children: ReactElement;
};

const ShopLayout: FC<ShopLayoutType> = ({ children }) => {
	const [isOpen, setOpen] = useState(false);
	const router = useRouter();
	function openNav() {
		setOpen(true);
	}

	function closeNav() {
		setOpen(false);
	}
	return (
		<Container className={"u-body u-xl-mode min-h-screen flex flex-col "}>
			<header
				className="z-100 bg-black sticky top-0 "
				id="sec-85c8"
				style={{ zIndex: 11, minHeight: "4rem" }}
			>
				<div className=" flex flex-row justify-between px-4 w-100">
					<LogoWrapper>
						<Image
							src="/logoColor2.png"
							className="u-logo-image u-logo-image-1"
							alt={"logo"}
							width={100}
							height={100}
						/>
					</LogoWrapper>
					<Headers className="flex justify-around flex-row grow">
						<div className="flex justify-around flex-row">
							<Link
								href="/"
								className="px-2 justify-center align-center w-40 min-w-max flex align-center "
							>
								{" "}
								<NavItem
									className={cl({
										active: router.route === "/",
									})}
								>
									{" "}
									Home{" "}
								</NavItem>{" "}
							</Link>
							<Link
								href="/about"
								className="px-2 justify-center align-center w-40 min-w-max flex align-center"
							>
								{" "}
								<NavItem
									className={cl({
										active: router.route === "/about",
									})}
								>
									{" "}
									About{" "}
								</NavItem>{" "}
							</Link>
							<Link
								href="/courses"
								className="px-2 justify-center align-center w-40 min-w-max flex align-center"
							>
								{" "}
								<NavItem
									className={cl({
										active: router.route === "/courses",
									})}
								>
									{" "}
									Courses{" "}
								</NavItem>{" "}
							</Link>
							{/* <Link href="/libs" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem className={cl({"active": router.route === "/libs"})}> Library </NavItem> </Link>
                            <Link href="/events" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem className={cl({"active": router.route === "/events"})}> Event </NavItem> </Link>
                            <Link href="/recuitment" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem className={cl({"active": router.route === "/recuitment"})}> Recuitment </NavItem> </Link >
                            <Link href="/contact" className="px-2 justify-center align-center w-40 min-w-max flex align-center"> <NavItem className={cl({"active": router.route === "/contact"})}> Contact </NavItem> </Link > */}
						</div>
					</Headers>
					<div className="flex items-center cursor-pointer">
						<Link href={"/cart"}>
							Your cart
							<FontAwesomeIcon icon={faCartShopping} size="xl" className="ml-2" />
						</Link>
					</div>
					<NavResponsive
						onClick={openNav}
						className="flex items-center text-3xl"
					>
						<FontAwesomeIcon icon={faList} />
					</NavResponsive>
					<OverlayMenu
						id="myNav"
						// className={cls({
						// 	block: isOpen,
						// 	hidden: !isOpen,
						// })}
						style={{ height: isOpen ? "100%" : "0%" }}
					>
						<a
							className="closebtn right-4 top-2 text-4xl absolute"
							onClick={closeNav}
						>
							&times;
						</a>
						<OverlayContent
							className={"flex justify-center flex-col"}
						>
							<Link
								className="my-10 text-2xl"
								onClick={closeNav}
								href="/"
							>
								<FontAwesomeIcon
									icon={faHome}
									className="mx-4"
								/>
								Home
							</Link>
							<Link
								className="my-10 text-2xl"
								onClick={closeNav}
								href="/arrival"
							>
								<FontAwesomeIcon
									icon={faShoePrints}
									className="mx-4"
								/>
								New Arrival
							</Link>
							<Link
								className="my-10 text-2xl"
								onClick={closeNav}
								href="/categories"
							>
								<FontAwesomeIcon
									icon={faShirt}
									className="mx-4"
								/>
								Categories
							</Link>
						</OverlayContent>
					</OverlayMenu>
				</div>
			</header>
			<div className="grow">{children}</div>
			<div className="">
				<footer
					className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
					id="sec-266b"
				>
					<div className="u-clearfix u-sheet u-sheet-1">
						<div className="mt-4">
							<div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4">
								<div className="flex flex-col ">
									<div className="grid grid-cols-3 gap-4 h-fit">
										<Image
											src="/logoColor2.png"
											className={"rounded-md col-span-1"}
											alt=""
											width={100}
											height={100}
										/>
										<div
											className={
												"col-span-2 flex justify-start items-center"
											}
										>
											<div className="flex align-center flex-col">
												<b> Pháp Phục Thanh Hoa </b>
												<div>
													<i>
														Pháp phục và đồ dùng
														Phật giáo
													</i>
												</div>
											</div>
										</div>
									</div>
									<div className="flex flex-start mt-4 items-center">
										<span> Follow us on: </span>
										<div className="ml-2">
											{" "}
											<Link
												href="https://facebook.com/NobleEnglish"
												className="flex flex-row items-center"
											>
												{" "}
												<FontAwesomeIcon icon={faFacebook} className="mr-2" />
												Pháp Phục Thanh Hoa{" "}
											</Link>{" "}
										</div>
									</div>
								</div>
								<div className="md:grid-cols-2 xs:grid-cols-1 text-left">
									<span className="font-bold">Cơ sở Pháp Phục Thanh Hoa</span>
									<br />
									<div>
										<span className="font-bold"> Tại Hà Nội: </span>
										<div>Đang hoàn thiện ... </div>
									</div>
									<br />
									<div>
										<span className="font-bold"> Tại Sài Gòn: </span>
										<div>
											{" "}
											Đang hoàn thiện ... (Dự kiến 2024){" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
				<section className="pt-20 u-backlink u-clearfix u-grey-80 flex justify-center">
					Copyright 2022 © Pháp Phục Thanh Hoa
				</section>
			</div>
		</Container>
	);
};

ShopLayout.propTypes = {};

export default ShopLayout;
