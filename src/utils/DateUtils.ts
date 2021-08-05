class DateUtils {

    static readonly DATE_TIME_MASK = [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        ":",
        /\d/,
        /\d/,
    ];

    static readonly DATE_TIME_FORMAT_DEFAULT = "YYYY/MM/DD HH:mm";
    static readonly DATE_YY_MM_DD_FORMAT = "yy/MM/dd";

    private static readonly VALID_PARTS_LENGTH = 4;

    static parseDate = (dateStr: string, format: string): Date | null => {
        const regex = format.toLocaleLowerCase()
            .replace(/\bd+\b/, "(?<day>\\d+)")
            .replace(/\bm+\b/, "(?<month>\\d+)")
            .replace(/\by+\b/, "(?<year>\\d+)");

        const parts = new RegExp(regex).exec(dateStr);
        if (parts) {
            //@ts-ignore
            const { year, month, day } = parts.groups;
            return parts.length === DateUtils.VALID_PARTS_LENGTH ? new Date(year, month - 1, day) : null;
        }
        return null;
    }
}

export default DateUtils;
