import { createStore } from "vuex"

import { alert } from './alert'
import { account } from './account'
import { users } from './users'

export const store = createStore({
    modules: {
        alert,
        account,
        users
    }
});
