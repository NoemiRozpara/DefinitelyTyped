// Type definitions for react-hooks-helper 1.6
// Project: https://github.com/revelcw/react-hooks-helper#readme
// Definitions by: Joao Edmundo <https://github.com/jedmundo>
//                 Noemi Rozpara <https://github.com/NoemiRozpara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

export as namespace ReactHooksHelper;

export interface NavigationProps {
    next: () => void;
    previous: () => void;
    go: (step: number | string) => void;
    // play and pause are always returned though have no effect if autoAdvanceDuration is 0 (default)
    play: () => void;
    pause: () => void;
}

export interface UseStepParams {
    initialStep?: number | string;
    autoAdvanceDuration?: number;
    steps: string[] | number;
}

export interface UseStepResponse {
    autoAdvanceDuration: number;
    isPaused: boolean;
    index: number;
    step: number | string;
    navigation: NavigationProps;
}

export function useStep(params: UseStepParams): UseStepResponse;

export interface FormTarget {
    target: {
        name: string; // object property name or Dot separated when hierarchical
        value: any;
        type?: string;
        checked?: boolean;
    };
}

export type SetForm = (
    event: React.SyntheticEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> | FormTarget,
) => void;

export function useForm<T>(defaultFormConfig: T): [T, SetForm];
