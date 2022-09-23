const DOTS = "...";

class PaginationUtils {
	static getTemplate(pages: number, currentPage: number) {
		const pagination: (string | number)[] = new Array(pages)
			.fill(0)
			.map((_, id) => id);

		if (pages <= 7) return pagination;
		else if (currentPage < 5) {
			return [...pagination.slice(0, 7), DOTS, pagination[pages - 1]];
		} else if (currentPage > pages - 6) {
			return [pagination[0], DOTS, ...pagination.slice(pages - 7)];
		}
		return [
			pagination[0],
			DOTS,
			...pagination.slice(currentPage - 2, currentPage + 3),
			DOTS,
			pagination[pages - 1],
		];
	}
}

export default PaginationUtils;
