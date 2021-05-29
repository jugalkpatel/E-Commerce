const totalPrice = (list) => {
    return list.length > 0 ? list.reduce((acc, item) => acc + (item.quantity * item.product.price), 0) : -1;
}

export { totalPrice };