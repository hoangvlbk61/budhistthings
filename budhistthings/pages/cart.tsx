/** @format */

import React, { FC, FormEvent, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { getCarts, removeCarts, setCarts as setCartCookies } from "../utils/cart";
import ShopLayout from "../components/ShopLayout";

import mockDataClothes from "../mock/clothes.json";
import Image from "next/image";
import { numberWithCommas } from "../utils/price";
// import ShopCard from "../components/ShopCard";
import cls from "classnames";
type ShopType = {};

const ShopPage: FC<ShopType> = (props) => {
    const [carts, setCarts] = useState({});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setCarts(getCarts());
    }, [])
    const onOpenDialog = () => setOpen(true);
    const clothesData = useMemo(() => mockDataClothes.reduce((obj, nextProd) => ({ ...obj, [nextProd.id]: nextProd }), {}), []);
    const dataMapping = useMemo(() => {
        return Object.keys(carts).map((pId: string) => {
            return {
                product: clothesData[pId],
                count: carts[pId],
            };
        });
    }, [carts]);

    const onAddProduct = (id: string) => {
        setCarts({ ...carts, [id]: carts[id] + 1 })
        setCartCookies({ id }, true);
    }
    const onRemoveProduct = (id: string) => {
        const newCartProducts = { ...carts };
        if (newCartProducts[id] === 1) delete newCartProducts[id];
        else newCartProducts[id] = newCartProducts[id] - 1;
        setCarts({ ...newCartProducts })
        setCartCookies({ id }, false);
    }

    const allPrice = useMemo(() => {
        let pr = 0;
        dataMapping.forEach(({ product, count }) => {
            pr += count * product.price;
        })
        return pr;
    }, [dataMapping])

    return (
        <ShopLayout>
            <div className="grid gap-10 px-10 py-10" style={{ background: "#c99343" }}>

                <table className="table-fixed text-white text-center">
                    <thead>
                        <tr>
                            <th className="text-center">Hình ảnh</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Giá tiền</th>
                            <th className="text-center">Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataMapping.map(({ product, count }) =>
                            <tr key={product.id}>
                                <td className="align-top text-center">
                                    <Image
                                        className="rounded-t-lg"
                                        src={product.image}
                                        width={400}
                                        height={400}
                                        alt=""
                                    />
                                </td>
                                <td className="align-top">{product.name}</td>
                                <td className="align-top">{`${numberWithCommas(product.price)} VND`}</td>
                                <td className="align-top">
                                    <div className="inline-flex rounded-md shadow-sm">
                                        <span
                                            onClick={() => onRemoveProduct(product.id)}
                                            aria-current="page"
                                            className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white hover:cursor-pointer">
                                            -
                                        </span>
                                        <a href="#" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                            {count}
                                        </a>
                                        <span
                                            onClick={() => onAddProduct(product.id)}
                                            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white hover:cursor-pointer">
                                            +
                                        </span>
                                    </div>
                                </td>
                            </tr>)}
                    </tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Tổng cộng</th>
                        <th>{`${numberWithCommas(allPrice)} VND`}</th>
                    </tr>
                </table>
                <div className="flex justify-center text-white">
                    <button
                        className="rounded-full hover:bg-white hover:text-orange-400"
                        onClick={onOpenDialog}
                    >Thanh toán ngay
                    </button>

                </div>
            </div>
            <Dialog open={open} onClose={() => setOpen(false)} />
        </ShopLayout>
    );
};

const Dialog: FC<{
    open: boolean,
    onClose: Function
}> = ({ open, onClose }) => {
    if (!open) return null;

    const onSubmit = (evt: FormEvent) => {
        const name = evt.currentTarget.elements.name.value;
        const address = evt.currentTarget.elements.address.value;
        const phone = evt.currentTarget.elements.phone.value;
        console.log("name", name)
        console.log("address", address)
        console.log("phone", phone)
        // Send API 
        removeCarts();
        onClose();
        evt.preventDefault();
    }

    return <div className="backdrop-blur-xl bg-white/30 fixed top-0 left-0 right-0 z-50  w-full h-full flex justify-center items-center" onClick={() => onClose()}>

        <div id="staticModal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" onClick={(evt) => evt.stopPropagation()}>
            <div className="relative w-full h-full max-w-2xl md:h-auto">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Order confirmation
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal" onClick={() => onClose()}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <form className="w-11/12" onSubmit={(evt) => onSubmit(evt)}>
                            <div className="relative z-0 mb-6 w-full group">
                                <input name="name" id="name" type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <textarea name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                            </div>
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-toggle="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => onClose()}>Cancel</button>
                                <button data-modal-toggle="staticModal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Confirm</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
}
export default ShopPage;
