/**
 * Calculate duration from a start date to now in a human-readable format
 * @param startDate - The start date
 * @returns A string like "2 yrs 7 mos" or "3 years" or "5 mos"
 */
export function calculateDuration(startDate: Date): string {
	const now = new Date();
	const years = now.getFullYear() - startDate.getFullYear();
	const months = now.getMonth() - startDate.getMonth();

	const totalMonths = years * 12 + months;
	const displayYears = Math.floor(totalMonths / 12);
	const displayMonths = totalMonths % 12;

	if (displayYears === 0) {
		return `${displayMonths} mo${displayMonths !== 1 ? 's' : ''}`;
	} else if (displayMonths === 0) {
		return `${displayYears} yr${displayYears !== 1 ? 's' : ''}`;
	} else {
		return `${displayYears} yr${displayYears !== 1 ? 's' : ''} ${displayMonths} mo${displayMonths !== 1 ? 's' : ''}`;
	}
}
