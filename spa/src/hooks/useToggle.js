import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState);

	const handler = useCallback(() => setState((state) => !state), []);

	return [state, handler];
};

export default useToggle;
