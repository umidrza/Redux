import { describe, expect, test } from 'vitest'
import feedbackReducer, {
  incrementGood,
  incrementNeutral,
  incrementBad,
  reset,
} from "./feedbackSlice";

describe("feedback reducer", () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  test("should return initial state", () => {
    const state = feedbackReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });

  test("incrementGood increases good by 1", () => {
    const state = feedbackReducer(initialState, incrementGood());
    expect(state.good).toBe(1);
  });

  test("incrementNeutral increases neutral by 1", () => {
    const state = feedbackReducer(initialState, incrementNeutral());
    expect(state.neutral).toBe(1);
  });

  test("incrementBad increases bad by 1", () => {
    const state = feedbackReducer(initialState, incrementBad());
    expect(state.bad).toBe(1);
  });

  test("reset returns initial state", () => {
    const modifiedState = { good: 5, neutral: 2, bad: 3 };
    const state = feedbackReducer(modifiedState, reset());
    expect(state).toEqual(initialState);
  });

  test("multiple actions work correctly", () => {
    let state = initialState;
    state = feedbackReducer(state, incrementGood());
    state = feedbackReducer(state, incrementGood());
    state = feedbackReducer(state, incrementBad());

    expect(state).toEqual({
      good: 2,
      neutral: 0,
      bad: 1,
    });
  });
});