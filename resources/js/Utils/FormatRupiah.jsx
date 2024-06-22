function formatRupiah(angka) {
    const numberFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    return numberFormat.format(angka).replace(",00", "");
}


export default formatRupiah;