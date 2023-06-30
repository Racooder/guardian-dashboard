import { app } from "electron";
import "dotenv/config";

const isMac = process.platform === 'darwin';

export default () => {
    app.on('window-all-closed', () => {
        if (!isMac) {
          app.quit()
        }
    })
}
