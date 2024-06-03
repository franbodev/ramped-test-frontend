declare type ISelectOption<L = string, V = string, T = any> = T & {
    label: L;
    value: V;
};
