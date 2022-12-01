export default function genId() {
    return "xxxxxxxx"
        .replace(/[xy]/g, c => {
            const r = (Math.random() * 8) | 0;
            const v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        })
        .toUpperCase();
}