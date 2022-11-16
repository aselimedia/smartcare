const rupiah = (rp) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(rp);
}

export default rupiah;