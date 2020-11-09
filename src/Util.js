export default function FormatCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}