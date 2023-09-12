import { createSelector } from "reselect"

import { IStore } from "../../../app/types"

const getTimer = (state: IStore) => state.playground.isTimer

export const getTimerSelector = createSelector(getTimer, (state) => state)
