interface IRWSRuntimeHelper {
    _startTime: [number, number] | null;
    startExecTimeRecord: () => void;
    endExecTimeRecord: () => number;
    getRWSVar: (fileName: string) => string | null;
    setRWSVar: (fileName: string, value: string) => void;
}
declare const RWSRuntimeHelper: IRWSRuntimeHelper;
export { RWSRuntimeHelper, IRWSRuntimeHelper };