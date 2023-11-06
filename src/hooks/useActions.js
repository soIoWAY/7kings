import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as statsActions} from "../store/stats/stats.slice.js";
import {actions as balanceActions} from '../store/balance/balance.slice.js'

const rootActions = {
    ...statsActions,
    ...balanceActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}