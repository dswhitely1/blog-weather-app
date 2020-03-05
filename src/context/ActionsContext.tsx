import {createContext} from 'react';
import {UseActions} from "../store/useActions";

interface Actions {
    actions?: UseActions
}

export const ActionsContext = createContext<Actions>({});
export const ActionsProvider = ActionsContext.Provider;