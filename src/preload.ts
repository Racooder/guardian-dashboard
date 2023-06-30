import { contextBridge, ipcRenderer } from 'electron';
import Toastify from 'toastify-js';
import { listFeedback, getStatistics } from './APIHandler';

contextBridge.exposeInMainWorld('Toastify', {
    toast: (options: Toastify.Options) => Toastify(options).showToast(),
});

contextBridge.exposeInMainWorld('guardian', {
    listFeedback: () => listFeedback(),
    getStatistics: () => getStatistics(),
});
