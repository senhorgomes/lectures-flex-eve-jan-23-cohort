test("example test to mock a function", ()=> {
    const mock = jest.fn();//Axios call
    let result = mock("potato");
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    mock("potato");
    expect(mock).toHaveBeenCalledTimes(2);
})