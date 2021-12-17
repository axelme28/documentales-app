import { useState } from 'react';

export const useCurrentTeam = () => {
	const [CurrentTeam, setCurrentTeam] = useState({});
	return { CurrentTeam, setCurrentTeam };
};
