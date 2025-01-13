import { LogLevel } from './types';
export declare const logger: {
    isDebug: () => boolean;
    setLogLevel: (levelName?: LogLevel) => void;
    getLogLevel: () => LogLevel;
    debug: (msg: string) => void;
    info: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;
    fatal: (msg: string) => void;
};
