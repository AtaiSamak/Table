class DateUtils {
	private static addZero = (num: number) => (num > 9 ? num : "0" + num);

	static format = (inputDate: string) => {
		const date = new Date(inputDate);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDay();

		return `${this.addZero(day)}/${this.addZero(month)}/${year}`;
	};
}

export default DateUtils;
