import {atom} from 'recoil';


export const apiDataState = atom({
    key: 'apiDataState',
    default: {
        url: "",
        fetchedApiData: [],
        isLoading: true,
        screenShot: "",
        isScanning: true
    }
})


