//vuex store that contains all modules

import { createStore} from "vuex";
import auth from './auth.module';

const store = createStore({
    module:{
        auth,
    },
});

export default store;