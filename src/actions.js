// action type
export const MAKE_DEPOSIT = 'MAKE_DEPOSIT'

// action creator
export function makeDeposit(amount, account) {
	// action
	return {
		type: MAKE_DEPOSIT,
		payload: {
			amount,
			account,
		}
	}
}