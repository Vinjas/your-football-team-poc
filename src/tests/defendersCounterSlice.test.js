import reducer, { incrementDefender, decrementDefender, setDefender, resetDefender } from "../redux/reducers/defendersCounterSlice";

test('incremente player position', () => {
    const previousState = {"value": 3};

    expect(reducer(previousState, incrementDefender())).toEqual({"value": 4})
})

test('decrement player position', () => {
    const previousState = {"value": 3};

    expect(reducer(previousState, decrementDefender())).toEqual({"value": 2})
})

test('set player position', () => {
    const previousState = {"value": 2};

    expect(reducer(previousState, setDefender(5))).toEqual({"value": 5})
})

test('reset player position', () => {
    const previousState = {"value": 2};

    expect(reducer(previousState, resetDefender())).toEqual({"value": 0})
})