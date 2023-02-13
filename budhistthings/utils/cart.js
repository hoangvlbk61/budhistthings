import { getCookie, setCookie, eraseCookie } from "./cookies";

const cartCookieId = "CartCookies";

export const setCarts = (addProduct, isAdd = true) => {
    // const addProduct ;
    let orders;
    const ordersJson = getCookie(cartCookieId);
    try {
        orders = JSON.parse(ordersJson);
        if (Array.isArray(orders) || !orders || typeof orders !== "object") orders = {};
    } catch (error) {
        orders = {};
    }
    if (orders[addProduct.id]) {
        if (isAdd === true) orders[addProduct.id]++;
        else {
            if (orders[addProduct.id] === 1) delete orders[addProduct.id];
            else orders[addProduct.id]--;
        }
    } else if (isAdd === true) orders[addProduct.id] = 1;
    setCookie(cartCookieId, JSON.stringify(orders), 30);
}

export const getCarts = () => {
    let orders;
    const ordersJson = getCookie(cartCookieId);
    try {
        orders = JSON.parse(ordersJson);
        if (Array.isArray(orders) || !orders || typeof orders !== "object") orders = {};
    } catch (error) {
        orders = {};
    }
    return orders;
}

export const removeCarts = () => {
    setCookie(cartCookieId, JSON.stringify({}), 30);
}