import { configureStore } from '@reduxjs/toolkit'
import MenuSlice from './menu/menu.slice'
import GroupModalSlice from './groups/groups.slice'

const store = configureStore({
    reducer: {
        MenuToggle : MenuSlice,
        GroupModal: GroupModalSlice
    }
})


export default store