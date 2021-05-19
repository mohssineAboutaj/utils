const {
  removeDeplicates,
  merge,
  removeFromArray,
  removeTwins,
  toggleArrayValue,
} = require("../index");

const allImports = [
  removeDeplicates,
  merge,
  removeFromArray,
  removeTwins,
  toggleArrayValue,
];

describe("All is defined", () => {
  allImports.forEach((fn) => {
    test(`should defined`, () => {
      expect(fn).toBeDefined();
    });
  });
});

describe("All is a function", () => {
  allImports.forEach((fn) => {
    test("should is a function", () => {
      expect(typeof fn).toBe("function");
    });
  });
});

describe("removeDeplicates", () => {
  test("should is a function", () => {
    expect(typeof removeDeplicates).toBe("function");
  });

  test("should return an array", () => {
    const arr = [1, 1, 2, 3, 3, 4, 4, 6, 5];

    expect(Array.isArray(removeDeplicates(arr))).toBeTruthy();
  });

  test("should return exact values", () => {
    const arr = [1, 1, 2, 3, 3, 4, 4, 6, 5];

    expect(removeDeplicates(arr)).toEqual([1, 2, 3, 4, 6, 5]);
  });
});

describe("removeTwins", () => {
  test("should is a function", () => {
    expect(typeof removeTwins).toBe("function");
  });

  test("should return an array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const toRemove = [1, 2, 3];

    expect(Array.isArray(removeTwins(arr, toRemove))).toBeTruthy();
  });

  test("should return exact values", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 9];
    const toRemove = [1, 2, 7, 8, 3];

    expect(removeTwins(arr, toRemove)).toEqual([4, 5, 6, 9]);
  });
});

describe("merge", () => {
  test("should  is a function", () => {
    expect(typeof merge).toBe("function");
  });

  test("should return an array", () => {
    expect(
      merge([1, 2, 3], [4, 5, 6], "a", { b: 1 }, null, true, undefined, 20)
    ).toEqual([1, 2, 3, 4, 5, 6, "a", { b: 1 }, null, true, undefined, 20]);
  });
});

describe("removeFromArray", () => {
  test("should is a function", () => {
    expect(typeof removeFromArray).toBe("function");
  });

  test("should return an array", () => {
    const list = ["a", "b", "c", "d"];
    const toRemove = "a";

    expect(Array.isArray(removeFromArray(list, toRemove))).toBeTruthy();
  });

  test("should return exact values", () => {
    const list = ["a", "b", "c", "d"];
    const toRemove = "a";

    expect(removeFromArray(list, toRemove)).toEqual(["b", "c", "d"]);
  });
});

describe("toggleArrayValue", () => {
  test("should is a function", () => {
    expect(typeof toggleArrayValue).toBe("function");
  });

  test("should return exact values", () => {
    const list = ["a", "b", "c", "d"];
    const val = "g";

    expect(toggleArrayValue(list, val)).toEqual(["a", "b", "c", "d", "g"]);
    expect(toggleArrayValue(list, val)).toEqual(["a", "b", "c", "d"]);
  });
});
