export type SnackType = 'success' | 'info' | 'warn' | 'error';

export type SnackInput = {
    id?: number | string;
    severity?: SnackType;
    content?: any;
    closable?: boolean;
    life?: number;
};
