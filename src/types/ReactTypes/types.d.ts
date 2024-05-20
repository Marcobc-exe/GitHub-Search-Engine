import { Dispatch, SetStateAction } from "react";

/**
 * Typing boolean SetStateAction prop
 *
 * @param {S} - any type
 */
export type setStateAction<S> = Dispatch<SetStateAction<S>>;

/**
 * Typing value and SetValue for useState prop
 *
 * @param {S} - any type
 */
export type useStateProp<S> = [S, setStateAction];
