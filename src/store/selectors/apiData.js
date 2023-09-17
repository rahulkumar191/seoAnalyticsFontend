import { apiDataState } from "../atoms/apiData";
import { selector } from "recoil";


export const fetchedApiData = selector({
    key: 'fetchedApiData',
    get: ({get}) => {
        const state = get(apiDataState);
        return state.fetchedApiData;
    }
})

export const isDataLoading = selector({
    key: 'isDataLoading',
    get: ({get}) => {
        const state = get(apiDataState);
        return state.isLoading;
    }
})

export const isScanning = selector({
    key: 'isScanning',
    get: ({get}) => {
        const state = get(apiDataState);
        return state.isScanning;
    }
})

export const screenShot = selector({
    key: 'screenShot',
    get: ({get}) => {
        const state = get(apiDataState);
        return state.screenShot;
    }
})